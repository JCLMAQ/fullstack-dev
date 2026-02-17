import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueCreateWithoutPostsInputObjectSchema as TagValueCreateWithoutPostsInputObjectSchema } from './TagValueCreateWithoutPostsInput.schema';
import { TagValueUncheckedCreateWithoutPostsInputObjectSchema as TagValueUncheckedCreateWithoutPostsInputObjectSchema } from './TagValueUncheckedCreateWithoutPostsInput.schema';
import { TagValueCreateOrConnectWithoutPostsInputObjectSchema as TagValueCreateOrConnectWithoutPostsInputObjectSchema } from './TagValueCreateOrConnectWithoutPostsInput.schema';
import { TagValueUpsertWithWhereUniqueWithoutPostsInputObjectSchema as TagValueUpsertWithWhereUniqueWithoutPostsInputObjectSchema } from './TagValueUpsertWithWhereUniqueWithoutPostsInput.schema';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueUpdateWithWhereUniqueWithoutPostsInputObjectSchema as TagValueUpdateWithWhereUniqueWithoutPostsInputObjectSchema } from './TagValueUpdateWithWhereUniqueWithoutPostsInput.schema';
import { TagValueUpdateManyWithWhereWithoutPostsInputObjectSchema as TagValueUpdateManyWithWhereWithoutPostsInputObjectSchema } from './TagValueUpdateManyWithWhereWithoutPostsInput.schema';
import { TagValueScalarWhereInputObjectSchema as TagValueScalarWhereInputObjectSchema } from './TagValueScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagValueCreateWithoutPostsInputObjectSchema), z.lazy(() => TagValueCreateWithoutPostsInputObjectSchema).array(), z.lazy(() => TagValueUncheckedCreateWithoutPostsInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutPostsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TagValueCreateOrConnectWithoutPostsInputObjectSchema), z.lazy(() => TagValueCreateOrConnectWithoutPostsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TagValueUpsertWithWhereUniqueWithoutPostsInputObjectSchema), z.lazy(() => TagValueUpsertWithWhereUniqueWithoutPostsInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TagValueUpdateWithWhereUniqueWithoutPostsInputObjectSchema), z.lazy(() => TagValueUpdateWithWhereUniqueWithoutPostsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TagValueUpdateManyWithWhereWithoutPostsInputObjectSchema), z.lazy(() => TagValueUpdateManyWithWhereWithoutPostsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TagValueScalarWhereInputObjectSchema), z.lazy(() => TagValueScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TagValueUpdateManyWithoutPostsNestedInputObjectSchema: z.ZodType<Prisma.TagValueUpdateManyWithoutPostsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpdateManyWithoutPostsNestedInput>;
export const TagValueUpdateManyWithoutPostsNestedInputObjectZodSchema = makeSchema();
