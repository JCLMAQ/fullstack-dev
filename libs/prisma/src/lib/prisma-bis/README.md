# Proposition de schéma Prisma

Le dossier réunit les modèles par domaine. `schema.prisma` déclare la source PostgreSQL et les générateurs. `work.prisma` conserve les modèles `Task` et `Todo`, leurs états, leurs tables d’affectation et la relation facultative de la tâche vers le todo.

Le schéma se valide depuis la racine du dépôt avec `pnpm exec prisma7 validate --schema libs/prisma/src/lib/prisma-bis`. Les sorties de génération de la proposition sont locales à ce dossier.

## Reprise des données et adaptation des services

1. **Suppression logique.** Le champ Prisma `deletedAt` réutilise la colonne PostgreSQL `isDeletedDT`. Avant de supprimer `isDeleted`, recenser les valeurs autres que 0 et 1 et les incohérences entre drapeau et date. Résoudre notamment le cas des lignes marquées supprimées sans date. Adapter les filtres, la suppression, la restauration et les contrôles d’authentification.
2. **Associations de médias.** Pour `Image`, reprendre les associations `user` dans la nouvelle clé étrangère facultative `associatedUserId`. Pour `post`, `organization`, `story` et `user_profile`, vérifier les clés étrangères existantes et compléter celles qui manquent. Pour `File` et `Image`, inventorier les autres types d’association et résoudre les cibles orphelines ou les clés contradictoires avant de retirer le couple générique. Adapter les filtres et les écritures des API aux relations explicites.
3. **Champs historiques de File.** Comparer `name`, `type`, `data` et `size` aux champs actuels et vérifier les lecteurs et les écritures. Préserver les valeurs encore utiles, notamment `data` dont le format doit être confirmé avant reprise.
4. **Intégration.** Une fois les données reprises et les appels adaptés, configurer Prisma 7 pour lire le dossier et vérifier aussi l’émission du contrat Prisma 8. Le diff établi à partir des schémas contient des suppressions de colonnes. Préparer une migration qui ajoute et remplit les nouvelles données avant de supprimer les anciennes.
