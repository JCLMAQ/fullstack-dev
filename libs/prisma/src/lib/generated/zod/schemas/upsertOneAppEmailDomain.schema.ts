import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { AppEmailDomainSelectObjectSchema as AppEmailDomainSelectObjectSchema } from './objects/AppEmailDomainSelect.schema';
import { AppEmailDomainWhereUniqueInputObjectSchema as AppEmailDomainWhereUniqueInputObjectSchema } from './objects/AppEmailDomainWhereUniqueInput.schema';
import { AppEmailDomainCreateInputObjectSchema as AppEmailDomainCreateInputObjectSchema } from './objects/AppEmailDomainCreateInput.schema';
import { AppEmailDomainUncheckedCreateInputObjectSchema as AppEmailDomainUncheckedCreateInputObjectSchema } from './objects/AppEmailDomainUncheckedCreateInput.schema';
import { AppEmailDomainUpdateInputObjectSchema as AppEmailDomainUpdateInputObjectSchema } from './objects/AppEmailDomainUpdateInput.schema';
import { AppEmailDomainUncheckedUpdateInputObjectSchema as AppEmailDomainUncheckedUpdateInputObjectSchema } from './objects/AppEmailDomainUncheckedUpdateInput.schema';

export const AppEmailDomainUpsertOneSchema: z.ZodType<Prisma.AppEmailDomainUpsertArgs> = z.object({ select: AppEmailDomainSelectObjectSchema.optional(),  where: AppEmailDomainWhereUniqueInputObjectSchema, create: z.union([ AppEmailDomainCreateInputObjectSchema, AppEmailDomainUncheckedCreateInputObjectSchema ]), update: z.union([ AppEmailDomainUpdateInputObjectSchema, AppEmailDomainUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AppEmailDomainUpsertArgs>;

export const AppEmailDomainUpsertOneZodSchema = z.object({ select: AppEmailDomainSelectObjectSchema.optional(),  where: AppEmailDomainWhereUniqueInputObjectSchema, create: z.union([ AppEmailDomainCreateInputObjectSchema, AppEmailDomainUncheckedCreateInputObjectSchema ]), update: z.union([ AppEmailDomainUpdateInputObjectSchema, AppEmailDomainUncheckedUpdateInputObjectSchema ]) }).strict();