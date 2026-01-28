# Scripts de Seed - Documentation

## 📚 Vue d'ensemble

Le projet propose trois scripts de seed différents pour différents cas d'usage:

| Script | Commande | Données | Cas d'usage |
|--------|----------|---------|-----------|
| **seed-param** | `pnpm run seed-param` | Configuration globale | Paramètres de configuration |
| **seed-faker** | `pnpm run seed-faker` | Données limitées | Développement initial (4 users) |
| **seed-complete** | `pnpm run seed-complete` | Données massives | Tests complets (100 users) |

## 🎯 seed-param
**Configuration: Paramètres globaux**

Ajoute les paramètres de configuration de base à la base de données (configuration système, domaines d'email autorisés, etc.).

```bash
pnpm run seed-param
```

### Contenu
- AppEmailDomains (domaines d'email autorisés)
- ConfigParams (paramètres de configuration système)

---

## 🎯 seed-faker
**Données limitées: Développement initial**

Script original qui génère un ensemble de données limité pour le développement.

```bash
pnpm run seed-faker
```

### Contenu
- 2 organisations
- 4 utilisateurs
- 2 posts par utilisateur
- 2 todos par utilisateur
- 2 tasks par todo
- 2 stories par utilisateur
- 2 followers relationships

**Cas d'usage**: Tests rapides, développement initial, CI/CD

---

## 🎯 seed-complete
**Données massives: Tests complets**

Script complet qui génère un ensemble de données réaliste pour tester l'application à l'échelle.

```bash
pnpm run seed-complete
```

### Contenu généré
- **3 organisations** (TechCorp, InnovateLabs, FutureWorks)
- **100 utilisateurs** avec:
  - 2 adresses chacun
  - 2 téléphones chacun
  - Profils complets avec avatar
  - Hash de mot de passe
  
- **1000 posts** (~10 par utilisateur)
- **1000 todos** (~10 par utilisateur)
- **~2500 tasks** (2-3 par todo)
- **~400 stories** (3-5 par utilisateur)
- **~400 images** (1 image par story)
- **15 catégories** pour les posts

### Relations sociales
- **Followers**: Chaque utilisateur suit 5-15 utilisateurs aléatoires (~500 relationships)
- **Likes**: Chaque utilisateur aime 10-30 posts (~1000 relationships)

**Cas d'usage**: 
- Tests de performance
- Développement frontend complet
- Validation de pagination et filtrage
- Tests de recherche et recherche plein texte

---

## 🔄 Workflow complet recommandé

### Première mise en place

```bash
# 1. Démarrer la base de données
pnpm run db:docker:up

# 2. Générer les migrations Prisma
pnpm run start:prisma

# 3. Ajouter les paramètres de configuration
pnpm run seed-param

# 4. Choisir votre seed selon le besoin:

# Option A: Développement rapide
pnpm run seed-faker

# Option B: Tests complets
pnpm run seed-complete
```

### Reset et reseed

```bash
# Réinitialiser complètement la BD
pnpm run prisma-reset

# Puis refaire les seeds dans l'ordre
pnpm run seed-param
pnpm run seed-complete
```

---

## 🔐 Sécurité

Tous les utilisateurs générés utilisent le même mot de passe de test:

```
Mot de passe: Azerty123456789##
```

**Important**: À utiliser uniquement en développement et tests!

Hashing:
- Algorithme: PBKDF2-SHA512
- Itérations: 10 000
- Salt: 16 octets aléatoires

---

## ⚙️ Customization

Chaque script peut être modifié pour adapter la génération à vos besoins:

### seed-faker.ts
- Changer le nombre d'organisations: `create2Orgs()` → `create3Orgs()`
- Modifier les utilisateurs: éditer `create4Users()`
- Ajuster les posts/todos/stories: éditer les boucles `for`

### seed-complete.ts
- Nombre d'utilisateurs: `count: 100` → `count: 50`
- Adresses par utilisateur: `addressPerUser: 2`
- Téléphones par utilisateur: `phonesPerUser: 2`
- Posts par utilisateur: `for (let postIdx = 0; postIdx < 10; postIdx++)`
- Todos par utilisateur: `for (let todoIdx = 0; todoIdx < 10; todoIdx++)`
- Stories par utilisateur: `storyCount = faker.number.int({ min: 3, max: 5 })`
- Followers par utilisateur: `followerCount = faker.number.int({ min: 5, max: 15 })`
- Likes par utilisateur: `likeCount = faker.number.int({ min: 10, max: 30 })`

---

## 📊 Performance

**Temps d'exécution estimé** (sur machine standard):

| Script | Temps |
|--------|-------|
| seed-param | < 1s |
| seed-faker | 5-10s |
| seed-complete | 2-3 min |

---

## 🛠 Troubleshooting

### Erreur: "User with email already exists"
La BD contient déjà des utilisateurs. Réinitialiser:
```bash
pnpm run prisma-reset
```

### Erreur de connexion PostgreSQL
Vérifier que Docker est en cours d'exécution:
```bash
pnpm run db:docker:up
```

### Erreur: "Prisma client not generated"
Générer le client Prisma:
```bash
pnpm run prisma:generate
```

---

## 📚 Factories disponibles

Les factories sont modulaires et réutilisables:

```typescript
// Créer 3 organisations
import { create3Orgs } from '@seed/factories/org-bulk';
const orgs = await create3Orgs(prisma);

// Créer 100 utilisateurs
import { createBulkUsers } from '@seed/factories/user-bulk';
const users = await createBulkUsers(prisma, {
  count: 100,
  orgsIds: orgIds,
  addressPerUser: 2,
  phonesPerUser: 2,
});
```

Les factories existantes peuvent aussi être utilisées individuellement:
- `createPost()` - Créer un post
- `createTodo()` - Créer un todo
- `createTask()` - Créer une task
- `createStory()` - Créer une story
- `createCategories()` - Créer des catégories
