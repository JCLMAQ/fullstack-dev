import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional(),
  storageName: z.string().optional()
}).strict();
export const FileWhereUniqueInputObjectSchema: z.ZodType<Prisma.FileWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.FileWhereUniqueInput>;
export const FileWhereUniqueInputObjectZodSchema = makeSchema();
