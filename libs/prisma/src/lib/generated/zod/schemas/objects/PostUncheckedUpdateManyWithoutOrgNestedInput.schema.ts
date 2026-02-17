import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostCreateWithoutOrgInputObjectSchema as PostCreateWithoutOrgInputObjectSchema } from './PostCreateWithoutOrgInput.schema';
import { PostUncheckedCreateWithoutOrgInputObjectSchema as PostUncheckedCreateWithoutOrgInputObjectSchema } from './PostUncheckedCreateWithoutOrgInput.schema';
import { PostCreateOrConnectWithoutOrgInputObjectSchema as PostCreateOrConnectWithoutOrgInputObjectSchema } from './PostCreateOrConnectWithoutOrgInput.schema';
import { PostUpsertWithWhereUniqueWithoutOrgInputObjectSchema as PostUpsertWithWhereUniqueWithoutOrgInputObjectSchema } from './PostUpsertWithWhereUniqueWithoutOrgInput.schema';
import { PostCreateManyOrgInputEnvelopeObjectSchema as PostCreateManyOrgInputEnvelopeObjectSchema } from './PostCreateManyOrgInputEnvelope.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithWhereUniqueWithoutOrgInputObjectSchema as PostUpdateWithWhereUniqueWithoutOrgInputObjectSchema } from './PostUpdateWithWhereUniqueWithoutOrgInput.schema';
import { PostUpdateManyWithWhereWithoutOrgInputObjectSchema as PostUpdateManyWithWhereWithoutOrgInputObjectSchema } from './PostUpdateManyWithWhereWithoutOrgInput.schema';
import { PostScalarWhereInputObjectSchema as PostScalarWhereInputObjectSchema } from './PostScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PostCreateWithoutOrgInputObjectSchema), z.lazy(() => PostCreateWithoutOrgInputObjectSchema).array(), z.lazy(() => PostUncheckedCreateWithoutOrgInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutOrgInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PostCreateOrConnectWithoutOrgInputObjectSchema), z.lazy(() => PostCreateOrConnectWithoutOrgInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PostUpsertWithWhereUniqueWithoutOrgInputObjectSchema), z.lazy(() => PostUpsertWithWhereUniqueWithoutOrgInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PostCreateManyOrgInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PostUpdateWithWhereUniqueWithoutOrgInputObjectSchema), z.lazy(() => PostUpdateWithWhereUniqueWithoutOrgInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PostUpdateManyWithWhereWithoutOrgInputObjectSchema), z.lazy(() => PostUpdateManyWithWhereWithoutOrgInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PostScalarWhereInputObjectSchema), z.lazy(() => PostScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PostUncheckedUpdateManyWithoutOrgNestedInputObjectSchema: z.ZodType<Prisma.PostUncheckedUpdateManyWithoutOrgNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUncheckedUpdateManyWithoutOrgNestedInput>;
export const PostUncheckedUpdateManyWithoutOrgNestedInputObjectZodSchema = makeSchema();
