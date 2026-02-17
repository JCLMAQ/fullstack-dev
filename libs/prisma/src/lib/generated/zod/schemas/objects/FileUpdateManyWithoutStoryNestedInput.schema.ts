import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileCreateWithoutStoryInputObjectSchema as FileCreateWithoutStoryInputObjectSchema } from './FileCreateWithoutStoryInput.schema';
import { FileUncheckedCreateWithoutStoryInputObjectSchema as FileUncheckedCreateWithoutStoryInputObjectSchema } from './FileUncheckedCreateWithoutStoryInput.schema';
import { FileCreateOrConnectWithoutStoryInputObjectSchema as FileCreateOrConnectWithoutStoryInputObjectSchema } from './FileCreateOrConnectWithoutStoryInput.schema';
import { FileUpsertWithWhereUniqueWithoutStoryInputObjectSchema as FileUpsertWithWhereUniqueWithoutStoryInputObjectSchema } from './FileUpsertWithWhereUniqueWithoutStoryInput.schema';
import { FileCreateManyStoryInputEnvelopeObjectSchema as FileCreateManyStoryInputEnvelopeObjectSchema } from './FileCreateManyStoryInputEnvelope.schema';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithWhereUniqueWithoutStoryInputObjectSchema as FileUpdateWithWhereUniqueWithoutStoryInputObjectSchema } from './FileUpdateWithWhereUniqueWithoutStoryInput.schema';
import { FileUpdateManyWithWhereWithoutStoryInputObjectSchema as FileUpdateManyWithWhereWithoutStoryInputObjectSchema } from './FileUpdateManyWithWhereWithoutStoryInput.schema';
import { FileScalarWhereInputObjectSchema as FileScalarWhereInputObjectSchema } from './FileScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FileCreateWithoutStoryInputObjectSchema), z.lazy(() => FileCreateWithoutStoryInputObjectSchema).array(), z.lazy(() => FileUncheckedCreateWithoutStoryInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutStoryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FileCreateOrConnectWithoutStoryInputObjectSchema), z.lazy(() => FileCreateOrConnectWithoutStoryInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FileUpsertWithWhereUniqueWithoutStoryInputObjectSchema), z.lazy(() => FileUpsertWithWhereUniqueWithoutStoryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FileCreateManyStoryInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FileUpdateWithWhereUniqueWithoutStoryInputObjectSchema), z.lazy(() => FileUpdateWithWhereUniqueWithoutStoryInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FileUpdateManyWithWhereWithoutStoryInputObjectSchema), z.lazy(() => FileUpdateManyWithWhereWithoutStoryInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FileScalarWhereInputObjectSchema), z.lazy(() => FileScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FileUpdateManyWithoutStoryNestedInputObjectSchema: z.ZodType<Prisma.FileUpdateManyWithoutStoryNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateManyWithoutStoryNestedInput>;
export const FileUpdateManyWithoutStoryNestedInputObjectZodSchema = makeSchema();
