/**
 * Point d'entrée secondaire pour IdleTimeoutService
 * À utiliser via '@fe/auth/idle-timeout'
 *
 * Séparé du point d'entrée principal pour éviter les dépendances circulaires
 * car IdleTimeoutService dépend de UserStorageService et TokenStorageService
 */
export * from './src/lib/idle-timeout/index';
