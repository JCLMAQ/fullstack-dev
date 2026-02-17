import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PhoneTypeSchema } from '../enums/PhoneType.schema';
import { UserCreateNestedOneWithoutPhonesInputObjectSchema as UserCreateNestedOneWithoutPhonesInputObjectSchema } from './UserCreateNestedOneWithoutPhonesInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  countryCode: z.string(),
  countryIso: z.string(),
  number: z.string(),
  extension: z.string().optional().nullable(),
  phoneType: PhoneTypeSchema.optional().nullable(),
  isPrimary: z.boolean().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutPhonesInputObjectSchema)
}).strict();
export const PhoneCreateInputObjectSchema: z.ZodType<Prisma.PhoneCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PhoneCreateInput>;
export const PhoneCreateInputObjectZodSchema = makeSchema();
