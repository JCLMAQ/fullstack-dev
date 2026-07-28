import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithoutProfileUserInputObjectSchema as FileUpdateWithoutProfileUserInputObjectSchema } from './FileUpdateWithoutProfileUserInput.schema';
import { FileUncheckedUpdateWithoutProfileUserInputObjectSchema as FileUncheckedUpdateWithoutProfileUserInputObjectSchema } from './FileUncheckedUpdateWithoutProfileUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FileUpdateWithoutProfileUserInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutProfileUserInputObjectSchema)])
}).strict();
export const FileUpdateWithWhereUniqueWithoutProfileUserInputObjectSchema: z.ZodType<Prisma.FileUpdateWithWhereUniqueWithoutProfileUserInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateWithWhereUniqueWithoutProfileUserInput>;
export const FileUpdateWithWhereUniqueWithoutProfileUserInputObjectZodSchema = makeSchema();
