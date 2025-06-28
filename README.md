# ✅ Tech Stack Overview

## Main Framework: Next.js
Utilized for server-side rendering, static site generation, and building all dashboards and pages with high performance and scalability in mind.

## Design System: Shadcn/UI + Tailwind CSS
Combines utility-first styling with prebuilt, accessible components for a consistent and responsive UI across all parts of the application.

## Icons: Lucide
A modern and customizable icon library used for visual consistency across UI components.

## Typography

**Font Family**  
- **Titles, buttons, headers:** "Creato Display"  
- **Body text:** sans-serif

**Font Size System**  
Custom font size classes (`.fz-14`, `.fz-20`, `.fz-heading`, etc.) are defined inside the Tailwind `@layer components` to ensure consistent typography across screen sizes.

# 🧠 Developer Tools

## Linting: ESLint
Enforces strict code quality rules. Modifying or disabling ESLint configurations is not allowed without prior team approval.

## State Management: Zustand
A minimal, scalable state management solution that works with both client and server components, making it ideal for complex dashboard interactions.

## API Management
- **React Query** – Handles server state, caching, and background synchronization.  
- **Axios** – Used for making HTTP requests with built-in support for interceptors and custom configuration.

## Forms & Validation
- **React Hook Form** – For performant and scalable form management.  
- **Zod** – For robust schema validation and type-safe data handling.

## Internationalization (i18n)
A modern translation library (e.g., `next-i18next` or `i18next`) to enable multilingual support and localization.

# 🧱 Ideal Use Case
This boilerplate is tailored for admin dashboards and content-heavy platforms with strict design systems, multilingual requirements, and robust client-server interactions.
