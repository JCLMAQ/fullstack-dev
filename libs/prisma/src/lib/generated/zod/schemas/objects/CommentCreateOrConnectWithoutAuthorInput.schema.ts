import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CommentWhereUniqueInputObjectSchema as CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentCreateWithoutAuthorInputObjectSchema as CommentCreateWithoutAuthorInputObjectSchema } from './CommentCreateWithoutAuthorInput.schema';
import { CommentUncheckedCreateWithoutAuthorInputObjectSchema as CommentUncheckedCreateWithoutAuthorInputObjectSchema } from './CommentUncheckedCreateWithoutAuthorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CommentCreateWithoutAuthorInputObjectSchema), z.lazy(() => CommentUncheckedCreateWithoutAuthorInputObjectSchema)])
}).strict();
export const CommentCreateOrConnectWithoutAuthorInputObjectSchema: z.ZodType<Prisma.CommentCreateOrConnectWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentCreateOrConnectWithoutAuthorInput>;
export const CommentCreateOrConnectWithoutAuthorInputObjectZodSchema = makeSchema();
