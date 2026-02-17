import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithoutGroupsInputObjectSchema as FileUpdateWithoutGroupsInputObjectSchema } from './FileUpdateWithoutGroupsInput.schema';
import { FileUncheckedUpdateWithoutGroupsInputObjectSchema as FileUncheckedUpdateWithoutGroupsInputObjectSchema } from './FileUncheckedUpdateWithoutGroupsInput.schema';
import { FileCreateWithoutGroupsInputObjectSchema as FileCreateWithoutGroupsInputObjectSchema } from './FileCreateWithoutGroupsInput.schema';
import { FileUncheckedCreateWithoutGroupsInputObjectSchema as FileUncheckedCreateWithoutGroupsInputObjectSchema } from './FileUncheckedCreateWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FileUpdateWithoutGroupsInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutGroupsInputObjectSchema)]),
  create: z.union([z.lazy(() => FileCreateWithoutGroupsInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutGroupsInputObjectSchema)])
}).strict();
export const FileUpsertWithWhereUniqueWithoutGroupsInputObjectSchema: z.ZodType<Prisma.FileUpsertWithWhereUniqueWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpsertWithWhereUniqueWithoutGroupsInput>;
export const FileUpsertWithWhereUniqueWithoutGroupsInputObjectZodSchema = makeSchema();
