import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostCreateWithoutOwnerInputObjectSchema as PostCreateWithoutOwnerInputObjectSchema } from './PostCreateWithoutOwnerInput.schema';
import { PostUncheckedCreateWithoutOwnerInputObjectSchema as PostUncheckedCreateWithoutOwnerInputObjectSchema } from './PostUncheckedCreateWithoutOwnerInput.schema';
import { PostCreateOrConnectWithoutOwnerInputObjectSchema as PostCreateOrConnectWithoutOwnerInputObjectSchema } from './PostCreateOrConnectWithoutOwnerInput.schema';
import { PostUpsertWithWhereUniqueWithoutOwnerInputObjectSchema as PostUpsertWithWhereUniqueWithoutOwnerInputObjectSchema } from './PostUpsertWithWhereUniqueWithoutOwnerInput.schema';
import { PostCreateManyOwnerInputEnvelopeObjectSchema as PostCreateManyOwnerInputEnvelopeObjectSchema } from './PostCreateManyOwnerInputEnvelope.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithWhereUniqueWithoutOwnerInputObjectSchema as PostUpdateWithWhereUniqueWithoutOwnerInputObjectSchema } from './PostUpdateWithWhereUniqueWithoutOwnerInput.schema';
import { PostUpdateManyWithWhereWithoutOwnerInputObjectSchema as PostUpdateManyWithWhereWithoutOwnerInputObjectSchema } from './PostUpdateManyWithWhereWithoutOwnerInput.schema';
import { PostScalarWhereInputObjectSchema as PostScalarWhereInputObjectSchema } from './PostScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PostCreateWithoutOwnerInputObjectSchema), z.lazy(() => PostCreateWithoutOwnerInputObjectSchema).array(), z.lazy(() => PostUncheckedCreateWithoutOwnerInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutOwnerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PostCreateOrConnectWithoutOwnerInputObjectSchema), z.lazy(() => PostCreateOrConnectWithoutOwnerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PostUpsertWithWhereUniqueWithoutOwnerInputObjectSchema), z.lazy(() => PostUpsertWithWhereUniqueWithoutOwnerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PostCreateManyOwnerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PostUpdateWithWhereUniqueWithoutOwnerInputObjectSchema), z.lazy(() => PostUpdateWithWhereUniqueWithoutOwnerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PostUpdateManyWithWhereWithoutOwnerInputObjectSchema), z.lazy(() => PostUpdateManyWithWhereWithoutOwnerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PostScalarWhereInputObjectSchema), z.lazy(() => PostScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PostUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema: z.ZodType<Prisma.PostUncheckedUpdateManyWithoutOwnerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUncheckedUpdateManyWithoutOwnerNestedInput>;
export const PostUncheckedUpdateManyWithoutOwnerNestedInputObjectZodSchema = makeSchema();
