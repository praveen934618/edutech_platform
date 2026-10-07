\# Education Platform — Project Specification



\## 1. Project Status



This project is currently in the pre-client-requirements architecture phase.



The goal is to build a flexible, professional, client-manageable education platform that can be adapted after the client's requirements discovery process.



Client-specific content, branding, business rules, pricing, courses, contact information, SEO keywords and other final details must NOT be hardcoded before the requirements are confirmed.



\---



\## 2. Core Project Principle



Build the platform engine first, not the final client-specific website.



The system must be designed so that normal website management does not require editing source code.



The client/developer should eventually be able to manage website content, courses, students, branding, design settings and SEO through an authenticated admin/owner interface.



\---



\## 3. Technology Stack



\### Frontend



\- HTML5

\- CSS3

\- Vanilla JavaScript

\- JSON-based data structures where appropriate



\### Backend / Data Platform



\- Supabase

\- PostgreSQL

\- Supabase Authentication

\- Supabase Storage

\- Row Level Security (RLS)



\### Hosting



\- Netlify



\### Source Control



\- Git

\- GitHub



\### Development Tools



\- VS Code

\- Browser developer tools



\---



\## 4. Framework Policy



The project should remain static-first.



Do NOT introduce:



\- React

\- Next.js

\- Vue

\- Angular

\- Node.js backend

\- Express

\- Django backend



unless there is a clear architectural reason and the decision is explicitly reviewed.



The default implementation should use:



\- HTML

\- CSS

\- Vanilla JavaScript

\- Supabase



The purpose is to keep the platform lightweight, understandable, maintainable and cost-efficient.



\---



\# 5. Platform Architecture



The intended architecture is:



```text

&#x20;                   ┌─────────────────────┐

&#x20;                   │    Public Website   │

&#x20;                   │ HTML/CSS/JS         │

&#x20;                   └──────────┬──────────┘

&#x20;                              │

&#x20;                              ▼

&#x20;                   ┌─────────────────────┐

&#x20;                   │      Supabase       │

&#x20;                   │                     │

&#x20;                   │ PostgreSQL          │

&#x20;                   │ Authentication      │

&#x20;                   │ Storage             │

&#x20;                   │ Row Level Security  │

&#x20;                   └──────────┬──────────┘

&#x20;                              ▲

&#x20;                              │

&#x20;            ┌─────────────────┴─────────────────┐

&#x20;            │                                   │

&#x20;            ▼                                   ▼

&#x20;   ┌─────────────────┐                ┌─────────────────┐

&#x20;   │ Admin / Owner   │                │ Student Portal  │

&#x20;   │ Studio / CMS    │                │                 │

&#x20;   └─────────────────┘                └─────────────────┘

