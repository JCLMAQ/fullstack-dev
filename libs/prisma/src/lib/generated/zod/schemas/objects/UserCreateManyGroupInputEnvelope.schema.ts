import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateManyGroupInputObjectSchema as UserCreateManyGroupInputObjectSchema } from './UserCreateManyGroupInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => UserCreateManyGroupInputObjectSchema), z.lazy(() => UserCreateManyGroupInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const UserCreateManyGroupInputEnvelopeObjectSchema: z.ZodType<Prisma.UserCreateManyGroupInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateManyGroupInputEnvelope>;
export const UserCreateManyGroupInputEnvelopeObjectZodSchema = makeSchema();
