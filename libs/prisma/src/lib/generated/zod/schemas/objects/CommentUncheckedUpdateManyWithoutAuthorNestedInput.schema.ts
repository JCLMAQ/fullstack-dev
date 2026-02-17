import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CommentCreateWithoutAuthorInputObjectSchema as CommentCreateWithoutAuthorInputObjectSchema } from './CommentCreateWithoutAuthorInput.schema';
import { CommentUncheckedCreateWithoutAuthorInputObjectSchema as CommentUncheckedCreateWithoutAuthorInputObjectSchema } from './CommentUncheckedCreateWithoutAuthorInput.schema';
import { CommentCreateOrConnectWithoutAuthorInputObjectSchema as CommentCreateOrConnectWithoutAuthorInputObjectSchema } from './CommentCreateOrConnectWithoutAuthorInput.schema';
import { CommentUpsertWithWhereUniqueWithoutAuthorInputObjectSchema as CommentUpsertWithWhereUniqueWithoutAuthorInputObjectSchema } from './CommentUpsertWithWhereUniqueWithoutAuthorInput.schema';
import { CommentCreateManyAuthorInputEnvelopeObjectSchema as CommentCreateManyAuthorInputEnvelopeObjectSchema } from './CommentCreateManyAuthorInputEnvelope.schema';
import { CommentWhereUniqueInputObjectSchema as CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithWhereUniqueWithoutAuthorInputObjectSchema as CommentUpdateWithWhereUniqueWithoutAuthorInputObjectSchema } from './CommentUpdateWithWhereUniqueWithoutAuthorInput.schema';
import { CommentUpdateManyWithWhereWithoutAuthorInputObjectSchema as CommentUpdateManyWithWhereWithoutAuthorInputObjectSchema } from './CommentUpdateManyWithWhereWithoutAuthorInput.schema';
import { CommentScalarWhereInputObjectSchema as CommentScalarWhereInputObjectSchema } from './CommentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CommentCreateWithoutAuthorInputObjectSchema), z.lazy(() => CommentCreateWithoutAuthorInputObjectSchema).array(), z.lazy(() => CommentUncheckedCreateWithoutAuthorInputObjectSchema), z.lazy(() => CommentUncheckedCreateWithoutAuthorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CommentCreateOrConnectWithoutAuthorInputObjectSchema), z.lazy(() => CommentCreateOrConnectWithoutAuthorInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CommentUpsertWithWhereUniqueWithoutAuthorInputObjectSchema), z.lazy(() => CommentUpsertWithWhereUniqueWithoutAuthorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CommentCreateManyAuthorInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CommentWhereUniqueInputObjectSchema), z.lazy(() => CommentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CommentWhereUniqueInputObjectSchema), z.lazy(() => CommentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CommentWhereUniqueInputObjectSchema), z.lazy(() => CommentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CommentWhereUniqueInputObjectSchema), z.lazy(() => CommentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CommentUpdateWithWhereUniqueWithoutAuthorInputObjectSchema), z.lazy(() => CommentUpdateWithWhereUniqueWithoutAuthorInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CommentUpdateManyWithWhereWithoutAuthorInputObjectSchema), z.lazy(() => CommentUpdateManyWithWhereWithoutAuthorInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CommentScalarWhereInputObjectSchema), z.lazy(() => CommentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CommentUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema: z.ZodType<Prisma.CommentUncheckedUpdateManyWithoutAuthorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUncheckedUpdateManyWithoutAuthorNestedInput>;
export const CommentUncheckedUpdateManyWithoutAuthorNestedInputObjectZodSchema = makeSchema();
