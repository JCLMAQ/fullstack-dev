import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  userId: z.boolean().optional(),
  street: z.boolean().optional(),
  buildingNum: z.boolean().optional(),
  aptNum: z.boolean().optional(),
  city: z.boolean().optional(),
  state: z.boolean().optional(),
  zipCode: z.boolean().optional(),
  country: z.boolean().optional(),
  countryIso: z.boolean().optional(),
  addressType: z.boolean().optional(),
  isPrimary: z.boolean().optional()
}).strict();
export const AddressSelectObjectSchema: z.ZodType<Prisma.AddressSelect> = makeSchema() as unknown as z.ZodType<Prisma.AddressSelect>;
export const AddressSelectObjectZodSchema = makeSchema();
