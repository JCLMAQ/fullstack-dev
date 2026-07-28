import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { FileCreateWithoutOrgInputObjectSchema as FileCreateWithoutOrgInputObjectSchema } from './FileCreateWithoutOrgInput.schema';
import { FileUncheckedCreateWithoutOrgInputObjectSchema as FileUncheckedCreateWithoutOrgInputObjectSchema } from './FileUncheckedCreateWithoutOrgInput.schema';
import { FileCreateOrConnectWithoutOrgInputObjectSchema as FileCreateOrConnectWithoutOrgInputObjectSchema } from './FileCreateOrConnectWithoutOrgInput.schema';
import { FileUpsertWithWhereUniqueWithoutOrgInputObjectSchema as FileUpsertWithWhereUniqueWithoutOrgInputObjectSchema } from './FileUpsertWithWhereUniqueWithoutOrgInput.schema';
import { FileCreateManyOrgInputEnvelopeObjectSchema as FileCreateManyOrgInputEnvelopeObjectSchema } from './FileCreateManyOrgInputEnvelope.schema';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithWhereUniqueWithoutOrgInputObjectSchema as FileUpdateWithWhereUniqueWithoutOrgInputObjectSchema } from './FileUpdateWithWhereUniqueWithoutOrgInput.schema';
import { FileUpdateManyWithWhereWithoutOrgInputObjectSchema as FileUpdateManyWithWhereWithoutOrgInputObjectSchema } from './FileUpdateManyWithWhereWithoutOrgInput.schema';
import { FileScalarWhereInputObjectSchema as FileScalarWhereInputObjectSchema } from './FileScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FileCreateWithoutOrgInputObjectSchema), z.lazy(() => FileCreateWithoutOrgInputObjectSchema).array(), z.lazy(() => FileUncheckedCreateWithoutOrgInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutOrgInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FileCreateOrConnectWithoutOrgInputObjectSchema), z.lazy(() => FileCreateOrConnectWithoutOrgInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FileUpsertWithWhereUniqueWithoutOrgInputObjectSchema), z.lazy(() => FileUpsertWithWhereUniqueWithoutOrgInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FileCreateManyOrgInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FileUpdateWithWhereUniqueWithoutOrgInputObjectSchema), z.lazy(() => FileUpdateWithWhereUniqueWithoutOrgInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FileUpdateManyWithWhereWithoutOrgInputObjectSchema), z.lazy(() => FileUpdateManyWithWhereWithoutOrgInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FileScalarWhereInputObjectSchema), z.lazy(() => FileScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FileUpdateManyWithoutOrgNestedInputObjectSchema: z.ZodType<Prisma.FileUpdateManyWithoutOrgNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateManyWithoutOrgNestedInput>;
export const FileUpdateManyWithoutOrgNestedInputObjectZodSchema = makeSchema();
