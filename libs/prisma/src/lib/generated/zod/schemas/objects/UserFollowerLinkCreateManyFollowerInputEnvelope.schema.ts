import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserFollowerLinkCreateManyFollowerInputObjectSchema as UserFollowerLinkCreateManyFollowerInputObjectSchema } from './UserFollowerLinkCreateManyFollowerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => UserFollowerLinkCreateManyFollowerInputObjectSchema), z.lazy(() => UserFollowerLinkCreateManyFollowerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const UserFollowerLinkCreateManyFollowerInputEnvelopeObjectSchema: z.ZodType<Prisma.UserFollowerLinkCreateManyFollowerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkCreateManyFollowerInputEnvelope>;
export const UserFollowerLinkCreateManyFollowerInputEnvelopeObjectZodSchema = makeSchema();
