import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const PhoneIncludeObjectSchema: z.ZodType<Prisma.PhoneInclude> = makeSchema() as unknown as z.ZodType<Prisma.PhoneInclude>;
export const PhoneIncludeObjectZodSchema = makeSchema();
