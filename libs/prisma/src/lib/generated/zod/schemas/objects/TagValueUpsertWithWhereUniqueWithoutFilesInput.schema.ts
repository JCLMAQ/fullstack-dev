import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueUpdateWithoutFilesInputObjectSchema as TagValueUpdateWithoutFilesInputObjectSchema } from './TagValueUpdateWithoutFilesInput.schema';
import { TagValueUncheckedUpdateWithoutFilesInputObjectSchema as TagValueUncheckedUpdateWithoutFilesInputObjectSchema } from './TagValueUncheckedUpdateWithoutFilesInput.schema';
import { TagValueCreateWithoutFilesInputObjectSchema as TagValueCreateWithoutFilesInputObjectSchema } from './TagValueCreateWithoutFilesInput.schema';
import { TagValueUncheckedCreateWithoutFilesInputObjectSchema as TagValueUncheckedCreateWithoutFilesInputObjectSchema } from './TagValueUncheckedCreateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TagValueUpdateWithoutFilesInputObjectSchema), z.lazy(() => TagValueUncheckedUpdateWithoutFilesInputObjectSchema)]),
  create: z.union([z.lazy(() => TagValueCreateWithoutFilesInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutFilesInputObjectSchema)])
}).strict();
export const TagValueUpsertWithWhereUniqueWithoutFilesInputObjectSchema: z.ZodType<Prisma.TagValueUpsertWithWhereUniqueWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpsertWithWhereUniqueWithoutFilesInput>;
export const TagValueUpsertWithWhereUniqueWithoutFilesInputObjectZodSchema = makeSchema();
