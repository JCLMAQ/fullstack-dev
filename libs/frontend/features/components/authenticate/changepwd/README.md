# Composant de Changement de Mot de Passe

Ce composant gère le changement de mot de passe avec validation asynchrone de l'ancien mot de passe.

## Fonctionnalités

### Validation Asynchrone

Le composant implémente une validation asynchrone pour vérifier que l'ancien mot de passe saisi est correct avant de soumettre le formulaire.

#### Comment ça fonctionne

1. **Effect de validation** : Un `effect()` Angular surveille les changements du champ `oldPassword`
2. **Debounce** : Un délai de 500ms est appliqué avant de déclencher la validation pour éviter trop d'appels API
3. **Annulation du timer** : Si l'utilisateur continue de taper, le timer précédent est annulé et un nouveau est créé
4. **Déclenchement** : La validation se déclenche uniquement si :
   - Le champ a été touché (`touched`) ou modifié (`dirty`)
   - La longueur du mot de passe est d'au moins 8 caractères
   - L'utilisateur a cessé de taper pendant 500ms
5. **Appel API** : Le service `ChangePwdService.verifyOldPassword()` appelle l'endpoint backend `/authentication/verify-password`
6. **État de chargement** : Le signal `isVerifyingOldPassword` affiche un spinner pendant la vérification
7. **Gestion des erreurs** : Le signal `oldPasswordError` stocke le message d'erreur de traduction

### Signaux Utilisés

- **`isVerifyingOldPassword`** : Indique si la validation async est en cours
- **`oldPasswordError`** : Contient le message d'erreur de validation (null si pas d'erreur)
- **`debounceTimer`** : Timer privé pour gérer le debounce de 500ms

### Backend Requis

Le service backend doit implémenter l'endpoint suivant :

```typescript
POST /authentication/verify-password
{
  "email": "user@example.com",
  "password": "oldPassword123"
}

// Réponse attendue
{
  "valid": true | false
}
```

### TODO

- [ ] Récupérer l'email de l'utilisateur connecté depuis le store d'authentification ou le token JWT
- [ ] Implémenter l'endpoint backend `/authentication/verify-password`
- [x] Ajouter un debounce pour éviter trop d'appels API (✅ Implémenté avec 500ms de délai)

## Traductions

Les clés de traduction suivantes ont été ajoutées :

### CHANGEPWD
- `verifyingPassword` : "Vérification..."

### signalFormError
- `invalidOldPassword` : "Le mot de passe actuel est incorrect"
- `verificationError` : "Erreur lors de la vérification du mot de passe"
- `newPasswordMustBeDifferent` : "Le nouveau mot de passe doit être différent de l'ancien"

## Utilisation

Le composant est utilisé dans les routes d'authentification :

```typescript
import { Changepwd } from '@fe/components/authenticate';

// Dans le routing
{
  path: 'change-password',
  component: Changepwd
}
```

## Architecture

- **Composant** : `/libs/frontend/features/components/authenticate/changepwd/changepwd.ts`
- **Service** : `/libs/frontend/core/auth/src/lib/iam-auth/services/changepwd/changepwd-service.ts`
- **Schéma** : `/libs/frontend/features/components/authenticate/changepwd/changepwd-schema.ts`
- **Template** : `/libs/frontend/features/components/authenticate/changepwd/changepwd.html`
