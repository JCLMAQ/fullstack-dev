import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const StoryWhereUniqueInputObjectSchema: z.ZodType<Prisma.StoryWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryWhereUniqueInput>;
export const StoryWhereUniqueInputObjectZodSchema = makeSchema();
