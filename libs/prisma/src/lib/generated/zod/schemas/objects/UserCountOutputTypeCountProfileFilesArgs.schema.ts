import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileWhereInputObjectSchema as FileWhereInputObjectSchema } from './FileWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountProfileFilesArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountProfileFilesArgsObjectZodSchema = makeSchema();
