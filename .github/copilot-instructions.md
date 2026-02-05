# Copilot Instructions pour FullStack App

## Communication Style
- Concis et direct; éviter les explications superflues sauf si demandées
- Terminologie technique pour développeurs professionnels
- Réponses "code-first"; montrer des exemples plutôt que de longues descriptions
- Poser des questions de clarification si les exigences sont ambiguës
- Expliquer les compromis quand plusieurs approches valides existent
- Être honnête sur les limitations ou problèmes potentiels

## Code Generation Rules
- Gestion d'erreurs complète avec types d'exceptions appropriés
- Validation complète des entrées pour prévenir les injections
- Réutiliser les patterns et utilitaires existants; éviter la duplication
- **Suivre les conventions de style, formatage et nommage du projet existant**
- Noms descriptifs et auto-documentés
- Code simple et lisible plutôt que complexe ou intelligent
- Principe de responsabilité unique
- Éviter dépendances circulaires, couplage fort, god objects
- Fonctions petites et focalisées
- Typage strict avec interfaces; éviter loose typing
- Documentation uniquement pour logique complexe
- **Ne pas écrire de commentaires de code si non demandés**

## Architecture du Projet

**Monorepo Nx fullstack** : Prisma + NestJS + Angular 21+ avec DDD (Domain-Driven Design)

### Structure Clé
```
apps/
  backend/nest-app/           # NestJS (:3000)
  frontend/app-jcm/           # Angular (:4000)
libs/
  backend/                    # Modules NestJS par domaine
    data-access/              # users/, tasks/, posts/ ...
    iam/                      # Auth complet (JWT, 2FA, Passwordless)
    prisma-client/            # Service Prisma encapsulé
    utilities/                # Utils (mails, files, db-config)
  frontend/                   # Modules Angular
    core/                     # Fondations (auth, layout, shared)
    domains/                  # Domaines métier (user/, task/, post/)
    features/                 # Composants réutilisables
    models/                   # Types TypeScript partagés
    stores/                   # State management global (AppStore)
  prisma/                     # Schema Prisma centralisé
scripts/                      # Utilitaires de configuration
```

### Organisation DDD Frontend

**Pattern obligatoire** : Chaque domaine suit `feature/ui/data/util`  
**⚠️ RÈGLE CRITIQUE** : Tous components/directives/pipes dans leur **propre sous-dossier**

```
libs/frontend/domains/user/src/lib/
  feature/                    # Composants intelligents (conteneurs)
    user-list/                # ✅ Sous-dossier obligatoire
  ui/                         # Composants de présentation
    user-card/                # ✅ Sous-dossier obligatoire
  data/                       # Services et accès données
    services/
    models/
    infrastructure/
  store/                      # State management (user.store.ts)
  util/                       # Helpers
```

**Exemples de référence** :
- [libs/frontend/domains/user/src/lib/feature/user-list/](libs/frontend/domains/user/src/lib/feature/user-list/)
- [libs/frontend/domains/task/src/lib/feature/task-list/](libs/frontend/domains/task/src/lib/feature/task-list/)
- [libs/backend/data-access/users/](libs/backend/data-access/users/)

## Build & Test Commands

### Démarrage Development (séquence obligatoire)
```bash
# 1. PostgreSQL
pnpm run db:docker:up

# 2. Configuration (⚠️ OBLIGATOIRE avant démarrage)
pnpm run configproxy          # Génère proxy.config.json
pnpm run configangular -- --environment=dev  # Génère environment.ts

# 3. Database setup
pnpm run start:prisma         # Generate + migrate
pnpm run seed-param           # Configuration params
pnpm run seed-faker           # (optionnel) Données de test

# 4. Démarrage
pnpm run start:backend:dev    # Terminal 1 → :3000
pnpm run start:frontend:dev   # Terminal 2 → :4000
```

### Database Management
```bash
pnpm run prisma:generate      # Génère le client Prisma
pnpm run prisma-migrate       # Applique migrations
pnpm run prisma:studio        # Interface admin → :5555
pnpm run start:prisma         # Generate + migrate (combiné)
```

### Testing
```bash
nx test <project-name>        # Unit tests (Vitest)
nx e2e app-jcm-e2e           # E2E tests (Playwright)
nx affected:test             # Tests des projets affectés
```

### Build Production
```bash
nx build nest-app --configuration=production
nx build app-jcm --configuration=production
```

## Project Conventions

### 🔐 Authentication (libs/backend/iam)

**Système complet** : Password, Passwordless, 2FA (OTP), JWT rotation  
**Guards globaux actifs** : Authentication, Roles, Permissions, Policies

