import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const ImageUpdatetagsInputObjectSchema: z.ZodType<Prisma.ImageUpdatetagsInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdatetagsInput>;
export const ImageUpdatetagsInputObjectZodSchema = makeSchema();
