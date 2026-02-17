import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ScopeSelectObjectSchema as ScopeSelectObjectSchema } from './objects/ScopeSelect.schema';
import { ScopeIncludeObjectSchema as ScopeIncludeObjectSchema } from './objects/ScopeInclude.schema';
import { ScopeWhereUniqueInputObjectSchema as ScopeWhereUniqueInputObjectSchema } from './objects/ScopeWhereUniqueInput.schema';

export const ScopeFindUniqueOrThrowSchema: z.ZodType<Prisma.ScopeFindUniqueOrThrowArgs> = z.object({ select: ScopeSelectObjectSchema.optional(), include: ScopeIncludeObjectSchema.optional(), where: ScopeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ScopeFindUniqueOrThrowArgs>;

export const ScopeFindUniqueOrThrowZodSchema = z.object({ select: ScopeSelectObjectSchema.optional(), include: ScopeIncludeObjectSchema.optional(), where: ScopeWhereUniqueInputObjectSchema }).strict();