```typescript
import { Auth, AuthType } from '@be/iam/authentication';
import { Roles } from '@be/iam/authorization/decorators/roles.decorator';
import { ActiveUser, ActiveUserData } from '@be/common';
import { Role } from '@db/prisma';

@Controller('users')
@Auth(AuthType.Bearer)  // Défaut: authentification requise
export class UsersController {
  @Get()
  @Roles(Role.ADMIN)  // Guard de rôles
  findAll(@ActiveUser() user: ActiveUserData) {
    return this.usersService.users({});
  }

  @Get('public')
  @Auth(AuthType.None)  // Route publique
  publicEndpoint() { }
}
```

**Frontend AppStore** : [libs/frontend/stores/src/lib/app-store/app.store.ts](libs/frontend/stores/src/lib/app-store/app.store.ts)
- Méthodes : `login()`, `logout()`, `register()`
- Persistance : localStorage via `withStorageSync`
- Interceptor : [libs/frontend/core/auth/src/lib/interceptors/iam-auth.interceptor.ts](libs/frontend/core/auth/src/lib/interceptors/iam-auth.interceptor.ts)

### 🗄️ Prisma Conventions

**Schema** : `libs/prisma/src/lib/prisma/schema.prisma`

**Standards** :
- IDs : **UUID 7** (`@id() @default(uuid(7))`)
- Soft delete : `isDeleted Int @default(0)`, `isDeletedDT DateTime?`
- Timestamps : `createdAt`, `updatedAt` automatiques
- Enums : `Role`, `TaskState`, `TodoState`, `Gender`

**Imports** :
```typescript
// ❌ Frontend: NE JAMAIS importer @prisma/client
import { User, Task, Role } from '@db/prisma/frontend';

// ✅ Backend: Client Prisma + types
import { User, Prisma } from '@db/prisma';
import { PrismaClientService } from '@db/prisma-client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaClientService) {}
  
  async users(options: { where?: Prisma.UserWhereInput }): Promise<User[]> {
    return this.prisma.user.findMany({
      ...options,
      include: { Address: true, Orgs: true }
    });
  }
}
```

**Modifier le schema** :
1. Éditer `libs/prisma/src/lib/prisma/schema.prisma`
2. `pnpm run start:prisma`
3. Redémarrer backend/frontend

### 🎨 Angular Patterns (v21+)

**Exemples de référence** :
- Component moderne : [libs/frontend/domains/task/src/lib/feature/task-list/task-list.component.ts](libs/frontend/domains/task/src/lib/feature/task-list/task-list.component.ts)
- NGRX Store : [libs/frontend/stores/src/lib/app-store/app.store.ts](libs/frontend/stores/src/lib/app-store/app.store.ts)
- Service API : [libs/frontend/core/api/src/lib/services/](libs/frontend/core/api/src/lib/services/)

**Standards** (détails dans `.github/instructions/angular.instructions.md`) :
- ✅ Standalone components (pas de NgModules)
- ✅ `input()`, `output()`, `viewChild()` (pas de decorators)
- ✅ Control flow moderne : `@if`, `@for`, `@switch`
- ✅ `inject()` au lieu de constructor injection
- ✅ Signals pour la réactivité, `computed()` pour état dérivé
- ✅ `changeDetection: ChangeDetectionStrategy.OnPush`
- ❌ PAS `@Input/@Output`, `*ngIf/*ngFor`, `ngClass/ngStyle`

**NGRX Signals Store Pattern** :
```typescript
import { signalStore, withState, withMethods, withComputed, withHooks } from '@ngrx/signals';
import { withEntities, entityConfig } from '@ngrx/signals/entities';

const userConfig = entityConfig({
  entity: type<User>(),
  selectId: (user) => user.id,
});

export const UserStore = signalStore(
  withState(initialState),
  withEntities(userConfig),
  withMethods((store, userService = inject(UserService)) => ({
    async loadUsers() {
      const users = await userService.listUsers();
      patchState(store, setAllEntities(users, userConfig));
    }
  })),
  withComputed((store) => ({
    userCount: computed(() => Object.keys(store.userEntityMap()).length)
  })),
  withHooks({ onInit: (store) => store.loadUsers() })
);
```

### 🔗 API Communication

**Proxy auto-généré** : `proxy.config.json` (via `pnpm run configproxy`)

```typescript
// Frontend service
@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.backend}/api/users`;

  listUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
