import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithoutOwnerInputObjectSchema as FileUpdateWithoutOwnerInputObjectSchema } from './FileUpdateWithoutOwnerInput.schema';
import { FileUncheckedUpdateWithoutOwnerInputObjectSchema as FileUncheckedUpdateWithoutOwnerInputObjectSchema } from './FileUncheckedUpdateWithoutOwnerInput.schema';
import { FileCreateWithoutOwnerInputObjectSchema as FileCreateWithoutOwnerInputObjectSchema } from './FileCreateWithoutOwnerInput.schema';
import { FileUncheckedCreateWithoutOwnerInputObjectSchema as FileUncheckedCreateWithoutOwnerInputObjectSchema } from './FileUncheckedCreateWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FileUpdateWithoutOwnerInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutOwnerInputObjectSchema)]),
  create: z.union([z.lazy(() => FileCreateWithoutOwnerInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutOwnerInputObjectSchema)])
}).strict();
export const FileUpsertWithWhereUniqueWithoutOwnerInputObjectSchema: z.ZodType<Prisma.FileUpsertWithWhereUniqueWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpsertWithWhereUniqueWithoutOwnerInput>;
export const FileUpsertWithWhereUniqueWithoutOwnerInputObjectZodSchema = makeSchema();
