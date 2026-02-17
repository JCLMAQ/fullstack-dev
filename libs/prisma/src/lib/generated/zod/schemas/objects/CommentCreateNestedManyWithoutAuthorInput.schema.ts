import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CommentCreateWithoutAuthorInputObjectSchema as CommentCreateWithoutAuthorInputObjectSchema } from './CommentCreateWithoutAuthorInput.schema';
import { CommentUncheckedCreateWithoutAuthorInputObjectSchema as CommentUncheckedCreateWithoutAuthorInputObjectSchema } from './CommentUncheckedCreateWithoutAuthorInput.schema';
import { CommentCreateOrConnectWithoutAuthorInputObjectSchema as CommentCreateOrConnectWithoutAuthorInputObjectSchema } from './CommentCreateOrConnectWithoutAuthorInput.schema';
import { CommentCreateManyAuthorInputEnvelopeObjectSchema as CommentCreateManyAuthorInputEnvelopeObjectSchema } from './CommentCreateManyAuthorInputEnvelope.schema';
import { CommentWhereUniqueInputObjectSchema as CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CommentCreateWithoutAuthorInputObjectSchema), z.lazy(() => CommentCreateWithoutAuthorInputObjectSchema).array(), z.lazy(() => CommentUncheckedCreateWithoutAuthorInputObjectSchema), z.lazy(() => CommentUncheckedCreateWithoutAuthorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CommentCreateOrConnectWithoutAuthorInputObjectSchema), z.lazy(() => CommentCreateOrConnectWithoutAuthorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CommentCreateManyAuthorInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CommentWhereUniqueInputObjectSchema), z.lazy(() => CommentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CommentCreateNestedManyWithoutAuthorInputObjectSchema: z.ZodType<Prisma.CommentCreateNestedManyWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentCreateNestedManyWithoutAuthorInput>;
export const CommentCreateNestedManyWithoutAuthorInputObjectZodSchema = makeSchema();
