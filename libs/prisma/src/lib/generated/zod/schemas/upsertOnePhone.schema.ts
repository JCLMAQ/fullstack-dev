import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { PhoneSelectObjectSchema as PhoneSelectObjectSchema } from './objects/PhoneSelect.schema';
import { PhoneIncludeObjectSchema as PhoneIncludeObjectSchema } from './objects/PhoneInclude.schema';
import { PhoneWhereUniqueInputObjectSchema as PhoneWhereUniqueInputObjectSchema } from './objects/PhoneWhereUniqueInput.schema';
import { PhoneCreateInputObjectSchema as PhoneCreateInputObjectSchema } from './objects/PhoneCreateInput.schema';
import { PhoneUncheckedCreateInputObjectSchema as PhoneUncheckedCreateInputObjectSchema } from './objects/PhoneUncheckedCreateInput.schema';
import { PhoneUpdateInputObjectSchema as PhoneUpdateInputObjectSchema } from './objects/PhoneUpdateInput.schema';
import { PhoneUncheckedUpdateInputObjectSchema as PhoneUncheckedUpdateInputObjectSchema } from './objects/PhoneUncheckedUpdateInput.schema';

export const PhoneUpsertOneSchema: z.ZodType<Prisma.PhoneUpsertArgs> = z.object({ select: PhoneSelectObjectSchema.optional(), include: PhoneIncludeObjectSchema.optional(), where: PhoneWhereUniqueInputObjectSchema, create: z.union([ PhoneCreateInputObjectSchema, PhoneUncheckedCreateInputObjectSchema ]), update: z.union([ PhoneUpdateInputObjectSchema, PhoneUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.PhoneUpsertArgs>;

export const PhoneUpsertOneZodSchema = z.object({ select: PhoneSelectObjectSchema.optional(), include: PhoneIncludeObjectSchema.optional(), where: PhoneWhereUniqueInputObjectSchema, create: z.union([ PhoneCreateInputObjectSchema, PhoneUncheckedCreateInputObjectSchema ]), update: z.union([ PhoneUpdateInputObjectSchema, PhoneUncheckedUpdateInputObjectSchema ]) }).strict();