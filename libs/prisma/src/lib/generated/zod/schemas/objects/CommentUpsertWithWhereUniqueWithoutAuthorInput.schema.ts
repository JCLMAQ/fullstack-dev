import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CommentWhereUniqueInputObjectSchema as CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithoutAuthorInputObjectSchema as CommentUpdateWithoutAuthorInputObjectSchema } from './CommentUpdateWithoutAuthorInput.schema';
import { CommentUncheckedUpdateWithoutAuthorInputObjectSchema as CommentUncheckedUpdateWithoutAuthorInputObjectSchema } from './CommentUncheckedUpdateWithoutAuthorInput.schema';
import { CommentCreateWithoutAuthorInputObjectSchema as CommentCreateWithoutAuthorInputObjectSchema } from './CommentCreateWithoutAuthorInput.schema';
import { CommentUncheckedCreateWithoutAuthorInputObjectSchema as CommentUncheckedCreateWithoutAuthorInputObjectSchema } from './CommentUncheckedCreateWithoutAuthorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CommentUpdateWithoutAuthorInputObjectSchema), z.lazy(() => CommentUncheckedUpdateWithoutAuthorInputObjectSchema)]),
  create: z.union([z.lazy(() => CommentCreateWithoutAuthorInputObjectSchema), z.lazy(() => CommentUncheckedCreateWithoutAuthorInputObjectSchema)])
}).strict();
export const CommentUpsertWithWhereUniqueWithoutAuthorInputObjectSchema: z.ZodType<Prisma.CommentUpsertWithWhereUniqueWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUpsertWithWhereUniqueWithoutAuthorInput>;
export const CommentUpsertWithWhereUniqueWithoutAuthorInputObjectZodSchema = makeSchema();
