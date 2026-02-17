import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileCreateWithoutTagsInputObjectSchema as FileCreateWithoutTagsInputObjectSchema } from './FileCreateWithoutTagsInput.schema';
import { FileUncheckedCreateWithoutTagsInputObjectSchema as FileUncheckedCreateWithoutTagsInputObjectSchema } from './FileUncheckedCreateWithoutTagsInput.schema';
import { FileCreateOrConnectWithoutTagsInputObjectSchema as FileCreateOrConnectWithoutTagsInputObjectSchema } from './FileCreateOrConnectWithoutTagsInput.schema';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FileCreateWithoutTagsInputObjectSchema), z.lazy(() => FileCreateWithoutTagsInputObjectSchema).array(), z.lazy(() => FileUncheckedCreateWithoutTagsInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutTagsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FileCreateOrConnectWithoutTagsInputObjectSchema), z.lazy(() => FileCreateOrConnectWithoutTagsInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FileCreateNestedManyWithoutTagsInputObjectSchema: z.ZodType<Prisma.FileCreateNestedManyWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateNestedManyWithoutTagsInput>;
export const FileCreateNestedManyWithoutTagsInputObjectZodSchema = makeSchema();
