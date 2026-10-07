\# Education Platform — Security Specification



\## 1. Purpose



This document defines the security principles and requirements for the education platform.



Security must be considered from the beginning rather than added after the application is built.



The platform will use:



\- Supabase Authentication

\- PostgreSQL

\- Row Level Security (RLS)

\- Supabase Storage

\- HTTPS through the production hosting platform



\---



\# 2. Core Security Principle



Never trust the browser.



Anything running in frontend JavaScript can potentially be inspected or modified by a user.



Therefore:



```text

Frontend validation

&#x20;       ≠

Security

