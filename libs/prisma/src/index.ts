/**
 * Re-export browser-safe types only for universal use
 * For backend, import PrismaClient separately from @db/prisma-client
 */
export * from './lib/generated/prisma/browser';
export * from './lib/generated/prisma/commonInputTypes';
export * from './lib/generated/prisma/enums';
export * from './lib/generated/prisma/models';
export * from './lib/modelsWithRealations/index';

