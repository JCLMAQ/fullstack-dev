import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { FileCreateWithoutOwnerInputObjectSchema as FileCreateWithoutOwnerInputObjectSchema } from './FileCreateWithoutOwnerInput.schema';
import { FileUncheckedCreateWithoutOwnerInputObjectSchema as FileUncheckedCreateWithoutOwnerInputObjectSchema } from './FileUncheckedCreateWithoutOwnerInput.schema';
import { FileCreateOrConnectWithoutOwnerInputObjectSchema as FileCreateOrConnectWithoutOwnerInputObjectSchema } from './FileCreateOrConnectWithoutOwnerInput.schema';
import { FileCreateManyOwnerInputEnvelopeObjectSchema as FileCreateManyOwnerInputEnvelopeObjectSchema } from './FileCreateManyOwnerInputEnvelope.schema';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FileCreateWithoutOwnerInputObjectSchema), z.lazy(() => FileCreateWithoutOwnerInputObjectSchema).array(), z.lazy(() => FileUncheckedCreateWithoutOwnerInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutOwnerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FileCreateOrConnectWithoutOwnerInputObjectSchema), z.lazy(() => FileCreateOrConnectWithoutOwnerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FileCreateManyOwnerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FileUncheckedCreateNestedManyWithoutOwnerInputObjectSchema: z.ZodType<Prisma.FileUncheckedCreateNestedManyWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUncheckedCreateNestedManyWithoutOwnerInput>;
export const FileUncheckedCreateNestedManyWithoutOwnerInputObjectZodSchema = makeSchema();
