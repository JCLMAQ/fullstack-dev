import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupUpdateWithoutFilesInputObjectSchema as GroupUpdateWithoutFilesInputObjectSchema } from './GroupUpdateWithoutFilesInput.schema';
import { GroupUncheckedUpdateWithoutFilesInputObjectSchema as GroupUncheckedUpdateWithoutFilesInputObjectSchema } from './GroupUncheckedUpdateWithoutFilesInput.schema';
import { GroupCreateWithoutFilesInputObjectSchema as GroupCreateWithoutFilesInputObjectSchema } from './GroupCreateWithoutFilesInput.schema';
import { GroupUncheckedCreateWithoutFilesInputObjectSchema as GroupUncheckedCreateWithoutFilesInputObjectSchema } from './GroupUncheckedCreateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => GroupUpdateWithoutFilesInputObjectSchema), z.lazy(() => GroupUncheckedUpdateWithoutFilesInputObjectSchema)]),
  create: z.union([z.lazy(() => GroupCreateWithoutFilesInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutFilesInputObjectSchema)])
}).strict();
export const GroupUpsertWithWhereUniqueWithoutFilesInputObjectSchema: z.ZodType<Prisma.GroupUpsertWithWhereUniqueWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpsertWithWhereUniqueWithoutFilesInput>;
export const GroupUpsertWithWhereUniqueWithoutFilesInputObjectZodSchema = makeSchema();
