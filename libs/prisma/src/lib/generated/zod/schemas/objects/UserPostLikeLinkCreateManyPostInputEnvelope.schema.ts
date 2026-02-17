import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserPostLikeLinkCreateManyPostInputObjectSchema as UserPostLikeLinkCreateManyPostInputObjectSchema } from './UserPostLikeLinkCreateManyPostInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => UserPostLikeLinkCreateManyPostInputObjectSchema), z.lazy(() => UserPostLikeLinkCreateManyPostInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const UserPostLikeLinkCreateManyPostInputEnvelopeObjectSchema: z.ZodType<Prisma.UserPostLikeLinkCreateManyPostInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkCreateManyPostInputEnvelope>;
export const UserPostLikeLinkCreateManyPostInputEnvelopeObjectZodSchema = makeSchema();
