import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { FileCreateWithoutGroupsInputObjectSchema as FileCreateWithoutGroupsInputObjectSchema } from './FileCreateWithoutGroupsInput.schema';
import { FileUncheckedCreateWithoutGroupsInputObjectSchema as FileUncheckedCreateWithoutGroupsInputObjectSchema } from './FileUncheckedCreateWithoutGroupsInput.schema';
import { FileCreateOrConnectWithoutGroupsInputObjectSchema as FileCreateOrConnectWithoutGroupsInputObjectSchema } from './FileCreateOrConnectWithoutGroupsInput.schema';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FileCreateWithoutGroupsInputObjectSchema), z.lazy(() => FileCreateWithoutGroupsInputObjectSchema).array(), z.lazy(() => FileUncheckedCreateWithoutGroupsInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutGroupsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FileCreateOrConnectWithoutGroupsInputObjectSchema), z.lazy(() => FileCreateOrConnectWithoutGroupsInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FileUncheckedCreateNestedManyWithoutGroupsInputObjectSchema: z.ZodType<Prisma.FileUncheckedCreateNestedManyWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUncheckedCreateNestedManyWithoutGroupsInput>;
export const FileUncheckedCreateNestedManyWithoutGroupsInputObjectZodSchema = makeSchema();
