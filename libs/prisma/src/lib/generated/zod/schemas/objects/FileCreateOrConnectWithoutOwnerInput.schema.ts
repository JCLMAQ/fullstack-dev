import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileCreateWithoutOwnerInputObjectSchema as FileCreateWithoutOwnerInputObjectSchema } from './FileCreateWithoutOwnerInput.schema';
import { FileUncheckedCreateWithoutOwnerInputObjectSchema as FileUncheckedCreateWithoutOwnerInputObjectSchema } from './FileUncheckedCreateWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FileCreateWithoutOwnerInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutOwnerInputObjectSchema)])
}).strict();
export const FileCreateOrConnectWithoutOwnerInputObjectSchema: z.ZodType<Prisma.FileCreateOrConnectWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateOrConnectWithoutOwnerInput>;
export const FileCreateOrConnectWithoutOwnerInputObjectZodSchema = makeSchema();
