import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { ScopeSelectObjectSchema as ScopeSelectObjectSchema } from './objects/ScopeSelect.schema';
import { ScopeIncludeObjectSchema as ScopeIncludeObjectSchema } from './objects/ScopeInclude.schema';
import { ScopeWhereUniqueInputObjectSchema as ScopeWhereUniqueInputObjectSchema } from './objects/ScopeWhereUniqueInput.schema';

export const ScopeFindUniqueSchema: z.ZodType<Prisma.ScopeFindUniqueArgs> = z.object({ select: ScopeSelectObjectSchema.optional(), include: ScopeIncludeObjectSchema.optional(), where: ScopeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ScopeFindUniqueArgs>;

export const ScopeFindUniqueZodSchema = z.object({ select: ScopeSelectObjectSchema.optional(), include: ScopeIncludeObjectSchema.optional(), where: ScopeWhereUniqueInputObjectSchema }).strict();