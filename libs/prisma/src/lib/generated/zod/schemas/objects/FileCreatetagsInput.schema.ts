import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const FileCreatetagsInputObjectSchema: z.ZodType<Prisma.FileCreatetagsInput> = makeSchema() as unknown as z.ZodType<Prisma.FileCreatetagsInput>;
export const FileCreatetagsInputObjectZodSchema = makeSchema();
