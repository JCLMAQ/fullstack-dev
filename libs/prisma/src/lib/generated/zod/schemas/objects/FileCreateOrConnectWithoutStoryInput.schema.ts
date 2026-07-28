import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileCreateWithoutStoryInputObjectSchema as FileCreateWithoutStoryInputObjectSchema } from './FileCreateWithoutStoryInput.schema';
import { FileUncheckedCreateWithoutStoryInputObjectSchema as FileUncheckedCreateWithoutStoryInputObjectSchema } from './FileUncheckedCreateWithoutStoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FileCreateWithoutStoryInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutStoryInputObjectSchema)])
}).strict();
export const FileCreateOrConnectWithoutStoryInputObjectSchema: z.ZodType<Prisma.FileCreateOrConnectWithoutStoryInput> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateOrConnectWithoutStoryInput>;
export const FileCreateOrConnectWithoutStoryInputObjectZodSchema = makeSchema();
