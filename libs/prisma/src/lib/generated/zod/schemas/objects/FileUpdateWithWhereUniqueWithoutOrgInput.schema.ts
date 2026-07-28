import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithoutOrgInputObjectSchema as FileUpdateWithoutOrgInputObjectSchema } from './FileUpdateWithoutOrgInput.schema';
import { FileUncheckedUpdateWithoutOrgInputObjectSchema as FileUncheckedUpdateWithoutOrgInputObjectSchema } from './FileUncheckedUpdateWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FileUpdateWithoutOrgInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutOrgInputObjectSchema)])
}).strict();
export const FileUpdateWithWhereUniqueWithoutOrgInputObjectSchema: z.ZodType<Prisma.FileUpdateWithWhereUniqueWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateWithWhereUniqueWithoutOrgInput>;
export const FileUpdateWithWhereUniqueWithoutOrgInputObjectZodSchema = makeSchema();
