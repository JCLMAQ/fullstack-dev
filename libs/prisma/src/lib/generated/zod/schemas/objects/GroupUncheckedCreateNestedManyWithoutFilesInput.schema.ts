import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupCreateWithoutFilesInputObjectSchema as GroupCreateWithoutFilesInputObjectSchema } from './GroupCreateWithoutFilesInput.schema';
import { GroupUncheckedCreateWithoutFilesInputObjectSchema as GroupUncheckedCreateWithoutFilesInputObjectSchema } from './GroupUncheckedCreateWithoutFilesInput.schema';
import { GroupCreateOrConnectWithoutFilesInputObjectSchema as GroupCreateOrConnectWithoutFilesInputObjectSchema } from './GroupCreateOrConnectWithoutFilesInput.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GroupCreateWithoutFilesInputObjectSchema), z.lazy(() => GroupCreateWithoutFilesInputObjectSchema).array(), z.lazy(() => GroupUncheckedCreateWithoutFilesInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutFilesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GroupCreateOrConnectWithoutFilesInputObjectSchema), z.lazy(() => GroupCreateOrConnectWithoutFilesInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const GroupUncheckedCreateNestedManyWithoutFilesInputObjectSchema: z.ZodType<Prisma.GroupUncheckedCreateNestedManyWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUncheckedCreateNestedManyWithoutFilesInput>;
export const GroupUncheckedCreateNestedManyWithoutFilesInputObjectZodSchema = makeSchema();
