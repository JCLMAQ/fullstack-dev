import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  userId: z.string().optional(),
  tokenId: z.string().optional()
}).strict();
export const RefreshTokenWhereUniqueInputObjectSchema: z.ZodType<Prisma.RefreshTokenWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.RefreshTokenWhereUniqueInput>;
export const RefreshTokenWhereUniqueInputObjectZodSchema = makeSchema();
