import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileCreateWithoutGroupsInputObjectSchema as FileCreateWithoutGroupsInputObjectSchema } from './FileCreateWithoutGroupsInput.schema';
import { FileUncheckedCreateWithoutGroupsInputObjectSchema as FileUncheckedCreateWithoutGroupsInputObjectSchema } from './FileUncheckedCreateWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FileCreateWithoutGroupsInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutGroupsInputObjectSchema)])
}).strict();
export const FileCreateOrConnectWithoutGroupsInputObjectSchema: z.ZodType<Prisma.FileCreateOrConnectWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateOrConnectWithoutGroupsInput>;
export const FileCreateOrConnectWithoutGroupsInputObjectZodSchema = makeSchema();