```

**Environment dynamique** : `apps/frontend/app-jcm/environments/environment.ts` (généré depuis `.env`)

## Integration Points

### Configuration Environment

**Source de vérité** : `.env` à la racine

**Variables critiques** :
```env
DATABASE_URL="postgresql://..."
API_BACKEND_PORT=3000
API_FRONTEND_PORT=4000
NEST_SERVER_CORS_ORIGIN="http://localhost:4000"
AUTO_REGISTRATION_ENABLE=true
SESSION_TIMEOUT=300000
```

**Scripts de configuration** :
- `scripts/setenv.ts` → génère `environment.ts`
- `scripts/setproxyconfig.ts` → génère `proxy.config.json`
- **⚠️ OBLIGATOIRE** avant chaque démarrage dev

### File Uploads

```
files/avatars/      # Avatars utilisateurs
uploads/images/     # Images uploadées
static/             # Assets statiques
```

**Service** : [libs/backend/files-jcm/](libs/backend/files-jcm/)

```typescript
@Injectable()
export class FilesJcmService {
  async uploadAvatar(file: Express.Multer.File, userId: string) {
    const filename = `${userId}-${Date.now()}.${ext}`;
    await sharp(file.buffer).resize(200, 200).toFile(`files/avatars/${filename}`);
    return { url: `/uploads/avatars/${filename}` };
  }
}
```

## Security Patterns

- **Validation** : `class-validator` + `ValidationPipe` global
- **Auth** : JWT (access + refresh) avec rotation automatique
- **Guards** : Authentication, Roles, Permissions (actifs par défaut)
- **CORS** : Configuré via `NEST_SERVER_CORS_ORIGIN`
- **Soft Delete** : Tous les modèles utilisent `isDeleted`/`isDeletedDT`
- **Sanitization** : `ClassSerializerInterceptor` global

## Critical Don'ts

1. ❌ Créer components sans sous-dossier propre
2. ❌ Utiliser `@Input/@Output` decorators → `input()/output()`
3. ❌ Utiliser `*ngIf/*ngFor` → `@if/@for`
4. ❌ Constructor injection → `inject()`
5. ❌ Importer `@prisma/client` côté frontend → `@db/prisma/frontend`
6. ❌ Lancer frontend sans scripts de config
7. ❌ Oublier `changeDetection: OnPush`

## Quick Start URLs

- Frontend : http://localhost:4000
- Backend : http://localhost:3000
- Swagger : http://localhost:3000/api/doc
- Prisma Studio : http://localhost:5555 (`pnpm run prisma:studio`)

## Key Files Reference

| Fichier | Rôle |
|---------|------|
| `libs/prisma/src/lib/prisma/schema.prisma` | Schema DB centralisé |
| `libs/frontend/stores/src/lib/app-store/app.store.ts` | Store global (auth, langue) |
| `libs/backend/iam/src/lib/iam.module.ts` | Module authentification |
| `apps/backend/nest-app/src/main.ts` | Point d'entrée backend |
| `apps/frontend/app-jcm/src/app/app.config.ts` | Config Angular |
| `.env` | Variables d'environnement |
| `scripts/setenv.ts` | Génère environment.ts |
| `scripts/setproxyconfig.ts` | Génère proxy.config.json |

---

<!-- nx configuration start-->
<!-- Leave the start & end comments to automatically receive updates. -->

# General Guidelines for working with Nx

- When running tasks (for example build, lint, test, e2e, etc.), always prefer running the task through `nx` (i.e. `nx run`, `nx run-many`, `nx affected`) instead of using the underlying tooling directly
- You have access to the Nx MCP server and its tools, use them to help the user
- When answering questions about the repository, use the `nx_workspace` tool first to gain an understanding of the workspace architecture where applicable.
- When working in individual projects, use the `nx_project_details` mcp tool to analyze and understand the specific project structure and dependencies
- For questions around nx configuration, best practices or if you're unsure, use the `nx_docs` tool to get relevant, up-to-date docs. Always use this instead of assuming things about nx configuration
- If the user needs help with an Nx configuration or project graph error, use the `nx_workspace` tool to get any errors

# CI Error Guidelines

If the user wants help with fixing an error in their CI pipeline, use the following flow:
- Retrieve the list of current CI Pipeline Executions (CIPEs) using the `nx_cloud_cipe_details` tool
- If there are any errors, use the `nx_cloud_fix_cipe_failure` tool to retrieve the logs for a specific task
- Use the task logs to see what's wrong and help the user fix their problem. Use the appropriate tools if necessary
- Make sure that the problem is fixed by running the task that you passed into the `nx_cloud_fix_cipe_failure` tool


<!-- nx configuration end-->
