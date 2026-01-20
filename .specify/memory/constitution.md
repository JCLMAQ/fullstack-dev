
# Constitution du projet fullstack-dev

## Principes Fondamentaux

### I. Architecture DDD & Nx Monorepo
Le projet est structuré par domaines métier (DDD), chaque domaine étant organisé en sous-dossiers `feature/`, `ui/`, `data/`, `util/`. L’ensemble du code (backend, frontend, libs partagées) est géré dans un monorepo Nx.

### II. Stack Technique Imposée
- Backend : NestJS, Prisma, class-validator, class-transformer
- Frontend : Angular 21+, NgRx Signals Store, Angular Material v3, SCSS, Vitest, Playwright
- Build : @angular/build (esbuild)
- Lint/Format : ESLint (Angular rules), Prettier, Lefthook

### III. Testabilité & Qualité
Tests unitaires (Vitest + ng-mocks) et E2E (Playwright) obligatoires pour toute nouvelle fonctionnalité. Code testable, pur, typé strictement, sans duplication ni code mort.

### IV. Sécurité & Validation
Sanitization systématique des entrées utilisateur, validation forte côté backend et frontend, guards sur routes sensibles, intercepteurs HTTP pour gestion des erreurs et headers auth.

### V. Simplicité, Performance & Accessibilité
Favoriser la simplicité, la lisibilité, l’accessibilité (a11y), l’optimisation des performances (OnPush, signals, lazy loading, pas de fuites mémoire).

---

## Contraintes et Standards Additionnels

- **Organisation des dossiers** :
  - `apps/backend/nest-app` : Application NestJS principale
  - `apps/frontend/app-jcm` : Application Angular principale
  - `libs/backend/*` et `libs/frontend/*` : bibliothèques par domaine
  - `libs/prisma` : schéma et client Prisma
  - `scripts/` : scripts de configuration
- **DDD** : chaque composant/directive/pipe dans un sous-dossier dédié
- **Pas de NgModules** (Angular 21+ standalone components)
- **Pas de données statiques/in-memory** dans le code applicatif
- **Accès aux données uniquement via API**
- **State management** : NgRx Signals Store
- **UI** : Angular Material v3, theming SCSS, dark mode support
- **Formulaires** : Signal Forms uniquement
- **Injection** : `inject()` partout (pas de décorateur)
- **Contrôle de flux moderne** : `@if`, `@for`, `@switch`
- **input()/output() functions** (pas de décorateurs)
- **ChangeDetection** : OnPush par défaut
- **NgOptimizedImage** pour images statiques
- **Validation et sécurité** : forms validés, inputs typés et validés
- **Soft delete** sur les entités (`isDeleted`, `isDeletedDT`)
- **Email validation** avec tokens
- **Import Prisma** : `@db/prisma` pour le service, `@prisma/client` pour les types
- **Variables critiques** dans `.env` : `DATABASE_URL`, `API_*`, `NEST_SERVER_*`

---

## Workflows de Développement

1. **Démarrage** :
	- `pnpm run db:docker:up` (DB)
	- `pnpm run start:backend:dev` (backend, génère proxy)
	- `pnpm run start:frontend:dev` (frontend, génère env + proxy)
2. **Modification du schéma Prisma** :
	- Modifier `libs/prisma/src/lib/prisma/schema.prisma`
	- `pnpm run start:prisma` (génère + migre)
	- Redémarrer les services
3. **Seeding** :
	- `pnpm run seed-param`, `pnpm run seed-faker`, `pnpm run seed-org`

---

## Règles de Codage et Conventions

- TypeScript strict partout, pas de `any`, types explicites
- Fonctions pures et testables, SRP appliqué
- Pas de duplication : réutiliser les utilitaires existants
- Nommage descriptif et conventions Angular/TypeScript
- Pas de commentaires inutiles
- Pas de code mort ou legacy
- Pas de dépendances inutiles
- Validation et sanitation de tous les inputs utilisateurs
- Pas d’accès direct au DOM (Angular)
- Respect du style Angular Material pour l’UI
- Accessibilité (a11y) obligatoire
- Tests unitaires et E2E pour toute nouvelle fonctionnalité

---

## Documentation & Partage

- README à jour pour chaque app/lib
- JSDoc pour logique complexe
- Pas de documentation inutile sur code trivial

---

Ce document fait foi pour toute évolution du projet. Toute modification de structure, stack ou convention doit être validée par l’équipe technique.
<!-- Example: Code review requirements, testing gates, deployment approval process, etc. -->

## Governance
<!-- Example: Constitution supersedes all other practices; Amendments require documentation, approval, migration plan -->

[GOVERNANCE_RULES]
<!-- Example: All PRs/reviews must verify compliance; Complexity must be justified; Use [GUIDANCE_FILE] for runtime development guidance -->

**Version**: [CONSTITUTION_VERSION] | **Ratified**: [RATIFICATION_DATE] | **Last Amended**: [LAST_AMENDED_DATE]
<!-- Example: Version: 2.1.1 | Ratified: 2025-06-13 | Last Amended: 2025-07-16 -->
