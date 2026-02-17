import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateManyLanguageInputObjectSchema as UserCreateManyLanguageInputObjectSchema } from './UserCreateManyLanguageInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => UserCreateManyLanguageInputObjectSchema), z.lazy(() => UserCreateManyLanguageInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const UserCreateManyLanguageInputEnvelopeObjectSchema: z.ZodType<Prisma.UserCreateManyLanguageInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateManyLanguageInputEnvelope>;
export const UserCreateManyLanguageInputEnvelopeObjectZodSchema = makeSchema();
