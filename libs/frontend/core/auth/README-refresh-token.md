# Gestion du Refresh Token côté Frontend (Angular)

## Objectif

Mettre en place une gestion robuste du refresh token dans une application Angular, en respectant les standards modernes (signals, services, DI, sécurité) et l’architecture du projet (DDD, Nx, NgRx Signals).

## Étapes du Processus

### 1. Stockage sécurisé des tokens

- Création d’un `TokenStorageService` utilisant des signals pour stocker et synchroniser l’`accessToken` et le `refreshToken`.
- Persistance dans le `localStorage` avec synchronisation automatique via effets dans le constructeur.
- Méthodes : `setTokens`, `clearTokens`, `getAccessToken`, `getRefreshToken`.

### 2. Service d’authentification (LoginService)

- Méthode `login` : effectue l’appel API de login, stocke les tokens via `TokenStorageService`.
- Méthode `refreshToken` : effectue l’appel API de refresh, met à jour les tokens, gère les erreurs (ex : token expiré).
- Utilisation de regex correcte pour manipuler les URLs d’API.

### 3. Facade d’authentification (IamAuth)

- Centralise la logique d’auth côté frontend.
- Utilise `TokenStorageService` et `LoginService`.
- Expose des signaux pour l’état d’authentification, les tokens, etc.

### 4. Intégration dans l’application

- Utilisation du service dans les guards, interceptors HTTP, et composants nécessitant l’authentification.
- Rafraîchissement automatique du token lors d’une réponse 401 (non autorisé).

### 5. Sécurité & bonnes pratiques

- Validation stricte des entrées/sorties.
- Pas de stockage du token dans des variables globales ou non sécurisées.
- Effacement des tokens à la déconnexion.
- Respect des conventions Angular (signals, DI, OnPush, etc.).

## Résultat

- Code compilant sans erreur.
- Gestion du refresh token centralisée, testable et maintenable.
- Respect de l’architecture Nx/DDD et des standards Angular 21+.

---

**Auteur :** GitHub Copilot
**Date :** 08/01/2026
