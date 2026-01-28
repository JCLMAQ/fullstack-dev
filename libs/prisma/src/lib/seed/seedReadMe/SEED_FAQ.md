# FAQ - Seed Complet

## ❓ Questions fréquentes

### Q1: **Pourquoi UserTodoLink et UserTaskLink étaient-ils vides?**

**Réponse**: Ce n'était pas un bug, c'était une **absence d'implémentation**.

Dans le seed original (`seed-faker.ts`), ces tables N'ÉTAIENT PAS peuplées. Les todos et tasks étaient créés, mais les relations utilisateurs manquaient.

**Solution appliquée**: 
- Ajout de la création de `UserTodoLink` pour chaque todo/user
- Ajout de la création de `UserTaskLink` pour chaque task/user
- Chaque lien inclut `isAuthor: true`, `isAssigned: true`, et un comment descriptif

Résultat:
```
✓ UserTodoLinks: 1000 (1 par todo)
✓ UserTaskLinks: 2500 (1 par task)
```

---

### Q2: **Quel est le mot de passe pour tous les utilisateurs?**

**Réponse**: `Pwd!123465`

Tous les 100 utilisateurs générés utilisent le même mot de passe:
- Stocké dans le champ `passWordFaker` (texte brut, pour référence)
- Hashé avec PBKDF2-SHA512 et stocké dans `UserSecret.pwdHash`

Vous pouvez vous connecter avec n'importe quel utilisateur:
```
Email: <n'importe quel email généré>
Password: Pwd!123465
```

---

### Q3: **Combien de comments ont été créés?**

**Réponse**: **1963 comments** (environ 2 par post)

- 1000 posts × ~2 commentaires par post = ~2000
- Générés avec Faker (contenu réaliste)
- Chaque comment est écrit par un **utilisateur différent** que l'auteur du post
- 100% des posts ont au moins 1 comment

```typescript
const commentsPerPost = faker.number.int({ min: 1, max: 3 });
```

---

### Q4: **Comment les profiles sont-ils assignés?**

**Réponse**: **Aléatoirement!**

- 5 profiles sont créés au démarrage
- Chaque utilisateur (100) est assigné aléatoirement à l'un des 5 profiles
- **100% des utilisateurs ont un profile**

Résultat:
```
✓ Users with profiles: 100/100 (100%)
```

---

### Q5: **Sont-ce que les UserTodoLink et UserTaskLink ont des valeurs?**

**Réponse**: **OUI! 100% peuplés**

Chaque lien inclut:
- `isAuthor: true` (l'utilisateur est l'auteur)
- `isAssigned: true` (l'utilisateur est assigné)
- `comment: faker.lorem.sentence()` (commentaire descriptif généré)

Vérification:
```
✓ Todos with UserTodoLinks: 1000/1000 (100%)
✓ Tasks with UserTaskLinks: 2500/2500 (100%)
```

---

### Q6: **Combien de time prend l'exécution du seed?**

**Réponse**: Environ **2-3 minutes**

Décomposition:
- Email domains + Organisations: < 10s
- 100 utilisateurs + profiles: ~30s
- 1000 posts: ~30s
- 1000 todos + 2500 tasks: ~1m
- 400 stories + images: ~20s
- 1963 comments: ~20s
- Followers + likes: ~20s

**Total**: ~2-3 minutes sur machine standard

---

### Q7: **Puis-je customiser le seed?**

**Réponse**: **OUI! Plusieurs options**

#### Option 1: Changer le nombre d'utilisateurs
```typescript
const users = await createBulkUsers(prisma, {
  count: 50,  // Au lieu de 100
  orgsIds: orgIds,
  // ...
});
```

#### Option 2: Changer le nombre de posts par user
```typescript
for (let postIdx = 0; postIdx < 5; postIdx++) {  // Au lieu de 10
  // ...
}
```

#### Option 3: Changer le nombre de commentaires par post
```typescript
const commentsPerPost = faker.number.int({ min: 0, max: 5 });  // Au lieu de 1-3
```

#### Option 4: Changer le mot de passe
```typescript
const users = await createBulkUsers(prisma, {
  count: 100,
  orgsIds: orgIds,
  passwordFaker: 'VotreMotDePasse123!',  // Votre mot de passe
  // ...
});
```

---

### Q8: **Comment vérifier que le seed est complet?**

**Réponse**: Utiliser le script de vérification!

```bash
pnpm run seed-verify
```

Affiche:
- Comptage de chaque entité
- Vérification que tous les users ont des profiles
- Vérification que tous les posts ont des comments
- Vérification que tous les links sont peuplés
- Vérification du mot de passe unifié

---

### Q9: **Puis-je visualiser les données?**

**Réponse**: **OUI! Avec Prisma Studio**

```bash
pnpm run prisma:studio
```

Ouvre: http://localhost:49152

Vous pouvez:
- Explorer toutes les tables
- Voir les relations
- Filtrer et rechercher
- Éditer les données (test seulement!)

---

### Q10: **Qu'est-ce qui est nouveau par rapport au seed-faker?**

**Réponse**: Comparaison des seeds

| Feature | seed-faker | seed-complete |
|---------|-----------|---------------|
| Organizations | 2 | 3 |
| Users | 4 | 100 |
| Posts | 8 | 1000 |
| Comments | 0 | 1963 |
| Todos | 8 | 1000 |
| Tasks | 16 | 2500 |
| Profiles | 0 | 5 |
| UserTodoLinks | 0 | 1000 |
| UserTaskLinks | 0 | 2500 |
| Stories | 8 | 400 |
| Images | 8 | 400 |
| Password | Azerty123456789## | Pwd!123465 |
| Temps exec | ~10s | ~2-3min |

---

### Q11: **Y a-t-il des doublons?**

**Réponse**: **Non, le seed gère les doublons!**

Tous les créations utilisent `try/catch` pour ignorer les violations d'unicité:
- Emails: Générés avec Faker (très peu de risque)
- Followers: Gérés avec try/catch
- Post likes: Gérés avec try/catch
- Comments: Sélection d'utilisateurs distincts

```typescript
try {
  await prisma.userFollowerLink.create({
    data: dataUserFollower(users[i], users[followingIdx]),
  });
} catch (e) {
  // Ignore duplicate relationship errors
}
```

---

### Q12: **Quel est le ratio users/posts/comments?**

**Réponse**: 

```
100 users
├── 10 posts par user = 1000 posts
│   └── ~2 comments par post = 1963 comments
├── 10 todos par user = 1000 todos
│   └── ~2.5 tasks par todo = 2500 tasks
├── 3-5 stories par user = 400 stories
│   └── 1 image par story = 400 images
└── Chaque user suit 5-15 autres users = 1011 followers
    Chaque user aime 10-30 posts = 2013 post likes
```

---

## 🔍 Debugging

### Problème: Le seed s'arrête

**Solution 1**: Réinitialiser la BD
```bash
pnpm run prisma-reset
pnpm run seed-complete
```

**Solution 2**: Vérifier les logs
```bash
pnpm run seed-complete 2>&1 | tail -100
```

### Problème: Prisma Studio ne démarre pas

**Solution**:
```bash
pnpm run prisma:studio
```

### Problème: Les données semblent manquantes

**Solution**: Vérifier avec le script
```bash
pnpm run seed-verify
```

---

## 📚 Ressources

- [Seed Scripts Documentation](./SEED_SCRIPTS.md)
- [Update Jan 2026](./SEED_UPDATE_JAN2026.md)
- [Seed Completion Report](./SEED_COMPLETED.md)
