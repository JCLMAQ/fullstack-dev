import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { PhoneSelectObjectSchema as PhoneSelectObjectSchema } from './objects/PhoneSelect.schema';
import { PhoneUpdateManyMutationInputObjectSchema as PhoneUpdateManyMutationInputObjectSchema } from './objects/PhoneUpdateManyMutationInput.schema';
import { PhoneWhereInputObjectSchema as PhoneWhereInputObjectSchema } from './objects/PhoneWhereInput.schema';

export const PhoneUpdateManyAndReturnSchema: z.ZodType<Prisma.PhoneUpdateManyAndReturnArgs> = z.object({ select: PhoneSelectObjectSchema.optional(), data: PhoneUpdateManyMutationInputObjectSchema, where: PhoneWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PhoneUpdateManyAndReturnArgs>;

export const PhoneUpdateManyAndReturnZodSchema = z.object({ select: PhoneSelectObjectSchema.optional(), data: PhoneUpdateManyMutationInputObjectSchema, where: PhoneWhereInputObjectSchema.optional() }).strict();