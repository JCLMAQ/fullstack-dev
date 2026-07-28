import * as z from 'zod';
import { ImageWhereInputObjectSchema as ImageWhereInputObjectSchema } from './ImageWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereInputObjectSchema).optional()
}).strict();
export const OrganizationCountOutputTypeCountImagesArgsObjectSchema = makeSchema();
export const OrganizationCountOutputTypeCountImagesArgsObjectZodSchema = makeSchema();
