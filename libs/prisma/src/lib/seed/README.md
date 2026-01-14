# Seed Complet avec Faker

Ce dossier contient les factories et scripts pour générer un ensemble de données de test complet avec Faker.

## 📋 Contenu du seed

Le seed `seed-complete.ts` génère:

- **3 organisations** (TechCorp, InnovateLabs, FutureWorks)
- **100 utilisateurs** avec:
  - Adresses (2 par utilisateur)
  - Téléphones (2 par utilisateur)
  - Profils complets
  - Hash de mot de passe sécurisé

- **1000 posts** (~10 par utilisateur)
- **1000 todos** (~10 par utilisateur)
- **~2500 tasks** (2-3 par todo)
- **~400 stories** (3-5 par utilisateur)
- **~400 images** (1 image par story)
- **15 catégories** pour les posts

### Relations

- **Followers/Following**: Chaque utilisateur suit 5-15 utilisateurs aléatoires
- **Likes**: Chaque utilisateur aime 10-30 posts aléatoires

## 🚀 Utilisation

### Exécuter le seed complet

```bash
pnpm run seed-complete
```

### Factories disponibles

#### org-bulk.ts
Crée 3 organisations avec domaines et emails associés.

```typescript
import { create3Orgs } from './factories/org-bulk';
const orgs = await create3Orgs(prisma);
```

#### user-bulk.ts
Crée des utilisateurs en masse avec adresses et téléphones.

```typescript
import { createBulkUsers } from './factories/user-bulk';
const users = await createBulkUsers(prisma, {
  count: 100,
  orgsIds: orgIds,
  addressPerUser: 2,
  phonesPerUser: 2,
});
```

## 📊 Statistiques générées

Après exécution complète:
- **Organizations**: 3
- **Users**: 100
- **Posts**: ~1000
- **Todos**: ~1000
- **Tasks**: ~2500
- **Stories**: ~400
- **Images**: ~400
- **Followers**: ~500 relationships
- **Post Likes**: ~1000 relationships

## 🔒 Sécurité

Tous les utilisateurs sont générés avec:
- Password hash PBKDF2
- Salt de 16 octets
- 10 000 itérations PBKDF2-SHA512

Mot de passe test: `Azerty123456789##`

## 🛠 Personnalisation

Vous pouvez personnaliser le nombre d'utilisateurs et de relations dans `seed-complete.ts`:

```typescript
const users = await createBulkUsers(prisma, {
  count: 50,  // Changer le nombre d'utilisateurs
  orgsIds: orgIds,
  addressPerUser: 1,  // Adresses par utilisateur
  phonesPerUser: 1,   // Téléphones par utilisateur
});
```

Et modifier le nombre de posts, todos, stories, etc. dans les boucles:

```typescript
// 10 Posts per user
for (let postIdx = 0; postIdx < 10; postIdx++) { ... }

// 10 Todos per user
for (let todoIdx = 0; todoIdx < 10; todoIdx++) { ... }
```

## 📝 Notes

- Le seed utilise les factories existantes (`post.ts`, `todo.ts`, `task.ts`, `story.ts`, etc.)
- Les données sont générées avec `@faker-js/faker` pour plus de réalisme
- Les images et stories sont créées avec les factories existantes
- Les relations de followers et likes sont créées avec gestion des doublons

## 🔗 Dépendances

- `@faker-js/faker`: Génération de données réalistes
- `@prisma/client`: Client Prisma
- `@prisma/adapter-pg`: Adaptateur PostgreSQL
- `crypto`: Hashing des mots de passe
