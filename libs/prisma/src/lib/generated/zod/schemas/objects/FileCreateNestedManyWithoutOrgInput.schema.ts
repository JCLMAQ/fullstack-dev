import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileCreateWithoutOrgInputObjectSchema as FileCreateWithoutOrgInputObjectSchema } from './FileCreateWithoutOrgInput.schema';
import { FileUncheckedCreateWithoutOrgInputObjectSchema as FileUncheckedCreateWithoutOrgInputObjectSchema } from './FileUncheckedCreateWithoutOrgInput.schema';
import { FileCreateOrConnectWithoutOrgInputObjectSchema as FileCreateOrConnectWithoutOrgInputObjectSchema } from './FileCreateOrConnectWithoutOrgInput.schema';
import { FileCreateManyOrgInputEnvelopeObjectSchema as FileCreateManyOrgInputEnvelopeObjectSchema } from './FileCreateManyOrgInputEnvelope.schema';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FileCreateWithoutOrgInputObjectSchema), z.lazy(() => FileCreateWithoutOrgInputObjectSchema).array(), z.lazy(() => FileUncheckedCreateWithoutOrgInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutOrgInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FileCreateOrConnectWithoutOrgInputObjectSchema), z.lazy(() => FileCreateOrConnectWithoutOrgInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FileCreateManyOrgInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FileCreateNestedManyWithoutOrgInputObjectSchema: z.ZodType<Prisma.FileCreateNestedManyWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateNestedManyWithoutOrgInput>;
export const FileCreateNestedManyWithoutOrgInputObjectZodSchema = makeSchema();
