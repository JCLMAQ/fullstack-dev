import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CommentScalarWhereInputObjectSchema as CommentScalarWhereInputObjectSchema } from './CommentScalarWhereInput.schema';
import { CommentUpdateManyMutationInputObjectSchema as CommentUpdateManyMutationInputObjectSchema } from './CommentUpdateManyMutationInput.schema';
import { CommentUncheckedUpdateManyWithoutAuthorInputObjectSchema as CommentUncheckedUpdateManyWithoutAuthorInputObjectSchema } from './CommentUncheckedUpdateManyWithoutAuthorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CommentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CommentUpdateManyMutationInputObjectSchema), z.lazy(() => CommentUncheckedUpdateManyWithoutAuthorInputObjectSchema)])
}).strict();
export const CommentUpdateManyWithWhereWithoutAuthorInputObjectSchema: z.ZodType<Prisma.CommentUpdateManyWithWhereWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUpdateManyWithWhereWithoutAuthorInput>;
export const CommentUpdateManyWithWhereWithoutAuthorInputObjectZodSchema = makeSchema();
