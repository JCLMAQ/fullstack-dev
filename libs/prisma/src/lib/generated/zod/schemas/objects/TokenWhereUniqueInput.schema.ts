import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  tokenId: z.string().optional(),
  emailToken: z.string().optional()
}).strict();
export const TokenWhereUniqueInputObjectSchema: z.ZodType<Prisma.TokenWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TokenWhereUniqueInput>;
export const TokenWhereUniqueInputObjectZodSchema = makeSchema();
