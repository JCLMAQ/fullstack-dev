import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileCreateWithoutProfileUserInputObjectSchema as FileCreateWithoutProfileUserInputObjectSchema } from './FileCreateWithoutProfileUserInput.schema';
import { FileUncheckedCreateWithoutProfileUserInputObjectSchema as FileUncheckedCreateWithoutProfileUserInputObjectSchema } from './FileUncheckedCreateWithoutProfileUserInput.schema';
import { FileCreateOrConnectWithoutProfileUserInputObjectSchema as FileCreateOrConnectWithoutProfileUserInputObjectSchema } from './FileCreateOrConnectWithoutProfileUserInput.schema';
import { FileUpsertWithWhereUniqueWithoutProfileUserInputObjectSchema as FileUpsertWithWhereUniqueWithoutProfileUserInputObjectSchema } from './FileUpsertWithWhereUniqueWithoutProfileUserInput.schema';
import { FileCreateManyProfileUserInputEnvelopeObjectSchema as FileCreateManyProfileUserInputEnvelopeObjectSchema } from './FileCreateManyProfileUserInputEnvelope.schema';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithWhereUniqueWithoutProfileUserInputObjectSchema as FileUpdateWithWhereUniqueWithoutProfileUserInputObjectSchema } from './FileUpdateWithWhereUniqueWithoutProfileUserInput.schema';
import { FileUpdateManyWithWhereWithoutProfileUserInputObjectSchema as FileUpdateManyWithWhereWithoutProfileUserInputObjectSchema } from './FileUpdateManyWithWhereWithoutProfileUserInput.schema';
import { FileScalarWhereInputObjectSchema as FileScalarWhereInputObjectSchema } from './FileScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FileCreateWithoutProfileUserInputObjectSchema), z.lazy(() => FileCreateWithoutProfileUserInputObjectSchema).array(), z.lazy(() => FileUncheckedCreateWithoutProfileUserInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutProfileUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FileCreateOrConnectWithoutProfileUserInputObjectSchema), z.lazy(() => FileCreateOrConnectWithoutProfileUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FileUpsertWithWhereUniqueWithoutProfileUserInputObjectSchema), z.lazy(() => FileUpsertWithWhereUniqueWithoutProfileUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FileCreateManyProfileUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FileUpdateWithWhereUniqueWithoutProfileUserInputObjectSchema), z.lazy(() => FileUpdateWithWhereUniqueWithoutProfileUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FileUpdateManyWithWhereWithoutProfileUserInputObjectSchema), z.lazy(() => FileUpdateManyWithWhereWithoutProfileUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FileScalarWhereInputObjectSchema), z.lazy(() => FileScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FileUpdateManyWithoutProfileUserNestedInputObjectSchema: z.ZodType<Prisma.FileUpdateManyWithoutProfileUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateManyWithoutProfileUserNestedInput>;
export const FileUpdateManyWithoutProfileUserNestedInputObjectZodSchema = makeSchema();
