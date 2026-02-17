import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueCreateWithoutFilesInputObjectSchema as TagValueCreateWithoutFilesInputObjectSchema } from './TagValueCreateWithoutFilesInput.schema';
import { TagValueUncheckedCreateWithoutFilesInputObjectSchema as TagValueUncheckedCreateWithoutFilesInputObjectSchema } from './TagValueUncheckedCreateWithoutFilesInput.schema';
import { TagValueCreateOrConnectWithoutFilesInputObjectSchema as TagValueCreateOrConnectWithoutFilesInputObjectSchema } from './TagValueCreateOrConnectWithoutFilesInput.schema';
import { TagValueUpsertWithWhereUniqueWithoutFilesInputObjectSchema as TagValueUpsertWithWhereUniqueWithoutFilesInputObjectSchema } from './TagValueUpsertWithWhereUniqueWithoutFilesInput.schema';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueUpdateWithWhereUniqueWithoutFilesInputObjectSchema as TagValueUpdateWithWhereUniqueWithoutFilesInputObjectSchema } from './TagValueUpdateWithWhereUniqueWithoutFilesInput.schema';
import { TagValueUpdateManyWithWhereWithoutFilesInputObjectSchema as TagValueUpdateManyWithWhereWithoutFilesInputObjectSchema } from './TagValueUpdateManyWithWhereWithoutFilesInput.schema';
import { TagValueScalarWhereInputObjectSchema as TagValueScalarWhereInputObjectSchema } from './TagValueScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagValueCreateWithoutFilesInputObjectSchema), z.lazy(() => TagValueCreateWithoutFilesInputObjectSchema).array(), z.lazy(() => TagValueUncheckedCreateWithoutFilesInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutFilesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TagValueCreateOrConnectWithoutFilesInputObjectSchema), z.lazy(() => TagValueCreateOrConnectWithoutFilesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TagValueUpsertWithWhereUniqueWithoutFilesInputObjectSchema), z.lazy(() => TagValueUpsertWithWhereUniqueWithoutFilesInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TagValueUpdateWithWhereUniqueWithoutFilesInputObjectSchema), z.lazy(() => TagValueUpdateWithWhereUniqueWithoutFilesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TagValueUpdateManyWithWhereWithoutFilesInputObjectSchema), z.lazy(() => TagValueUpdateManyWithWhereWithoutFilesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TagValueScalarWhereInputObjectSchema), z.lazy(() => TagValueScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TagValueUpdateManyWithoutFilesNestedInputObjectSchema: z.ZodType<Prisma.TagValueUpdateManyWithoutFilesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpdateManyWithoutFilesNestedInput>;
export const TagValueUpdateManyWithoutFilesNestedInputObjectZodSchema = makeSchema();
