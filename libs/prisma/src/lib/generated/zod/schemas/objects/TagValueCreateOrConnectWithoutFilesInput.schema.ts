import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueCreateWithoutFilesInputObjectSchema as TagValueCreateWithoutFilesInputObjectSchema } from './TagValueCreateWithoutFilesInput.schema';
import { TagValueUncheckedCreateWithoutFilesInputObjectSchema as TagValueUncheckedCreateWithoutFilesInputObjectSchema } from './TagValueUncheckedCreateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TagValueCreateWithoutFilesInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutFilesInputObjectSchema)])
}).strict();
export const TagValueCreateOrConnectWithoutFilesInputObjectSchema: z.ZodType<Prisma.TagValueCreateOrConnectWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueCreateOrConnectWithoutFilesInput>;
export const TagValueCreateOrConnectWithoutFilesInputObjectZodSchema = makeSchema();
