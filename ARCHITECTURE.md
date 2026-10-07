\# Education Platform — Architecture



\## 1. Purpose



This document defines the technical architecture of the education platform.



The platform is designed as a static-first website with Supabase providing the database, authentication, storage and security layer.



The architecture must remain flexible until the client's detailed requirements are collected.



\---



\## 2. High-Level Architecture



```text

&#x20;                        PUBLIC USERS

&#x20;                             │

&#x20;                             ▼

&#x20;                ┌────────────────────────┐

&#x20;                │    Static Frontend     │

&#x20;                │                        │

&#x20;                │ HTML5                  │

&#x20;                │ CSS3                   │

&#x20;                │ Vanilla JavaScript     │

&#x20;                └────────────┬───────────┘

&#x20;                             │

&#x20;                             ▼

&#x20;                ┌────────────────────────┐

&#x20;                │       Supabase         │

&#x20;                │                        │

&#x20;                │ PostgreSQL             │

&#x20;                │ Authentication         │

&#x20;                │ Storage                │

&#x20;                │ Row Level Security     │

&#x20;                └────────────┬───────────┘

&#x20;                             │

&#x20;             ┌───────────────┴────────────────┐

&#x20;             │                                │

&#x20;             ▼                                ▼

&#x20;   ┌─────────────────────┐          ┌─────────────────────┐

&#x20;   │ Admin / Owner       │          │ Student Portal      │

&#x20;   │ Studio / CMS        │          │                     │

&#x20;   │                     │          │ Dashboard           │

&#x20;   │ Content             │          │ Courses             │

&#x20;   │ Courses             │          │ Lessons             │

&#x20;   │ Design              │          │ Progress            │

&#x20;   │ SEO                 │          │ Profile             │

&#x20;   └─────────────────────┘          └─────────────────────┘

