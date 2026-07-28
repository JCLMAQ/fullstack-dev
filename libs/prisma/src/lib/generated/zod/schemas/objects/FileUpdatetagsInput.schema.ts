import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const FileUpdatetagsInputObjectSchema: z.ZodType<Prisma.FileUpdatetagsInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdatetagsInput>;
export const FileUpdatetagsInputObjectZodSchema = makeSchema();
