import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const TodoWhereUniqueInputObjectSchema: z.ZodType<Prisma.TodoWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoWhereUniqueInput>;
export const TodoWhereUniqueInputObjectZodSchema = makeSchema();
