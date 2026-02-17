import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithoutOrgInputObjectSchema as FileUpdateWithoutOrgInputObjectSchema } from './FileUpdateWithoutOrgInput.schema';
import { FileUncheckedUpdateWithoutOrgInputObjectSchema as FileUncheckedUpdateWithoutOrgInputObjectSchema } from './FileUncheckedUpdateWithoutOrgInput.schema';
import { FileCreateWithoutOrgInputObjectSchema as FileCreateWithoutOrgInputObjectSchema } from './FileCreateWithoutOrgInput.schema';
import { FileUncheckedCreateWithoutOrgInputObjectSchema as FileUncheckedCreateWithoutOrgInputObjectSchema } from './FileUncheckedCreateWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FileUpdateWithoutOrgInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutOrgInputObjectSchema)]),
  create: z.union([z.lazy(() => FileCreateWithoutOrgInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutOrgInputObjectSchema)])
}).strict();
export const FileUpsertWithWhereUniqueWithoutOrgInputObjectSchema: z.ZodType<Prisma.FileUpsertWithWhereUniqueWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpsertWithWhereUniqueWithoutOrgInput>;
export const FileUpsertWithWhereUniqueWithoutOrgInputObjectZodSchema = makeSchema();
