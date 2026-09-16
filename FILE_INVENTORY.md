# File Inventory — Keep vs. Future Cleanup

> **Purpose**: Your new backend (`inji-usecase`) and the pre-authorized code flow are the correct,
> working implementation. This file categorizes every part of the repo so you know what to keep
> and what can be safely deleted in the future.
>
> **Created**: 2026-09-16 after merging `feat/pre-auth` into `main`.

---

## ✅ KEEP — Essential Files (New Backend + Pre-Auth Flow)

These files are **required** for the student credential issuance via the pre-authorized code flow.

### `inji-usecase/` — Your New Backend (Spring Boot)

| Path | Purpose |
|------|---------|
| `inji-usecase/pom.xml` | Maven build definition (Java 21, Spring Boot) |
| `inji-usecase/Dockerfile` | Docker image build (Java 21 base) |
| `inji-usecase/src/main/java/.../InjiDataCreationApp.java` | Spring Boot main class |
| **Config** | |
| `inji-usecase/src/main/java/.../config/AppConfig.java` | RestTemplate + app config beans |
| `inji-usecase/src/main/java/.../config/SecurityConfig.java` | Spring Security filter chain with API key auth |
| `inji-usecase/src/main/java/.../config/CorsConfig.java` | CORS configuration |
| `inji-usecase/src/main/java/.../config/GlobalExceptionHandler.java` | Centralized error handling |
| **Controllers** | |
| `inji-usecase/src/main/java/.../controller/ApiKeyController.java` | API key creation endpoint |
| `inji-usecase/src/main/java/.../controller/StudentDataController.java` | Student CRUD + credential offer trigger |
| **DTOs** | |
| `inji-usecase/src/main/java/.../dto/ApiKeyResponse.java` | API key response DTO |
| `inji-usecase/src/main/java/.../dto/CreateApiKeyRequest.java` | API key request DTO |
| `inji-usecase/src/main/java/.../dto/CredentialOfferTriggerRequest.java` | Credential offer trigger request |
| `inji-usecase/src/main/java/.../dto/CredentialOfferTriggerResponse.java` | Credential offer trigger response |
| `inji-usecase/src/main/java/.../dto/student/StudentDto.java` | Student data transfer object |
| `inji-usecase/src/main/java/.../dto/student/StudentGraduationDto.java` | Graduation detail DTO |
| **Entities** | |
| `inji-usecase/src/main/java/.../entity/ApiKey.java` | API key JPA entity |
| `inji-usecase/src/main/java/.../entity/student/Student.java` | Student JPA entity |
| `inji-usecase/src/main/java/.../entity/student/StudentGraduationDetail.java` | Graduation detail entity |
| **Repositories** | |
| `inji-usecase/src/main/java/.../repository/ApiKeyRepository.java` | API key data access |
| `inji-usecase/src/main/java/.../repository/student/StudentRepository.java` | Student data access |
| `inji-usecase/src/main/java/.../repository/student/StudentGraduationRepository.java` | Graduation data access |
| **Security** | |
| `inji-usecase/src/main/java/.../security/ApiKeyAuthFilter.java` | API key authentication filter |
| **Services** | |
| `inji-usecase/src/main/java/.../service/ApiKeyService.java` | API key management logic |
| `inji-usecase/src/main/java/.../service/CredentialOfferService.java` | Calls Certify to trigger credential offers |
| `inji-usecase/src/main/java/.../service/StudentService.java` | Student CRUD service |
| `inji-usecase/src/main/java/.../service/StudentGraduationService.java` | Graduation detail service |
| **Mappers** | |
| `inji-usecase/src/main/java/.../mapper/student/StudentMapper.java` | Entity ↔ DTO mapping |
| `inji-usecase/src/main/java/.../mapper/student/StudentGraduationMapper.java` | Graduation entity ↔ DTO mapping |
| **Resources** | |
| `inji-usecase/src/main/resources/application.properties` | Application configuration |
| **Tests** | |
| `inji-usecase/src/test/java/.../controller/ApiKeyControllerSecurityTest.java` | API key auth tests |
| `inji-usecase/src/test/java/.../controller/CredentialOfferControllerTest.java` | Credential offer endpoint tests |
| `inji-usecase/src/test/java/.../entity/ApiKeyLombokTest.java` | ApiKey entity tests |
| `inji-usecase/src/test/java/.../entity/EntitySchemaTest.java` | Entity schema validation |
| `inji-usecase/src/test/java/.../repository/ApiKeyRepositoryTest.java` | Repository integration tests |
| `inji-usecase/src/test/java/.../security/ApiKeyAuthFilterTest.java` | Auth filter unit tests |
| `inji-usecase/src/test/java/.../service/ApiKeyServiceTest.java` | API key service tests |
| `inji-usecase/src/test/java/.../service/CredentialOfferServiceTest.java` | Credential offer service tests |
| `inji-usecase/src/test/resources/application-test.properties` | Test configuration |

