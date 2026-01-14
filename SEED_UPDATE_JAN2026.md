# Mise à jour du Seed Complet - Janvier 2026

## 🎯 Changements apportés

### 1. ✅ Mot de passe unifié
- **Ancien**: `Azerty123456789##` (différent pour chaque seed)
- **Nouveau**: `Pwd!123465` (pour tous les utilisateurs)
- Implémenté dans `user-bulk.ts` avec valeur par défaut

### 2. ✅ Profiles ajoutés
- Création de **5 profiles** au démarrage du seed
- Chaque utilisateur est assigné aléatoirement à un profil
- Factory: `profile-bulk.ts`

### 3. ✅ Comments ajoutés
- **~2000 comments** générés (~2 commentaires par post en moyenne)
- Les commentaires sont faits par **des utilisateurs différents** (pas l'auteur du post)
- Contenu généré avec Faker (phrases réalistes)
- Factory: `comment-bulk.ts`

### 4. ✅ UserTaskLink et UserTodoLink peuplés
**Question résolue**: Ces tables N'ÉTAIENT PAS vides, elles étaient simplement mal configurées!

- **UserTodoLink**: ~1000 liens créés (1 par todo/user)
- **UserTaskLink**: ~2500 liens créés (1 par task/user)
- Chaque lien inclut:
  - `isAuthor: true`
  - `isAssigned: true`
  - `comment`: Phrase descriptive avec Faker

## 📊 Nouvelles statistiques

Après l'exécution complète du seed:

```
📊 Summary:
  • Organizations: 3
  • Users: 100
  • Profiles: 5
  • Posts: ~1000
  • Comments: ~2000
  • Todos: ~1000
  • Tasks: ~2500
  • UserTodoLinks: ~1000
  • UserTaskLinks: ~2500
  • Stories: ~400
  • Images: ~400
  • Categories: 15

🔐 Default password for all users: Pwd!123465
```

## 🚀 Utilisation

```bash
# Réinitialiser la BD complètement
pnpm run prisma-reset

# Exécuter le seed complet mis à jour
pnpm run seed-complete

# Visualiser les données
pnpm run prisma:studio
```

## 📝 Fichiers modifiés

1. **libs/prisma/src/lib/seed/factories/user-bulk.ts**
   - Mot de passe par défaut changé à `Pwd!123465`

2. **libs/prisma/src/lib/seed/factories/profile-bulk.ts** (NOUVEAU)
   - `createProfiles()`: Crée 5 profiles
   - `assignProfilesToUsers()`: Assigne aléatoirement les profiles aux utilisateurs

3. **libs/prisma/src/lib/seed/factories/comment-bulk.ts** (NOUVEAU)
   - `createCommentsForPost()`: Génère des commentaires pour chaque post

4. **libs/prisma/src/lib/seed/seed-complete.ts**
   - Import des nouvelles factories
   - Step 3.5 ajouté pour créer et assigner les profiles
   - Génération de comments pour chaque post
   - Création de UserTodoLink et UserTaskLink
   - Statistiques mises à jour

5. **libs/prisma/src/lib/seed/factories/index.ts**
   - Exports des nouvelles factories

## 🔒 Sécurité - Mot de passe test

**Important**: À utiliser uniquement en développement!

```
Username: (n'importe quel utilisateur)
Password: Pwd!123465
```

Tous les utilisateurs partagent le même mot de passe de test avec hashing PBKDF2-SHA512 sécurisé.

## 🛠 Customization

### Changer le nombre de profiles
Dans `profile-bulk.ts`, ligne 10:
```typescript
for (let i = 0; i < 5; i++) {  // Changer 5 par votre nombre
```

### Changer le nombre de commentaires par post
Dans `seed-complete.ts`:
```typescript
const commentsPerPost = faker.number.int({ min: 1, max: 3 });  // Ajuster min/max
```

### Changer le mot de passe
Deux options:
1. **Globalement**: Modifier la valeur par défaut dans `user-bulk.ts`
2. **Pour un seed spécifique**: Passer l'option au runtime:
```typescript
const users = await createBulkUsers(prisma, {
  count: 100,
  orgsIds: orgIds,
  passwordFaker: 'VotreMotDePasse',
});
```

## ✅ Vérification

Pour vérifier que tout est bien peuplé:

```bash
# Dans Prisma Studio (http://localhost:49152), vérifier:
1. Profile: Affiche 5 profiles
2. User: Affiche 100 users avec profiles assignés
3. Post: Affiche 1000 posts
4. Comment: Affiche 2000 comments (avec authors différents des posts)
5. UserTodoLink: Affiche 1000 liens
6. UserTaskLink: Affiche 2500 liens
```

## 📚 Améliorations futures possibles

- Ajouter des images aux comments
- Créer des relations entre utilisateurs et grupos
- Ajouter des fichiers attachés aux posts et comments
- Diversifier les catégories des posts
- Ajouter des langues multiples aux contenus
