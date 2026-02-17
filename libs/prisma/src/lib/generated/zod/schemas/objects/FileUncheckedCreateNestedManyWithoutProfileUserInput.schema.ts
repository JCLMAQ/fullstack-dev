import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileCreateWithoutProfileUserInputObjectSchema as FileCreateWithoutProfileUserInputObjectSchema } from './FileCreateWithoutProfileUserInput.schema';
import { FileUncheckedCreateWithoutProfileUserInputObjectSchema as FileUncheckedCreateWithoutProfileUserInputObjectSchema } from './FileUncheckedCreateWithoutProfileUserInput.schema';
import { FileCreateOrConnectWithoutProfileUserInputObjectSchema as FileCreateOrConnectWithoutProfileUserInputObjectSchema } from './FileCreateOrConnectWithoutProfileUserInput.schema';
import { FileCreateManyProfileUserInputEnvelopeObjectSchema as FileCreateManyProfileUserInputEnvelopeObjectSchema } from './FileCreateManyProfileUserInputEnvelope.schema';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FileCreateWithoutProfileUserInputObjectSchema), z.lazy(() => FileCreateWithoutProfileUserInputObjectSchema).array(), z.lazy(() => FileUncheckedCreateWithoutProfileUserInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutProfileUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FileCreateOrConnectWithoutProfileUserInputObjectSchema), z.lazy(() => FileCreateOrConnectWithoutProfileUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FileCreateManyProfileUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FileUncheckedCreateNestedManyWithoutProfileUserInputObjectSchema: z.ZodType<Prisma.FileUncheckedCreateNestedManyWithoutProfileUserInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUncheckedCreateNestedManyWithoutProfileUserInput>;
export const FileUncheckedCreateNestedManyWithoutProfileUserInputObjectZodSchema = makeSchema();
