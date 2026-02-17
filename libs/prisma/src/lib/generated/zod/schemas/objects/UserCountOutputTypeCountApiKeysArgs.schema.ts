import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ApiKeyWhereInputObjectSchema as ApiKeyWhereInputObjectSchema } from './ApiKeyWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ApiKeyWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountApiKeysArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountApiKeysArgsObjectZodSchema = makeSchema();
