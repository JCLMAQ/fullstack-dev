import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { CommentWhereUniqueInputObjectSchema as CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithoutAuthorInputObjectSchema as CommentUpdateWithoutAuthorInputObjectSchema } from './CommentUpdateWithoutAuthorInput.schema';
import { CommentUncheckedUpdateWithoutAuthorInputObjectSchema as CommentUncheckedUpdateWithoutAuthorInputObjectSchema } from './CommentUncheckedUpdateWithoutAuthorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CommentUpdateWithoutAuthorInputObjectSchema), z.lazy(() => CommentUncheckedUpdateWithoutAuthorInputObjectSchema)])
}).strict();
export const CommentUpdateWithWhereUniqueWithoutAuthorInputObjectSchema: z.ZodType<Prisma.CommentUpdateWithWhereUniqueWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUpdateWithWhereUniqueWithoutAuthorInput>;
export const CommentUpdateWithWhereUniqueWithoutAuthorInputObjectZodSchema = makeSchema();
