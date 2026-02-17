import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithoutGroupsInputObjectSchema as FileUpdateWithoutGroupsInputObjectSchema } from './FileUpdateWithoutGroupsInput.schema';
import { FileUncheckedUpdateWithoutGroupsInputObjectSchema as FileUncheckedUpdateWithoutGroupsInputObjectSchema } from './FileUncheckedUpdateWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FileUpdateWithoutGroupsInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutGroupsInputObjectSchema)])
}).strict();
export const FileUpdateWithWhereUniqueWithoutGroupsInputObjectSchema: z.ZodType<Prisma.FileUpdateWithWhereUniqueWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateWithWhereUniqueWithoutGroupsInput>;
export const FileUpdateWithWhereUniqueWithoutGroupsInputObjectZodSchema = makeSchema();
