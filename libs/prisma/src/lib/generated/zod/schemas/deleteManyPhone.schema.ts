import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { PhoneWhereInputObjectSchema as PhoneWhereInputObjectSchema } from './objects/PhoneWhereInput.schema';

export const PhoneDeleteManySchema: z.ZodType<Prisma.PhoneDeleteManyArgs> = z.object({ where: PhoneWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PhoneDeleteManyArgs>;

export const PhoneDeleteManyZodSchema = z.object({ where: PhoneWhereInputObjectSchema.optional() }).strict();