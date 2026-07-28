import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupUpdateWithoutFilesInputObjectSchema as GroupUpdateWithoutFilesInputObjectSchema } from './GroupUpdateWithoutFilesInput.schema';
import { GroupUncheckedUpdateWithoutFilesInputObjectSchema as GroupUncheckedUpdateWithoutFilesInputObjectSchema } from './GroupUncheckedUpdateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => GroupUpdateWithoutFilesInputObjectSchema), z.lazy(() => GroupUncheckedUpdateWithoutFilesInputObjectSchema)])
}).strict();
export const GroupUpdateWithWhereUniqueWithoutFilesInputObjectSchema: z.ZodType<Prisma.GroupUpdateWithWhereUniqueWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpdateWithWhereUniqueWithoutFilesInput>;
export const GroupUpdateWithWhereUniqueWithoutFilesInputObjectZodSchema = makeSchema();
