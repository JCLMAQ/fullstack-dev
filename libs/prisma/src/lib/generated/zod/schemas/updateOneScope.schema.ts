import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { ScopeSelectObjectSchema as ScopeSelectObjectSchema } from './objects/ScopeSelect.schema';
import { ScopeIncludeObjectSchema as ScopeIncludeObjectSchema } from './objects/ScopeInclude.schema';
import { ScopeUpdateInputObjectSchema as ScopeUpdateInputObjectSchema } from './objects/ScopeUpdateInput.schema';
import { ScopeUncheckedUpdateInputObjectSchema as ScopeUncheckedUpdateInputObjectSchema } from './objects/ScopeUncheckedUpdateInput.schema';
import { ScopeWhereUniqueInputObjectSchema as ScopeWhereUniqueInputObjectSchema } from './objects/ScopeWhereUniqueInput.schema';

export const ScopeUpdateOneSchema: z.ZodType<Prisma.ScopeUpdateArgs> = z.object({ select: ScopeSelectObjectSchema.optional(), include: ScopeIncludeObjectSchema.optional(), data: z.union([ScopeUpdateInputObjectSchema, ScopeUncheckedUpdateInputObjectSchema]), where: ScopeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ScopeUpdateArgs>;

export const ScopeUpdateOneZodSchema = z.object({ select: ScopeSelectObjectSchema.optional(), include: ScopeIncludeObjectSchema.optional(), data: z.union([ScopeUpdateInputObjectSchema, ScopeUncheckedUpdateInputObjectSchema]), where: ScopeWhereUniqueInputObjectSchema }).strict();