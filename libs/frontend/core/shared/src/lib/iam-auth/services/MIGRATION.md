# 🔄 Migration des Services d'Authentification

## Vue d'ensemble

Le service `AuthenticationService` a été divisé en trois services spécialisés pour une meilleure séparation des responsabilités :

### Avant (AuthenticationService)
Un seul service gérant :
- ✅ Inscription (register)
- ✅ Connexion (login)
- ✅ Récupération du profil (fetchUser)
- ✅ Vérification des credentials (checkUserCredentials)
- ✅ Rafraîchissement du profil (refreshUserProfile)

### Après (3 services spécialisés)

#### 1️⃣ **RegisterService** (`./register/register-service.ts`)
**Responsabilité unique** : Inscription des nouveaux utilisateurs
- `register(email, password, confirmPassword): Promise<IRegisterResponse>`
- Endpoint : `POST /api/authentication/register-extended`

#### 2️⃣ **LoginService** (`./login/login-service.ts`)
**Responsabilité unique** : Authentification et vérification
- `login(email, password): Promise<ILoginResponse>`
- `checkUserCredentials(email, password): Promise<boolean>`
- Endpoints :
  - `POST /api/authentication/sign-in`
  - `POST /api/authentication/check-credentials/{email}`

#### 3️⃣ **UserFetchService** (`./user-fetch/user-fetch-service.ts`)
**Responsabilité unique** : Récupération et rafraîchissement du profil
- `fetchUser(): Promise<User | null>`
- `refreshUserProfile(): Promise<void>`
- Endpoint : `GET /api/authentication/profile`

## Architecture

```
IamAuth (Facade)
  ├── LoginService ────────────> TokenStorageService
  │   └── UserFetchService ───> UserStorageService
  │
  ├── RegisterService
  │
  ├── UserFetchService ───────> TokenStorageService
  │   └─────────────────────> UserStorageService
  │
  ├── TokenStorageService
  ├── UserStorageService
  └── UserProfileService
```

## Avantages de la migration

### ✅ Séparation des Responsabilités (SRP)
Chaque service a une responsabilité unique et bien définie.

### ✅ Testabilité
Tests plus simples et ciblés pour chaque fonctionnalité.

### ✅ Réutilisabilité
Les services peuvent être utilisés indépendamment si nécessaire.

### ✅ Maintenabilité
Code plus modulaire, plus facile à comprendre et à modifier.

### ✅ Compatibilité
L'API publique de `IamAuth` reste inchangée, aucune modification nécessaire dans les composants.

## Fichiers de tests

Chaque service dispose de son propre fichier de tests complet :

- ✅ `register-service.spec.ts` - Tests d'inscription
- ✅ `login-service.spec.ts` - Tests d'authentification
- ✅ `user-fetch-service.spec.ts` - Tests de récupération du profil

## Fichiers deprecated

Les fichiers suivants peuvent être supprimés (ou marqués comme deprecated) :

- ⚠️ `authentication-service.ts` - Remplacé par les 3 services ci-dessus
- ⚠️ `authentication-service.spec.ts` - Tests remplacés

## Migration dans le code

### Avant
```typescript
import { AuthenticationService } from './services/authentication-service';

class MyComponent {
  private authService = inject(AuthenticationService);
  
  async onLogin() {
    await this.authService.login(email, password);
  }
}
```

### Après (recommandé - utiliser la facade)
```typescript
import { IamAuth } from './iam-auth';

class MyComponent {
  private iamAuth = inject(IamAuth);
  
  async onLogin() {
    await this.iamAuth.login(email, password);
  }
}
```

### Après (si besoin direct)
```typescript
import { LoginService } from './services/login/login-service';
import { RegisterService } from './services/register/register-service';
import { UserFetchService } from './services/user-fetch/user-fetch-service';

class MyComponent {
  private loginService = inject(LoginService);
  private registerService = inject(RegisterService);
  private userFetchService = inject(UserFetchService);
}
```

## Statut actuel

✅ **Migration complétée le** : [Date actuelle]
- Services créés et testés
- Facade `IamAuth` mise à jour
- Fichiers de tests complets

⚠️ **Action recommandée** : Supprimer `authentication-service.ts` et son fichier spec après vérification.
