import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserFollowerLinkCreateManyUserInputObjectSchema as UserFollowerLinkCreateManyUserInputObjectSchema } from './UserFollowerLinkCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => UserFollowerLinkCreateManyUserInputObjectSchema), z.lazy(() => UserFollowerLinkCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const UserFollowerLinkCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.UserFollowerLinkCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkCreateManyUserInputEnvelope>;
export const UserFollowerLinkCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
