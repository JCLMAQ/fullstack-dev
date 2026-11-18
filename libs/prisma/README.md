# prisma

Le schéma PostgreSQL commun se trouve dans `src/lib/prisma/schema.prisma`.

- `pnpm run prisma:generate` génère le client Prisma 7 et les schémas Zod.
- `pnpm run prisma:contract:emit` régénère le contrat Prisma 8 et ses types dans `src/lib/generated/contract`. Inclure ces fichiers générés avec chaque changement du schéma.
- `pnpm run prisma-migrate` continue d'utiliser Prisma 7 pour les migrations SQL pendant la transition.

Les services NestJS et les scripts de seed utilisent encore le client Prisma 7.
