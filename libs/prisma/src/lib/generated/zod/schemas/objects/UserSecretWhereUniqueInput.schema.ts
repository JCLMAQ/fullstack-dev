import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  userId: z.string().optional()
}).strict();
export const UserSecretWhereUniqueInputObjectSchema: z.ZodType<Prisma.UserSecretWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.UserSecretWhereUniqueInput>;
export const UserSecretWhereUniqueInputObjectZodSchema = makeSchema();
