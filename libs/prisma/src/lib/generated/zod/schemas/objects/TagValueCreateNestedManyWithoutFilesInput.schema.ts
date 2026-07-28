import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueCreateWithoutFilesInputObjectSchema as TagValueCreateWithoutFilesInputObjectSchema } from './TagValueCreateWithoutFilesInput.schema';
import { TagValueUncheckedCreateWithoutFilesInputObjectSchema as TagValueUncheckedCreateWithoutFilesInputObjectSchema } from './TagValueUncheckedCreateWithoutFilesInput.schema';
import { TagValueCreateOrConnectWithoutFilesInputObjectSchema as TagValueCreateOrConnectWithoutFilesInputObjectSchema } from './TagValueCreateOrConnectWithoutFilesInput.schema';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagValueCreateWithoutFilesInputObjectSchema), z.lazy(() => TagValueCreateWithoutFilesInputObjectSchema).array(), z.lazy(() => TagValueUncheckedCreateWithoutFilesInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutFilesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TagValueCreateOrConnectWithoutFilesInputObjectSchema), z.lazy(() => TagValueCreateOrConnectWithoutFilesInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TagValueCreateNestedManyWithoutFilesInputObjectSchema: z.ZodType<Prisma.TagValueCreateNestedManyWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueCreateNestedManyWithoutFilesInput>;
export const TagValueCreateNestedManyWithoutFilesInputObjectZodSchema = makeSchema();
