import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { FileCreateWithoutOwnerInputObjectSchema as FileCreateWithoutOwnerInputObjectSchema } from './FileCreateWithoutOwnerInput.schema';
import { FileUncheckedCreateWithoutOwnerInputObjectSchema as FileUncheckedCreateWithoutOwnerInputObjectSchema } from './FileUncheckedCreateWithoutOwnerInput.schema';
import { FileCreateOrConnectWithoutOwnerInputObjectSchema as FileCreateOrConnectWithoutOwnerInputObjectSchema } from './FileCreateOrConnectWithoutOwnerInput.schema';
import { FileUpsertWithWhereUniqueWithoutOwnerInputObjectSchema as FileUpsertWithWhereUniqueWithoutOwnerInputObjectSchema } from './FileUpsertWithWhereUniqueWithoutOwnerInput.schema';
import { FileCreateManyOwnerInputEnvelopeObjectSchema as FileCreateManyOwnerInputEnvelopeObjectSchema } from './FileCreateManyOwnerInputEnvelope.schema';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithWhereUniqueWithoutOwnerInputObjectSchema as FileUpdateWithWhereUniqueWithoutOwnerInputObjectSchema } from './FileUpdateWithWhereUniqueWithoutOwnerInput.schema';
import { FileUpdateManyWithWhereWithoutOwnerInputObjectSchema as FileUpdateManyWithWhereWithoutOwnerInputObjectSchema } from './FileUpdateManyWithWhereWithoutOwnerInput.schema';
import { FileScalarWhereInputObjectSchema as FileScalarWhereInputObjectSchema } from './FileScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FileCreateWithoutOwnerInputObjectSchema), z.lazy(() => FileCreateWithoutOwnerInputObjectSchema).array(), z.lazy(() => FileUncheckedCreateWithoutOwnerInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutOwnerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FileCreateOrConnectWithoutOwnerInputObjectSchema), z.lazy(() => FileCreateOrConnectWithoutOwnerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FileUpsertWithWhereUniqueWithoutOwnerInputObjectSchema), z.lazy(() => FileUpsertWithWhereUniqueWithoutOwnerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FileCreateManyOwnerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FileUpdateWithWhereUniqueWithoutOwnerInputObjectSchema), z.lazy(() => FileUpdateWithWhereUniqueWithoutOwnerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FileUpdateManyWithWhereWithoutOwnerInputObjectSchema), z.lazy(() => FileUpdateManyWithWhereWithoutOwnerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FileScalarWhereInputObjectSchema), z.lazy(() => FileScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FileUpdateManyWithoutOwnerNestedInputObjectSchema: z.ZodType<Prisma.FileUpdateManyWithoutOwnerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateManyWithoutOwnerNestedInput>;
export const FileUpdateManyWithoutOwnerNestedInputObjectZodSchema = makeSchema();
