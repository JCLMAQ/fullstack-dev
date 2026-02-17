import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithoutProfileUserInputObjectSchema as FileUpdateWithoutProfileUserInputObjectSchema } from './FileUpdateWithoutProfileUserInput.schema';
import { FileUncheckedUpdateWithoutProfileUserInputObjectSchema as FileUncheckedUpdateWithoutProfileUserInputObjectSchema } from './FileUncheckedUpdateWithoutProfileUserInput.schema';
import { FileCreateWithoutProfileUserInputObjectSchema as FileCreateWithoutProfileUserInputObjectSchema } from './FileCreateWithoutProfileUserInput.schema';
import { FileUncheckedCreateWithoutProfileUserInputObjectSchema as FileUncheckedCreateWithoutProfileUserInputObjectSchema } from './FileUncheckedCreateWithoutProfileUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FileUpdateWithoutProfileUserInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutProfileUserInputObjectSchema)]),
  create: z.union([z.lazy(() => FileCreateWithoutProfileUserInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutProfileUserInputObjectSchema)])
}).strict();
export const FileUpsertWithWhereUniqueWithoutProfileUserInputObjectSchema: z.ZodType<Prisma.FileUpsertWithWhereUniqueWithoutProfileUserInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpsertWithWhereUniqueWithoutProfileUserInput>;
export const FileUpsertWithWhereUniqueWithoutProfileUserInputObjectZodSchema = makeSchema();
