import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileCreateWithoutTagsInputObjectSchema as FileCreateWithoutTagsInputObjectSchema } from './FileCreateWithoutTagsInput.schema';
import { FileUncheckedCreateWithoutTagsInputObjectSchema as FileUncheckedCreateWithoutTagsInputObjectSchema } from './FileUncheckedCreateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FileCreateWithoutTagsInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutTagsInputObjectSchema)])
}).strict();
export const FileCreateOrConnectWithoutTagsInputObjectSchema: z.ZodType<Prisma.FileCreateOrConnectWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateOrConnectWithoutTagsInput>;
export const FileCreateOrConnectWithoutTagsInputObjectZodSchema = makeSchema();
