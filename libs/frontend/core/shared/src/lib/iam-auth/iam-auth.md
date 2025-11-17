
# Authentication Services

## Architecture finale

- register-service.ts - Gestion de l'inscription
- login-service.ts - Gestion de la connexion
- user-fetch-service.ts - Récupération du profil utilisateur
- token-storage-service.ts - Stockage du token JWT
- user-storage-service.ts - Stockage des données utilisateur
- user-profile-service.ts - Mise à jour du profil
- iam-auth.ts - Facade unifiant tous les services

## Services créés

### TokenStorageService 🔐

- Gestion du token JWT avec signal
- Synchronisation automatique avec localStorage
- Méthodes : setToken(), clearToken()

### UserStorageService 👤

- Gestion des données utilisateur avec signal
- Synchronisation automatique avec localStorage
- Méthodes : setUser(), updateUser(), clearUser()

### AuthenticationService 🔑

- Opérations d'authentification (login, register)
- Récupération du profil utilisateur
- Vérification des credentials
- Rafraîchissement du profil

### UserProfileService 📸

- Mise à jour de la photo de profil
- Extensible pour d'autres opérations de profil
- Service principal (IamAuth) - Facade Pattern
