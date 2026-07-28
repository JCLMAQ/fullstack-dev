import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { FileCreateWithoutStoryInputObjectSchema as FileCreateWithoutStoryInputObjectSchema } from './FileCreateWithoutStoryInput.schema';
import { FileUncheckedCreateWithoutStoryInputObjectSchema as FileUncheckedCreateWithoutStoryInputObjectSchema } from './FileUncheckedCreateWithoutStoryInput.schema';
import { FileCreateOrConnectWithoutStoryInputObjectSchema as FileCreateOrConnectWithoutStoryInputObjectSchema } from './FileCreateOrConnectWithoutStoryInput.schema';
import { FileCreateManyStoryInputEnvelopeObjectSchema as FileCreateManyStoryInputEnvelopeObjectSchema } from './FileCreateManyStoryInputEnvelope.schema';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FileCreateWithoutStoryInputObjectSchema), z.lazy(() => FileCreateWithoutStoryInputObjectSchema).array(), z.lazy(() => FileUncheckedCreateWithoutStoryInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutStoryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FileCreateOrConnectWithoutStoryInputObjectSchema), z.lazy(() => FileCreateOrConnectWithoutStoryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FileCreateManyStoryInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FileUncheckedCreateNestedManyWithoutStoryInputObjectSchema: z.ZodType<Prisma.FileUncheckedCreateNestedManyWithoutStoryInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUncheckedCreateNestedManyWithoutStoryInput>;
export const FileUncheckedCreateNestedManyWithoutStoryInputObjectZodSchema = makeSchema();
