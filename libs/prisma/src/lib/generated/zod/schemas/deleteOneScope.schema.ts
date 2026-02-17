import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ScopeSelectObjectSchema as ScopeSelectObjectSchema } from './objects/ScopeSelect.schema';
import { ScopeIncludeObjectSchema as ScopeIncludeObjectSchema } from './objects/ScopeInclude.schema';
import { ScopeWhereUniqueInputObjectSchema as ScopeWhereUniqueInputObjectSchema } from './objects/ScopeWhereUniqueInput.schema';

export const ScopeDeleteOneSchema: z.ZodType<Prisma.ScopeDeleteArgs> = z.object({ select: ScopeSelectObjectSchema.optional(), include: ScopeIncludeObjectSchema.optional(), where: ScopeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ScopeDeleteArgs>;

export const ScopeDeleteOneZodSchema = z.object({ select: ScopeSelectObjectSchema.optional(), include: ScopeIncludeObjectSchema.optional(), where: ScopeWhereUniqueInputObjectSchema }).strict();