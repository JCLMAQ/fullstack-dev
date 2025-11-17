
# Authentication Services

## Services créés

### TokenStorageService 🔐

Gestion du token JWT avec signal
Synchronisation automatique avec localStorage
Méthodes : setToken(), clearToken()

### UserStorageService 👤

Gestion des données utilisateur avec signal
Synchronisation automatique avec localStorage
Méthodes : setUser(), updateUser(), clearUser()

### AuthenticationService 🔑

Opérations d'authentification (login, register)
Récupération du profil utilisateur
Vérification des credentials
Rafraîchissement du profil

### UserProfileService 📸

Mise à jour de la photo de profil
Extensible pour d'autres opérations de profil
Service principal (IamAuth) - Facade Pattern
