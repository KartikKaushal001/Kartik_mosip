--
-- PostgreSQL database dump
--

\restrict OVXqLdXhfSx1EzbEKi1G5YNe7ocEoisGuiItLtBi98rIXKcRmbD8ern07g1QQfu

-- Dumped from database version 15.18 (Debian 15.18-1.pgdg13+1)
-- Dumped by pg_dump version 15.18 (Debian 15.18-1.pgdg13+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: students; Type: TABLE DATA; Schema: student; Owner: postgres
--

INSERT INTO certify.students VALUES ('a1b2c3d4-e5f6-7890-abcd-ef1234567803', 'STU-2021-003', 'Rahul Verma', 'rahul.verma@university.edu', '+91-9876543230', '2000-11-05', '789 Gandhi Road, Delhi 110001', 'M.Tech Artificial Intelligence', '2021-08-01', '2021-2023', 8.50, 'Suresh Verma', '+91-9876543231', 'GRADUATED', '2026-08-19 12:21:48.465311', '2026-08-19 12:21:48.465311');
INSERT INTO certify.students VALUES ('a1b2c3d4-e5f6-7890-abcd-ef1234567805', 'STU-2020-005', 'Vikram Singh', 'vikram.singh@university.edu', '+91-9876543250', '1999-06-18', '654 Rajpath, Jaipur, Rajasthan 302001', 'B.Tech Mechanical Engineering', '2020-08-01', '2020-2024', 8.20, 'Baldev Singh', '+91-9876543251', 'GRADUATED', '2026-08-19 12:21:48.465311', '2026-08-19 12:21:48.465311');
INSERT INTO certify.students VALUES ('a1b2c3d4-e5f6-7890-abcd-ef1234567801', 'STU-2022-001', 'Aarav Sharma', 'aarav.sharma@university.edu', '+91-9876543210', '2001-03-15', '123 MG Road, Bangalore, Karnataka 560001', 'B.Tech Computer Science', '2022-08-01', '2022-2026', 9.00, 'Rajesh Sharma', '+91-9876543211', 'ACTIVE', '2026-08-19 12:21:48.465311', '2026-08-19 12:31:30.08041');
INSERT INTO certify.students VALUES ('3220dec3-d28c-4c28-abfe-1348883d25f4', 'STU-2025-006', 'Sneha Gupta', 'sneha.gupta@university.edu', '+91-9876543260', '2003-04-12', '42 Connaught Place, New Delhi 110001', 'B.Tech Information Technology', '2025-08-01', '2025-2029', 0.00, 'Ramesh Gupta', '+91-9876543261', 'ACTIVE', '2026-08-19 13:19:16.809733', '2026-08-19 13:19:16.809745');
INSERT INTO certify.students VALUES ('a1b2c3d4-e5f6-7890-abcd-ef1234567802', 'STU-2022-002', 'Priya Patel', 'priya.patel@university.edu', '+91-9876543220', '2001-07-22', '456 Nehru Nagar, Mumbai, Maharashtra 400001', 'B.Tech Electronics', '2022-08-01', '2022-2026', 9.10, 'Amit Patel', '+91-9876543221', 'GRADUATED', '2026-08-19 12:21:48.465311', '2026-09-16 12:43:42.717084');
INSERT INTO certify.students VALUES ('a1b2c3d4-e5f6-7890-abcd-ef1234567804', 'STU-2023-004', 'Ananya Reddy', 'ananya.reddy@university.edu', '+91-9876543240', '2002-01-30', '321 Tank Bund Road, Hyderabad, Telangana 500001', 'B.Sc Data Science', '2023-08-01', '2023-2026', 7.80, 'Krishna Reddy', '+91-9876543241', 'GRADUATED', '2026-08-19 12:21:48.465311', '2026-09-16 12:43:42.756547');
INSERT INTO certify.students VALUES ('4344b0e3-19af-466c-b6da-928c9c1f6d6d', 'STU-2025-23', 'devansh Techchandani', 'afafsfa@has.com', '335423423523', '2007-07-12', 'sdge rsregsfe sergsefgsdfg', 'Bachelor of Computer Science', '2026-09-16', 'First Year', 9.80, 'erge rgerv', '3462343424532', 'GRADUATED', '2026-09-16 10:39:09.625534', '2026-09-16 12:43:42.801163');
INSERT INTO certify.students VALUES ('e823331e-0fc5-4005-88f2-d3b46080f245', 'STU-2442-23', 'Golu Soni 2', 'asdiasij@ksdf.com', '23423334223', '2008-07-10', 'werw vewerwerwr wetwe', 'Bachelor of Computer Science', '2026-09-16', 'Final Year', 9.20, 'AKDK jsfasfu', '234232342344', 'GRADUATED', '2026-09-16 11:13:19.7136', '2026-09-16 12:43:42.816211');
INSERT INTO certify.students VALUES ('06ac9967-2c32-45c1-85da-91c05ccd7fc7', 'STU-2026-09', 'Deepak', 'sdfd@aekfkan.com', '3648129472', '2005-07-16', 'wetb et twetw rt wetw et', 'Bachelor of Computer Science', '2026-09-16', 'Final Year', 9.50, 'werwe ertwet', '23523523345', 'Active', '2026-09-16 12:46:14.21591', '2026-09-16 12:46:14.215921');


--
-- Data for Name: student_graduation_details; Type: TABLE DATA; Schema: student; Owner: postgres
--

INSERT INTO certify.student_graduation_details VALUES ('d08ce2fe-a766-4012-9d04-e8506b3f3184', 'a1b2c3d4-e5f6-7890-abcd-ef1234567803', 'REG-2023-MTech-001', 'Master of Technology in Artificial Intelligence', 6, 2023, 'First Class with Distinction', 'ISSUED', '2026-08-19 12:21:48.469526', '2026-08-19 12:21:48.469526');
INSERT INTO certify.student_graduation_details VALUES ('e0817103-c846-44b2-af4b-1c842fc7c82a', 'a1b2c3d4-e5f6-7890-abcd-ef1234567805', 'REG-2024-BTech-001', 'Bachelor of Technology in Mechanical Engineering', 5, 2024, 'First Class', 'ISSUED', '2026-08-19 12:21:48.469526', '2026-08-19 12:21:48.469526');
INSERT INTO certify.student_graduation_details VALUES ('63671a06-8dff-411d-8044-86e3b9358d6d', 'a1b2c3d4-e5f6-7890-abcd-ef1234567802', 'REG-2026-BTech-003', 'Bachelor of Technology in Electronics', 6, 2026, 'First Class', 'PENDING', '2026-08-19 12:21:48.469526', '2026-08-19 12:21:48.469526');
INSERT INTO certify.student_graduation_details VALUES ('49645880-e490-43f2-ac95-4dc792cc73c4', 'a1b2c3d4-e5f6-7890-abcd-ef1234567804', 'REG-2026-BSc-001', 'Bachelor of Science in Data Science', 6, 2026, 'First Class', 'PENDING', '2026-08-19 12:31:41.761778', '2026-08-19 12:31:41.761791');
INSERT INTO certify.student_graduation_details VALUES ('11684b3e-d11a-400d-98a5-173fa581aef4', 'a1b2c3d4-e5f6-7890-abcd-ef1234567804', 'REG-1787144613143', 'Bachelor of Science in Data Science', 6, 2026, 'First Class', 'PENDING', '2026-08-19 13:03:33.184733', '2026-08-19 13:03:33.184755');
INSERT INTO certify.student_graduation_details VALUES ('4e292f3b-6ab3-4773-9e25-160f2d4d2634', 'a1b2c3d4-e5f6-7890-abcd-ef1234567804', 'REG-1787145688128', 'Bachelor of Science in Data Science', 6, 2026, 'First Class', 'PENDING', '2026-08-19 13:21:28.369294', '2026-08-19 13:21:28.369318');
INSERT INTO certify.student_graduation_details VALUES ('a5d7019f-3b44-4c0a-bedf-1bb8c03c0ca2', 'e823331e-0fc5-4005-88f2-d3b46080f245', 'STU-2442-23', 'Bachelor of Computer Science', 9, 2026, 'First Class with Distinction', 'PENDING', '2026-09-16 12:05:19.471193', '2026-09-16 12:05:19.471205');
INSERT INTO certify.student_graduation_details VALUES ('377df2eb-5e45-46c1-8d3a-cb01c028ed07', '4344b0e3-19af-466c-b6da-928c9c1f6d6d', 'STU-2025-23', 'Bachelor of Computer Science', 9, 2026, 'First Class with Distinction', 'PENDING', '2026-09-16 12:41:03.690037', '2026-09-16 12:41:03.690049');


--
-- PostgreSQL database dump complete
--

\unrestrict OVXqLdXhfSx1EzbEKi1G5YNe7ocEoisGuiItLtBi98rIXKcRmbD8ern07g1QQfu

