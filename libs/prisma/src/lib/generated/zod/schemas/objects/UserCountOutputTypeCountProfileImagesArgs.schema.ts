import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ImageWhereInputObjectSchema as ImageWhereInputObjectSchema } from './ImageWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountProfileImagesArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountProfileImagesArgsObjectZodSchema = makeSchema();
