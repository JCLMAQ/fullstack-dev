import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { ScopeSelectObjectSchema as ScopeSelectObjectSchema } from './objects/ScopeSelect.schema';
import { ScopeIncludeObjectSchema as ScopeIncludeObjectSchema } from './objects/ScopeInclude.schema';
import { ScopeWhereUniqueInputObjectSchema as ScopeWhereUniqueInputObjectSchema } from './objects/ScopeWhereUniqueInput.schema';
import { ScopeCreateInputObjectSchema as ScopeCreateInputObjectSchema } from './objects/ScopeCreateInput.schema';
import { ScopeUncheckedCreateInputObjectSchema as ScopeUncheckedCreateInputObjectSchema } from './objects/ScopeUncheckedCreateInput.schema';
import { ScopeUpdateInputObjectSchema as ScopeUpdateInputObjectSchema } from './objects/ScopeUpdateInput.schema';
import { ScopeUncheckedUpdateInputObjectSchema as ScopeUncheckedUpdateInputObjectSchema } from './objects/ScopeUncheckedUpdateInput.schema';

export const ScopeUpsertOneSchema: z.ZodType<Prisma.ScopeUpsertArgs> = z.object({ select: ScopeSelectObjectSchema.optional(), include: ScopeIncludeObjectSchema.optional(), where: ScopeWhereUniqueInputObjectSchema, create: z.union([ ScopeCreateInputObjectSchema, ScopeUncheckedCreateInputObjectSchema ]), update: z.union([ ScopeUpdateInputObjectSchema, ScopeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ScopeUpsertArgs>;

export const ScopeUpsertOneZodSchema = z.object({ select: ScopeSelectObjectSchema.optional(), include: ScopeIncludeObjectSchema.optional(), where: ScopeWhereUniqueInputObjectSchema, create: z.union([ ScopeCreateInputObjectSchema, ScopeUncheckedCreateInputObjectSchema ]), update: z.union([ ScopeUpdateInputObjectSchema, ScopeUncheckedUpdateInputObjectSchema ]) }).strict();