### Docker Compose / Infrastructure (Modified for your use case)

| Path | Purpose |
|------|---------|
| `docker-compose/docker-compose-injistack/docker-compose.yaml` | **Main compose file** — includes inji-usecase service + postgres-student profile |
| `docker-compose/docker-compose-injistack/certify_init.sql` | **Consolidated DB schema** — student tables, API key tables, sample data |
| `docker-compose/docker-compose-injistack/config/certify-default.properties` | Certify config (includes credentialOfferCache) |
| `docker-compose/docker-compose-injistack/config/certify-postgres-student.properties` | Student-specific Certify config |

### Database Init Scripts (for standalone dev)

| Path | Purpose |
|------|---------|
| `inji-usecase/init/1-init.sql` | DB initialization |
| `inji-usecase/init/2-student-schema.sql` | Student + graduation schema |
| `inji-usecase/init/3-sample-data.sql` | Sample student data |

### Documentation (Your work)

| Path | Purpose |
|------|---------|
| `docs/Pre-Authorized-Code.md` | Pre-auth code flow documentation |
| `docs/student-preauth-walkthrough/README.md` | Step-by-step walkthrough |
| `docs/postman-collections/certify-student-pre-auth.postman_environment.json` | Postman env for student pre-auth |
| `docs/postman-collections/Inji Certify - Pre Auth Code.postman_collection.json` | Postman collection for pre-auth |
| `docs/postman-collections/Inji-certify-pre-auth-code.postman_environment.json` | Alt pre-auth Postman env |
| `PROJECT_HANDOVER.md` | Project handover document |

### Testing

| Path | Purpose |
|------|---------|
| `test_e2e.sh` | End-to-end test script for the full flow |
| `test_pre_auth_flow.py` | Python test for pre-auth flow |
| `inji-usecase/Inji_Student_API_Tests.postman_collection.json` | Postman API tests for student endpoints |

### Project Essentials

| Path | Purpose |
|------|---------|
| `.gitignore` | Git ignore rules |
| `LICENSE` | License file |
| `README.md` | Project README |

---

## 🗑️ CANDIDATE FOR DELETION — Upstream / Legacy Files

These come from the original `inji/inji-certify` upstream repo. They are **not needed** for your
student credential backend — they are the Certify server source code, CI/CD, deployment configs,
and documentation for features you don't modify.

> [!CAUTION]
> Only delete these **after** you have confirmed your Docker Compose setup works end-to-end,
> since the Compose stack pulls Certify as a **pre-built Docker image** — you don't build it from source.

### Certify Server Source Code (upstream — pulled as Docker image)

| Path | Reason |
|------|--------|
| `certify-core/` | Certify core library source — you use the Docker image, not building from source |
| `certify-integration-api/` | Certify plugin API source — same reason |
| `certify-service/` | Certify service source — same reason |
| `certify-service-with-plugins/` | Certify with plugins source — same reason |
| `pom.xml` (root) | Root Maven POM for building Certify from source — not needed |
| `mvnw.cmd` (root) | Maven wrapper for building Certify — not needed |

### Database & Deployment (upstream)

| Path | Reason |
|------|--------|
| `db_scripts/` | Upstream DB migration scripts — your schema is in `certify_init.sql` |
| `db_upgrade_script/` | Upstream DB upgrade scripts — not needed |
| `deploy/` | Kubernetes deployment configs — not applicable for Docker Compose dev |
| `helm/` | Helm charts — not applicable for Docker Compose dev |

### CI/CD & Testing (upstream)

| Path | Reason |
|------|--------|
| `.github/` | GitHub Actions workflows from upstream — not your CI |
| `api-test/` | Upstream API test suite — not your tests |

### Docs (upstream — not related to your use case)

