import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  userId: z.boolean().optional(),
  countryCode: z.boolean().optional(),
  countryIso: z.boolean().optional(),
  number: z.boolean().optional(),
  extension: z.boolean().optional(),
  phoneType: z.boolean().optional(),
  isPrimary: z.boolean().optional()
}).strict();
export const PhoneSelectObjectSchema: z.ZodType<Prisma.PhoneSelect> = makeSchema() as unknown as z.ZodType<Prisma.PhoneSelect>;
export const PhoneSelectObjectZodSchema = makeSchema();
