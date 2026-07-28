import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { PhoneUpdateManyMutationInputObjectSchema as PhoneUpdateManyMutationInputObjectSchema } from './objects/PhoneUpdateManyMutationInput.schema';
import { PhoneWhereInputObjectSchema as PhoneWhereInputObjectSchema } from './objects/PhoneWhereInput.schema';

export const PhoneUpdateManySchema: z.ZodType<Prisma.PhoneUpdateManyArgs> = z.object({ data: PhoneUpdateManyMutationInputObjectSchema, where: PhoneWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PhoneUpdateManyArgs>;

export const PhoneUpdateManyZodSchema = z.object({ data: PhoneUpdateManyMutationInputObjectSchema, where: PhoneWhereInputObjectSchema.optional() }).strict();