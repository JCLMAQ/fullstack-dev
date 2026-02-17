import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueUpdateWithoutFilesInputObjectSchema as TagValueUpdateWithoutFilesInputObjectSchema } from './TagValueUpdateWithoutFilesInput.schema';
import { TagValueUncheckedUpdateWithoutFilesInputObjectSchema as TagValueUncheckedUpdateWithoutFilesInputObjectSchema } from './TagValueUncheckedUpdateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TagValueUpdateWithoutFilesInputObjectSchema), z.lazy(() => TagValueUncheckedUpdateWithoutFilesInputObjectSchema)])
}).strict();
export const TagValueUpdateWithWhereUniqueWithoutFilesInputObjectSchema: z.ZodType<Prisma.TagValueUpdateWithWhereUniqueWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpdateWithWhereUniqueWithoutFilesInput>;
export const TagValueUpdateWithWhereUniqueWithoutFilesInputObjectZodSchema = makeSchema();
