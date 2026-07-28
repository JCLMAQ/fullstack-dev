import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileCreateWithoutProfileUserInputObjectSchema as FileCreateWithoutProfileUserInputObjectSchema } from './FileCreateWithoutProfileUserInput.schema';
import { FileUncheckedCreateWithoutProfileUserInputObjectSchema as FileUncheckedCreateWithoutProfileUserInputObjectSchema } from './FileUncheckedCreateWithoutProfileUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FileCreateWithoutProfileUserInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutProfileUserInputObjectSchema)])
}).strict();
export const FileCreateOrConnectWithoutProfileUserInputObjectSchema: z.ZodType<Prisma.FileCreateOrConnectWithoutProfileUserInput> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateOrConnectWithoutProfileUserInput>;
export const FileCreateOrConnectWithoutProfileUserInputObjectZodSchema = makeSchema();
