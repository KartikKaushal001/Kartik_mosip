# Student Pre-Authorized Code Flow — Complete Walkthrough

This guide explains how the **Pre-Authorized Code Flow** connects to the **Student Graduation Backend** to issue Verifiable Credentials (VCs).

---

## Table of Contents
- [Overview](#overview)
- [Architecture](#architecture)
- [Files In Use](#files-in-use)
- [Postman Files To Import](#postman-files-to-import)
- [How It Works](#how-it-works)
- [Step-by-Step Testing Guide](#step-by-step-testing-guide)
- [Farmer vs Student Flow Comparison](#farmer-vs-student-flow-comparison)
- [Troubleshooting](#troubleshooting)

---

## Overview

The Pre-Authorized Code Flow allows an issuer to create a credential offer for a student, which can then be redeemed for a signed **StudentGraduationCredential** Verifiable Credential. The student's data (personal info + graduation details) is fetched from a PostgreSQL database.

### Flow Summary
```
Step 1: Generate Pre-Authorized Code (provide student_id)
Step 2: Get Credential Offer (extract pre-authorized_code)
Step 3: Exchange Code for Token (get access_token)
Step 4: Get Credential (receive signed VC with student + graduation data)
```

---

## Architecture

```
┌─────────────┐     HTTP      ┌──────────────────┐    SQL Query    ┌────────────────┐
│   Postman    │ ──────────►  │   Inji Certify   │ ─────────────► │   PostgreSQL   │
│  (Client)    │              │   (port 8090)    │                │  (port 5433)   │
│              │ ◄──────────  │                  │ ◄───────────── │                │
│              │   Signed VC  │  Postgres Data   │   Student +    │ certify schema │
│              │              │  Provider Plugin │   Graduation   │                │
└─────────────┘              └──────────────────┘    Data         └────────────────┘
                                                                          ▲
                                                                          │ CRUD
                                                                   ┌──────┴───────┐
                                                                   │ inji-usecase │
                                                                   │  (port 8085) │
                                                                   │ Spring Boot  │
                                                                   └──────────────┘
```

- **Inji Certify** issues VCs using the PostgresDataProviderPlugin
- **inji-usecase** (Student Backend) manages student + graduation data via REST API
- Both connect to the same PostgreSQL database

---

## Files In Use

### Inji Certify Stack (docker-compose-injistack/)

| File | Purpose |
|------|---------|
| `docker-compose.yaml` | Defines all Docker services (PostgreSQL, Certify, Nginx, inji-usecase) |
| `certify_init.sql` | Creates Certify DB schema + inserts StudentGraduationCredential config + sample student data |
| `config/certify-default.properties` | Core Certify configuration (server, auth, OAuth, caching, key management) |
| `config/certify-postgres-student.properties` | Maps `student_graduation_vc_ldp` scope → SQL query that joins students + graduation |
| `config/certify-csvdp-farmer.properties` | Farmer credential config (CSV-based, for comparison) |
| `certify-nginx.conf` | Nginx reverse proxy config |

### Student Backend (inji-usecase/)

| File | Purpose |
|------|---------|
| `src/.../controller/StudentDataController.java` | REST API endpoints (`/api/students`, `/api/graduation`) |
| `src/.../service/StudentService.java` | Business logic for student CRUD |
| `src/.../service/StudentGraduationService.java` | Business logic for graduation CRUD |
| `src/.../entity/student/Student.java` | JPA entity mapping for `students` table |
| `src/.../entity/student/StudentGraduationDetail.java` | JPA entity mapping for `student_graduation_details` table |
| `src/.../repository/student/StudentRepository.java` | Spring Data JPA queries for students |
| `src/.../repository/student/StudentGraduationRepository.java` | Spring Data JPA queries for graduation |
| `src/.../dto/student/StudentDto.java` | Data transfer object for student API |
| `src/.../dto/student/StudentGraduationDto.java` | Data transfer object for graduation API |
| `src/.../mapper/student/StudentMapper.java` | MapStruct mapper: Student ↔ StudentDto |
| `src/.../mapper/student/StudentGraduationMapper.java` | MapStruct mapper: Graduation ↔ GraduationDto |
| `src/.../config/CorsConfig.java` | CORS configuration |
| `src/.../config/GlobalExceptionHandler.java` | Error handling |
| `src/main/resources/application.properties` | DB connection, JPA config, server port |
| `init/1-init.sql` | Creates `student_management` database |
| `init/2-student-schema.sql` | Creates `student` schema + tables |
| `init/3-sample-data.sql` | Inserts 5 sample students + 4 graduation records |
| `pom.xml` | Maven build config |
| `Dockerfile` | Multi-stage Docker build |
| `docker-compose.yml` | Standalone PostgreSQL for local dev |

---

## Postman Files To Import

All files are located in: `docs/postman-collections/`

### 1. Collection (the API requests)

| File | What it contains |
|------|-----------------|
| `Inji Certify - Pre Auth Code.postman_collection.json` | The pre-authorized code flow (4 steps) + well-known endpoints + credential configuration management |

### 2. Environments (connection settings)

| File | When to use |
|------|-------------|
| `certify-student-pre-auth.postman_environment.json` | **For Student Graduation Credentials** — sets `credential_config_id` = `StudentGraduationCredential` |
| `Inji-certify-pre-auth-code.postman_environment.json` | For Farmer Credentials (original) — sets `credential_config_id` = `FarmerCredential` |

### 3. Student API Tests (separate collection)

| File | Located in |
|------|------------|
| `Inji_Student_API_Tests.postman_collection.json` | `inji-usecase/` — CRUD operations for students + graduation data |

### Import Order in Postman:
1. Import the **collection**: `Inji Certify - Pre Auth Code.postman_collection.json`
2. Import the **student environment**: `certify-student-pre-auth.postman_environment.json`
3. (Optional) Import the student API tests: `inji-usecase/Inji_Student_API_Tests.postman_collection.json`

---

## How It Works

### The Key Configuration

In `config/certify-postgres-student.properties`, this mapping connects the credential scope to a SQL query:

```properties
mosip.certify.data-provider-plugin.postgres.scope-query-mapping={
    'student_graduation_vc_ldp': 'SELECT s.student_id, s.full_name, s.email, \
        s.phone_number, s.date_of_birth, s.course_program, s.enrollment_date, \
        s.academic_year, s.cgpa, g.registration_number, g.degree_title, \
        g.graduation_month, g.graduation_year, g.classification, \
        g.certificate_status \
        FROM certify.students s \
        JOIN certify.student_graduation_details g ON s.id = g.student_id \
        WHERE s.student_id = :id OR (:id LIKE ''{%}'' AND s.student_id = jsonb_extract_path_text(cast(:id as jsonb), ''studentId''))'
}
```

When you send `"student_id": "STU-2022-001"` in the claims, the `:id` parameter gets replaced with `STU-2022-001`, and PostgreSQL returns all 15 fields which populate the Verifiable Credential.

### Data Flow

```
1. You send:        { "student_id": "STU-2022-001" }
2. Certify maps:    scope "student_graduation_vc_ldp" → SQL query
3. SQL executes:    WHERE s.student_id = 'STU-2022-001'
4. DB returns:      full_name, email, cgpa, degree_title, classification, etc.
5. Certify builds:  StudentGraduationCredential VC with all fields
6. You receive:     Signed Verifiable Credential
```

---

## Step-by-Step Testing Guide

### Prerequisites
1. **Docker Desktop** running
2. Start the full Inji stack:
   ```powershell
   cd c:\Projects\MosipInji\docker-compose\docker-compose-injistack
   docker compose up -d
   ```
3. Import the collection + student environment in Postman
4. Select **`certify-student-pre-auth-env`** environment in Postman (top-right dropdown)

### Step 1: Generate Pre-Authorized Code
**Request**: `POST {{certifyurl}}/pre-authorized-data`

**Body** (replace the default farmer body with this):
```json
{
    "credential_configuration_id": "StudentGraduationCredential",
    "claims": {
        "studentId": "STU-2022-001"
    },
    "expires_in": 600,
    "tx_code": "12345"
}
```

**Expected Response**: `200 OK` with a `credential_offer_uri`

> **Note**: The `student_id` must exist in the database with graduation records. Available options:
> - `STU-2022-001` — Aarav Sharma (B.Tech Computer Science)
> - `STU-2022-002` — Priya Patel (B.Tech Electronics)
> - `STU-2021-003` — Rahul Verma (M.Tech AI, GRADUATED)
> - `STU-2020-005` — Vikram Singh (B.Tech Mechanical, GRADUATED)

### Step 2: Get Credential Offer
**Request**: `GET {{certifyurl}}/credential-offer-data/{{offer_id}}`

No changes needed — the `offer_id` is auto-captured from Step 1.

**Expected Response**: `200 OK` with `pre-authorized_code`

### Step 3: Exchange Code for Token
**Request**: `POST {{certifyurl}}/oauth/token`

No changes needed — uses `{{pre_authorized_code}}` and `{{pre_auth_tx_code}}` automatically.

**Expected Response**: `200 OK` with `access_token` and `c_nonce`

### Step 4: Get Credential with Pre-Auth Token
**Request**: `POST {{certifyurl}}/issuance/credential`

**Body** (change `FarmerCredential` to `StudentGraduationCredential`):
```json
{
    "format": "ldp_vc",
    "credential_definition": {
        "@context": [
            "https://www.w3.org/2018/credentials/v1"
        ],
        "type": [
            "VerifiableCredential",
            "StudentGraduationCredential"
        ]
    },
    "proof": {
        "proof_type": "jwt",
        "jwt": "{{proof_jwt}}"
    }
}
```

**Expected Response**: `200 OK` with a signed Verifiable Credential containing:
```json
{
    "credential": {
        "@context": ["https://www.w3.org/2018/credentials/v1"],
        "type": ["VerifiableCredential", "StudentGraduationCredential"],
        "credentialSubject": {
            "studentId": "STU-2022-001",
            "fullName": "Aarav Sharma",
            "email": "aarav.sharma@university.edu",
            "dateOfBirth": "2001-03-15",
            "courseProgram": "B.Tech Computer Science",
            "academicYear": "2022-2026",
            "cgpa": "8.75",
            "registrationNumber": "REG-2026-BTech-002",
            "degreeTitle": "Bachelor of Technology in Computer Science",
            "graduationMonth": "6",
            "graduationYear": "2026",
            "classification": "First Class with Distinction",
            "certificateStatus": "PENDING"
        },
        "proof": { "..." }
    }
}
```

---

## Farmer vs Student Flow Comparison

| Aspect | Farmer Flow | Student Flow |
|--------|-------------|--------------|
| **Environment** | `certify-pre-auth-code-env` | `certify-student-pre-auth-env` |
| **credential_config_id** | `FarmerCredential` | `StudentGraduationCredential` |
| **Data Provider Plugin** | `PreAuthDataProviderPlugin` (CSV) | `PostgresDataProviderPlugin` |
| **Claims in Step 1** | `fullName`, `dateOfBirth`, `gender`, `phone` | `student_id` only |
| **How data is fetched** | Claims sent directly become VC data | `student_id` used to query PostgreSQL |
| **Credential Type in Step 4** | `FarmerCredential` | `StudentGraduationCredential` |
| **Data source** | `farmer_identity_data.csv` | `certify.students` + `certify.student_graduation_details` tables |
| **Steps 2 & 3** | Same | Same |

---

## Troubleshooting

### "Credential configuration not found"
- Ensure the Certify container loaded the `postgres-student` profile
- Check: `docker logs <certify-container>` for profile loading
- The `StudentGraduationCredential` config must exist in the `certify.credential_config` table

### "No data found for student_id"
- The student must exist in `certify.students` table (not `student.students`)
- The student must have graduation records in `certify.student_graduation_details`
- Check with: `docker exec -it <db-container> psql -U postgres -d inji_certify -c "SELECT student_id FROM certify.students;"`

### Step 4 returns error about proof/nonce
- The `c_nonce` expires in 40 seconds — run Steps 3 and 4 quickly
- Make sure the `pmlib` global variable is set (required for JWT proof generation)
- Check the Postman Console (View → Show Postman Console) for detailed errors

### Docker containers not starting
```powershell
# Check container status
docker ps -a

# View logs
docker logs <container-name>

# Reset everything
docker compose down -v
docker compose up -d
```
