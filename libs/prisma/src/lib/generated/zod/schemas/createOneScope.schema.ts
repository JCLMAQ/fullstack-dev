import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ScopeSelectObjectSchema as ScopeSelectObjectSchema } from './objects/ScopeSelect.schema';
import { ScopeIncludeObjectSchema as ScopeIncludeObjectSchema } from './objects/ScopeInclude.schema';
import { ScopeCreateInputObjectSchema as ScopeCreateInputObjectSchema } from './objects/ScopeCreateInput.schema';
import { ScopeUncheckedCreateInputObjectSchema as ScopeUncheckedCreateInputObjectSchema } from './objects/ScopeUncheckedCreateInput.schema';

export const ScopeCreateOneSchema: z.ZodType<Prisma.ScopeCreateArgs> = z.object({ select: ScopeSelectObjectSchema.optional(), include: ScopeIncludeObjectSchema.optional(), data: z.union([ScopeCreateInputObjectSchema, ScopeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ScopeCreateArgs>;

export const ScopeCreateOneZodSchema = z.object({ select: ScopeSelectObjectSchema.optional(), include: ScopeIncludeObjectSchema.optional(), data: z.union([ScopeCreateInputObjectSchema, ScopeUncheckedCreateInputObjectSchema]) }).strict();