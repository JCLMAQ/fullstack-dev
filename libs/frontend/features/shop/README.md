# Boutique intégrée

Portage du projet local `~/Programmation/Zoaib-Angular/ngx-fullstack-ecommerce-master`
vers une bibliothèque Angular Nx, chargée à la demande dans le layout existant.

## Accès

L’entrée **Boutique** du menu gauche ouvre `/shop`, redirigé vers `/shop/products/all`.
Les routes produit, favoris, panier, checkout et confirmation restent sous `/shop`.
Les paramètres de catégorie et de recherche sont liés aux inputs des composants
par le routeur de l’application hôte.

## Fonctionnement

- Catalogue et avis de démonstration fournis par le projet source.
- Panier, favoris, avis ajoutés et commandes en mémoire dans `EcommerceStore`.
- Aucun appel à une API e-commerce, aucune persistance en base, aucun paiement réel
  et aucun email d’expédition. Les champs de livraison sont une maquette.
- Images chargées depuis les URL publiques du catalogue source.
- Identité issue de `AppStore` / IAM existant via `ShopSession` : aucun formulaire
  de connexion fictive ou stockage de mots de passe dans la boutique.
- Le checkout redirige les visiteurs vers `/auth/login`, et les paniers vides vers
  `/shop/cart`. Après connexion, revenir à la boutique via le menu.
- Panier, favoris et commandes sont effacés à la déconnexion ou au changement de
  compte. Un rechargement réinitialise toutes les données de démonstration.
- Les notifications utilisent `MatSnackBar`, les couleurs suivent le thème Material.
- Pas de Firebase, Stripe, Hot Toast ou Immer ajouté aux dépendances du monorepo.

## Vérification

```sh
pnpm nx run shop:test
pnpm nx run shop:lint
pnpm nx run frontend/app-jcm:build:production
```

Les tests couvrent les routes imbriquées, les filtres du catalogue, les fiches,
le panier et ses quantités, les favoris, l’identité IAM, la déconnexion et la
création de commandes simulées.

Une utilisation réelle nécessitera une API NestJS/Prisma pour le catalogue,
les paniers et les commandes, ainsi qu’un prestataire de paiement côté serveur.
