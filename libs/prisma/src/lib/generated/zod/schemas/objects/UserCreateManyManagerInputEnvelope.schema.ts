import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateManyManagerInputObjectSchema as UserCreateManyManagerInputObjectSchema } from './UserCreateManyManagerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => UserCreateManyManagerInputObjectSchema), z.lazy(() => UserCreateManyManagerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const UserCreateManyManagerInputEnvelopeObjectSchema: z.ZodType<Prisma.UserCreateManyManagerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateManyManagerInputEnvelope>;
export const UserCreateManyManagerInputEnvelopeObjectZodSchema = makeSchema();
