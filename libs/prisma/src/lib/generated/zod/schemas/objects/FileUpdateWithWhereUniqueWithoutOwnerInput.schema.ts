import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithoutOwnerInputObjectSchema as FileUpdateWithoutOwnerInputObjectSchema } from './FileUpdateWithoutOwnerInput.schema';
import { FileUncheckedUpdateWithoutOwnerInputObjectSchema as FileUncheckedUpdateWithoutOwnerInputObjectSchema } from './FileUncheckedUpdateWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FileUpdateWithoutOwnerInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutOwnerInputObjectSchema)])
}).strict();
export const FileUpdateWithWhereUniqueWithoutOwnerInputObjectSchema: z.ZodType<Prisma.FileUpdateWithWhereUniqueWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateWithWhereUniqueWithoutOwnerInput>;
export const FileUpdateWithWhereUniqueWithoutOwnerInputObjectZodSchema = makeSchema();
