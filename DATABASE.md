\# Education Platform — Database Design



\## 1. Purpose



This document defines the initial database architecture for the education platform.



The database will use:



\- Supabase PostgreSQL

\- Supabase Authentication

\- Supabase Storage

\- Row Level Security (RLS)



The schema is intentionally flexible because final client requirements have not yet been collected.



No production database should be considered final until the requirements discovery process is complete.



\---



\# 2. Database Principles



The database should follow these principles:



1\. Use UUID primary keys where appropriate.

2\. Use foreign keys for relationships.

3\. Use timestamps for important records.

4\. Use constraints to maintain data integrity.

5\. Use indexes for frequently queried fields.

6\. Use RLS for protected data.

7\. Never store passwords manually.

8\. Use Supabase Auth for authentication.

9\. Keep public and private data clearly separated.

10\. Avoid unnecessary duplication.

11\. Use soft deletion/archive status where appropriate.

12\. Store structured design configuration as JSONB where appropriate.

13\. Keep client-specific business rules configurable.



\---



\# 3. Authentication Architecture



Supabase Authentication will manage authentication.



The system should use:



```text

auth.users

&#x20;   │

&#x20;   ▼

profiles

