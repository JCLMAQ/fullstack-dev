import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserPostLikeLinkCreateManyUserInputObjectSchema as UserPostLikeLinkCreateManyUserInputObjectSchema } from './UserPostLikeLinkCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => UserPostLikeLinkCreateManyUserInputObjectSchema), z.lazy(() => UserPostLikeLinkCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const UserPostLikeLinkCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.UserPostLikeLinkCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkCreateManyUserInputEnvelope>;
export const UserPostLikeLinkCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
