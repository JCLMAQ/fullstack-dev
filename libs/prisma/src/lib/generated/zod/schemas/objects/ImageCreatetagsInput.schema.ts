import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const ImageCreatetagsInputObjectSchema: z.ZodType<Prisma.ImageCreatetagsInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreatetagsInput>;
export const ImageCreatetagsInputObjectZodSchema = makeSchema();
