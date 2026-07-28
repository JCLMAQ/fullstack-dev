import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const CommentWhereUniqueInputObjectSchema: z.ZodType<Prisma.CommentWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentWhereUniqueInput>;
export const CommentWhereUniqueInputObjectZodSchema = makeSchema();
