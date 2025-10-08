You are an expert in TypeScript, Angular, NestJS, and this fullstack Nx monorepo. You write maintainable, performant code following the project's specific architectural patterns.

## Nx Monorepo Architecture

This is a fullstack monorepo with strict separation:
- **Frontend**: Angular 21+ with signals and standalone components
- **Backend**: NestJS with Prisma ORM
- **Database**: PostgreSQL with Prisma schema in `libs/db/`

### Path Aliases (Critical)
Always use these import aliases from `tsconfig.base.json`:
- `@fe/*` - Frontend libraries (layout, services, stores, tokens, ui, user, utilities)
- `@be/*` - Backend data access layers (posts, users) 
- `@db/*` - Database types and Prisma client
- Applications have specific paths like `@fe/app/data`

### Project Structure
- `apps/frontend/dev-app` - Main Angular application
- `apps/backend/nest-app` - NestJS API server  
- `libs/frontend/*` - Shared Angular libraries organized by domain
- `libs/backend/data-access/*` - Domain-specific service layers
- `libs/db/` - Prisma schema, migrations, and generated types

## Angular Patterns (Project-Specific)

### Dependency Injection Tokens
Use injection tokens for configuration and shared data:
```typescript
// From @fe/tokens
import { MENU_ITEMS_TOKEN, ENVIRONMENT_TOKEN, DICTIONARIES_TOKEN } from '@fe/tokens';
// Provided in app.config.ts
{ provide: MENU_ITEMS_TOKEN, useValue: APP_MENU_ITEMS }
```

### Component Architecture
- Always use standalone components (default, no `standalone: true` needed)
- Use `inject()` function, not constructor injection
- Use `input()`, `output()`, `computed()` for reactive patterns
- Import from `@angular/material` for UI components

### Service Organization
- `@fe/services` - Core business logic services
- `@fe/stores` - Signal-based state management 
- Services use `providedIn: 'root'` and `inject()` pattern

## Database & Backend

### Prisma Integration
- Schema: `libs/db/prisma/schema.prisma`
- Generated client: `libs/db/generated/prisma/`
- Import types: `import { User, Post } from '@db/prisma'`
- Migrations in `libs/db/migrations/`

### NestJS Structure  
- Data access layers in `libs/backend/data-access/{posts,users}`
- Each depends on `@db/prisma-client` library
- API prefix: `/api` (set in `main.ts`)

## Development Workflows

### Key Commands
```bash
# Start development servers
pnpm run start-dev-app          # Angular frontend  
pnpm run start-nest-app         # NestJS backend
pnpm run start:frontend:dev     # Frontend with proxy

# Database operations
pnpm run start:prisma           # Generate + migrate
pnpm exec prisma generate       # Generate client only
pnpm exec prisma migrate dev    # Run migrations

# Nx operations  
nx serve dev-app                # Angular dev server
nx serve nest-app               # NestJS dev server
nx build <project>              # Build specific project
nx test <project>               # Run tests
nx graph                        # Visualize dependencies
```

### Configuration Files
- Environment setup: `scripts/setenv.ts` (run via `configangular`)
- Proxy config: `proxy.config.json` for API routing
- Custom Nx plugins configured for TypeScript, Webpack, ESLint, Jest, Playwright

Use `nx show project <name>` to see available targets for any project.
