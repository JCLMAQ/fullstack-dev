import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostCreateManyOrgInputObjectSchema as PostCreateManyOrgInputObjectSchema } from './PostCreateManyOrgInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PostCreateManyOrgInputObjectSchema), z.lazy(() => PostCreateManyOrgInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PostCreateManyOrgInputEnvelopeObjectSchema: z.ZodType<Prisma.PostCreateManyOrgInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateManyOrgInputEnvelope>;
export const PostCreateManyOrgInputEnvelopeObjectZodSchema = makeSchema();
