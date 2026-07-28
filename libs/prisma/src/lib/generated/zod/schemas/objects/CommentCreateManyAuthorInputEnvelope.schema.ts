import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { CommentCreateManyAuthorInputObjectSchema as CommentCreateManyAuthorInputObjectSchema } from './CommentCreateManyAuthorInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CommentCreateManyAuthorInputObjectSchema), z.lazy(() => CommentCreateManyAuthorInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CommentCreateManyAuthorInputEnvelopeObjectSchema: z.ZodType<Prisma.CommentCreateManyAuthorInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CommentCreateManyAuthorInputEnvelope>;
export const CommentCreateManyAuthorInputEnvelopeObjectZodSchema = makeSchema();