| Path | Reason |
|------|--------|
| `docs/Claim-169-QR-Code-Support.md` | Upstream feature doc |
| `docs/Credential-Issuer-Configuration.md` | Upstream config doc |
| `docs/Data-Integrity-Proof-Support.md` | Upstream feature doc |
| `docs/How-to-use-Mosip-IDA-DataProvider-Plugin.md` | Upstream plugin doc |
| `docs/Ledger-Issuance.md` | Upstream feature doc |
| `docs/Local-Development.md` | Upstream local dev guide |
| `docs/Migration-Guide-0.11.0-to-0.12.0.md` | Upstream migration guide |
| `docs/PKI-Support-and-Integration-with-SD-JWT-VC.md` | Upstream feature doc |
| `docs/Presentation-During-Issuance.md` | Upstream feature doc |
| `docs/README.md` | Upstream docs index |
| `docs/RELEASES.md` | Upstream release notes |
| `docs/Rendering-Template.md` | Upstream feature doc |
| `docs/SD-JWT-Support.md` | Upstream feature doc |
| `docs/VC-Revocation-Support.md` | Upstream feature doc |
| `docs/VCIssuance-vs-DataProvider.md` | Upstream comparison doc |
| `docs/inji-certify-openapi.yaml` | Upstream OpenAPI spec |

### Postman Collections (upstream — not for your flow)

| Path | Reason |
|------|--------|
| `docs/postman-collections/Inji Certify - Presentation During Issuance VCI.postman_collection.json` | Presentation flow, not pre-auth |
| `docs/postman-collections/Inji-certify-credential-status-and-ledger-search.postman_collection.json` | Ledger search, not your use case |
| `docs/postman-collections/Inji-certify-presentation-during-issuance.postman_environment.json` | Presentation flow env |
| `docs/postman-collections/inji-certify-with-mock-identity.postman_collection.json` | Mock identity collection |
| `docs/postman-collections/inji-certify-with-mock-identity.postman_environment.json` | Mock identity env (315 KB) |
| `docs/postman-collections/inji-certify-with-mock-mdoc-vci.postman_collection.json` | mDoc VCI collection |
| `docs/postman-collections/inji-certify-with-sunbird-insurance.postman_collection.json` | Sunbird insurance collection |
| `docs/postman-collections/inji-certify-with-sunbird-insurance.postman_environment.json` | Sunbird insurance env (312 KB) |

### Docker Compose (upstream extras)

| Path | Reason |
|------|--------|
| `docker-compose/docker-compose-injistack/docker-compose-certify-only.yaml` | Certify-only compose — your main compose is the full stack |
| `docker-compose/docker-compose-injistack/Add-New-Usecase.md` | Upstream how-to doc |
| `docker-compose/docker-compose-injistack/Add-New-Usecase-Using-PostgresPlugin.md` | Upstream how-to doc |
| `docker-compose/docker-compose-injistack/mimoto_init.sql` | Mimoto (wallet) DB init — may or may not be needed |
| `docker-compose/docker-compose-injistack/verify_init.sql` | Verify DB init — may or may not be needed |
| `docker-compose/install.sh` | Upstream install script |
| `docker-compose/destroy.sh` | Upstream teardown script |

### Miscellaneous Scratch/Debug Files

| Path | Reason |
|------|--------|
| `decode_collection.py` | One-off script to decode Postman collections |
| `decoded_collection.json` | Output of above script |
| `issued_credential.json` | Debug output — sample issued credential |
| `postman-pmlib-code.js` | Postman library code (303 KB) — utility file |
| `test_jwt.js` | JWT test script — one-off debugging |
| `__pycache__/` | Python cache — should be gitignored |
| `inji-usecase/docker-compose.yml` | Standalone dev compose for inji-usecase (may be redundant with main compose) |
| `inji-usecase/mvnw.cmd` | Maven wrapper (keep if building locally without Maven installed) |

---

## ⚠️ REVIEW BEFORE DELETING — Possibly Needed

These files sit at the boundary — they might still be useful depending on your setup:

| Path | Notes |
|------|-------|
| `docker-compose/docker-compose-injistack/certify-nginx.conf` | Nginx config for Certify reverse proxy — needed if using the full stack compose |
| `docker-compose/docker-compose-injistack/nginx.conf` | General nginx config — needed if using the full stack compose |
| `docker-compose/docker-compose-injistack/certs/` | SSL certificates — needed if using HTTPS locally |
| `docker-compose/docker-compose-injistack/config/` (other files) | Additional Certify config files — some may be referenced by docker-compose.yaml |
| `docker-compose/docker-compose-injistack/context/farmer.json` | Example VC context — only if you reference it |
| `docker-compose/docker-compose-injistack/data/` | Data directory used by compose volumes |
| `docker-compose/docker-compose-injistack/README.md` | Useful reference for the compose setup |

---

## Summary

| Category | Count | Action |
|----------|-------|--------|
| ✅ **KEEP** (new backend + pre-auth) | ~50 files | Do not delete |
| 🗑️ **Delete candidates** (upstream/legacy) | ~40+ files, 6 directories | Safe to delete when ready |
| ⚠️ **Review first** | ~8 files/dirs | Check if referenced by docker-compose before deleting |
