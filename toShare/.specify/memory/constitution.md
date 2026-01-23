
# Constitution du projet fullstack-dev

<!--
Sync Impact Report
Version change: 2.x.x → 3.0.0
Principes modifiés : nouvelle liste, suppression de la testabilité
Sections supprimées : Testabilité & Qualité, exigences de tests
Sections ajoutées : Clean Code, Simple UX, Responsive Design, Minimal Dependency
Templates à mettre à jour : plan-template.md, spec-template.md, tasks-template.md (✅)
-->

## Principes Directeurs

### I. Clean Code

Le code doit être lisible, simple, sans duplication, sans code mort, et respecter les conventions TypeScript/Angular/NestJS. Toute complexité doit être justifiée et documentée.

### II. Sécurité & Validation

Sanitization systématique des entrées utilisateur, validation forte côté backend et frontend, guards sur routes sensibles, intercepteurs HTTP pour gestion des erreurs et headers auth. Les formulaires et entrées utilisateurs doivent être validés et typés strictement.

### III. Simplicité, Performance & Accessibilité

Favoriser la simplicité, la lisibilité, l’accessibilité (a11y), l’optimisation des performances (OnPush, signals, lazy loading, pas de fuites mémoire). L’expérience utilisateur doit être intuitive, épurée, sans surcharge fonctionnelle ni visuelle. Les interfaces doivent être cohérentes, accessibles et centrées sur l’essentiel.

### IV. Responsive Design & Minimal Dependency

L’UI doit être responsive (mobile-first), s’appuyer sur Tailwind pour le style et Angular Material v3 pour les composants. Toute dépendance doit être justifiée et limitée au strict nécessaire.

### V. Stack Technique Imposée

- Backend : NestJS, Prisma (Postgres), class-validator, class-transformer
- Frontend : Angular 21+ (features, signals, signal forms), NgRx Signals Store, Angular Architects NGRX toolkit
- UI : Tailwind, Angular Material v3 (Material Theme), SCSS
- Build : @angular/build (esbuild)
- Lint/Format : ESLint (Angular rules), Prettier, Lefthook
- Référer à package.json pour les versions et outils

### VI. Interdiction des Tests

Aucun test unitaire, d’intégration ou E2E ne doit être écrit, maintenu ou exigé. Toute guidance antérieure sur la testabilité est annulée et supersédée.

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
- **State management** : NgRx Signals Store + Angular Architects NGRX toolkit
- **UI** : Angular Material v3, theming Tailwind, dark mode support
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

1. **Modification du schéma Prisma** :

- Modifier `libs/prisma/src/lib/prisma/schema.prisma`
- `pnpm run start:prisma` (génère + migre)
- Redémarrer les services

1. **Seeding** :

- `pnpm run seed-param`, `pnpm run seed-faker`, `pnpm run seed-org`

---

## Règles de Codage et Conventions

- TypeScript strict partout, pas de `any`, types explicites
- Fonctions pures et testables (hors tests), SRP appliqué
- Pas de duplication : réutiliser les utilitaires existants
- Nommage descriptif et conventions Angular/TypeScript/NestJS
- Pas de commentaires inutiles
- Pas de code mort ou legacy
- Pas de dépendances inutiles
- Validation et sanitation de tous les inputs utilisateurs
- Pas d’accès direct au DOM (Angular)
- Respect du style Angular Material + Tailwind pour l’UI
- Accessibilité (a11y) obligatoire
- **Aucun test à écrire ou maintenir**

---

## Documentation & Partage

- README à jour pour chaque app/lib
- JSDoc pour logique complexe
- Pas de documentation inutile sur code trivial

---

Ce document fait foi pour toute évolution du projet. Toute modification de structure, stack ou convention doit être validée par l’équipe technique.

## Governance

La présente constitution prévaut sur toute autre guidance ou documentation technique. Toute modification nécessite :

- Documentation de l’amendement
- Validation par l’équipe technique
- Mise à jour des templates et artefacts dépendants
- Migration planifiée si impact sur la structure ou la stack

**Version**: 3.0.0 | **Ratified**: 2025-01-20 | **Last Amended**: 2026-01-20

<!-- Example: Version: 2.1.1 | Ratified: 2025-06-13 | Last Amended: 2025-07-16 -->
