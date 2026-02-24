---
description: "Complete tech stack overview: Angular, TypeScript, NgRx Signals, Material, Vitest, Playwright, NestJS, Prisma, and build tooling"
applyTo: "**"
---

# Tech Stack Guidelines

This project is an NX monorepo and uses the following technology stack:

- **Frontend Framework:** Angular (latest version: A21+)
- **Backend Framework API:** Nestjs-based backend with RESTful endpoints
- **Language:** TypeScript (strict mode, strong typing)
- **State Management:** NgRx Signals Store
- **UI Library:** Angular Material
- **Component Patterns:** Standalone components, modern Angular control flow
- **Backend Framework API:** Nestjs-based backend with RESTful endpoints
- **Testing:** Vitest with ng-mocks for unit testing, Playwright for E2E testing
- **Build System:** @angular/build (esbuild-based)
- **Git Hooks:** Lefthook (auto-format & auto-fix on commit)
- **Linting/Formatting:** ESLint with Angular rules, Prettier
- **Other:**
  - No NgModules (standalone APIs only)
  - No static or in-memory data in application code
  - All data access via the API layer
  - No hardcoded values (e.g. API URLs) should be defined in environment files or in DataBase (e.g. json-server) and accessed via services
  - Use Angular's Dependency Injection for services and state management
  - Use Angular's HttpResource and HttpClient for all API interactions, with proper error handling and strong typing

For specific versions, refer to `package.json`
