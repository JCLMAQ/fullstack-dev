import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PostCreateManyOwnerInputObjectSchema as PostCreateManyOwnerInputObjectSchema } from './PostCreateManyOwnerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PostCreateManyOwnerInputObjectSchema), z.lazy(() => PostCreateManyOwnerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PostCreateManyOwnerInputEnvelopeObjectSchema: z.ZodType<Prisma.PostCreateManyOwnerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateManyOwnerInputEnvelope>;
export const PostCreateManyOwnerInputEnvelopeObjectZodSchema = makeSchema();
