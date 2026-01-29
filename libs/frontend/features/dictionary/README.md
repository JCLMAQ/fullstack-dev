
# Management du dictionnaires de la BD

## Obectif

Créer les ui (et les services nécessaires)pour la gestion du dictionnaire (model Word, Language,Translation, dictionary entry type) en utilisant les data du NGRX dictionary store (dans l'appStore).

Le desciptifs de la strcture est dans DictionariesREADME.md

l'UI est un composant en tableau liste éditable basé sur Angular Material, avec des tri et recherche et pagination
Les champs de traduction dans les différentes langues suivent sur la ligne de l'identifiant.
Chaque ligne disposera d'un bouton de modification, de suppression (definitive et virtuelle ).

## Localisation des fichiers

```text
libs/frontend/features/dictionary
```

## Utilisation

L'accès aux ui se fera par le menu d'extrème droite (3 points verticaux du header)
L'accès devra pouvoir être réservé à un administrateur (isAdmin dans le appStore), mais pour les test isAdmin sera hardCodé à true pour que le menu soit accessible.

## Règles

Dans le service il faudra ajouter le createUpdateMutation, le virtualDeleteMutation etle deleteMutation.
Dans le store (withDictionariesFeatures), il faudra ajouter le niveau withMutations (de ngrx toolkit) - voir le phone-store comme exemple et pour la doc:
<https://ngrx-toolkit.angulararchitects.io/docs/mutations>
