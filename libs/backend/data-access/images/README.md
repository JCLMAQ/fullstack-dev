# backend-data-access-images

This library provides comprehensive image management functionality for the application.

## Features

- Image upload and storage management
- Multiple storage backends (local, S3, Cloudinary)
- Image processing and variants generation
- Image metadata extraction and management
- Association with users, posts, organizations, and stories
- Image tagging and categorization
- Bulk operations and analytics

## Running unit tests

Run `nx test backend-data-access-images` to execute the unit tests via [Jest](https://jestjs.io).



Schéma PostgreSQL Optimisé pour les Images
1. Modèle Image Complet
Métadonnées complètes : filename, originalName, mimeType, fileSize, dimensions
Stockage flexible : type de stockage, chemin, URL publique, bucketName
Relations multiples : User, Organization, Post, Story
Système de tags : recherche et catégorisation
Variants JSON : pour différentes tailles/formats
Indexation optimisée pour PostgreSQL
1. Service Backend Complet
CRUD complet : création, lecture, mise à jour, suppression
Opérations en lot : pour l'efficacité
Recherche avancée : par tags, type MIME, utilisateur
Analytics : statistiques de stockage et d'utilisation
Gestion des associations : avec les différentes entités
Pagination : pour les grandes collections
1. Fonctionnalités Clés
Structure PostgreSQL Optimisée
Types UUID pour les IDs
Indexes composites pour les requêtes courantes
Relations bidirectionnelles avec cascade
Soft delete avec deletedAt
Arrays PostgreSQL pour les tags
JSON pour les variants
