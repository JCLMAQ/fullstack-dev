import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupCreateWithoutFilesInputObjectSchema as GroupCreateWithoutFilesInputObjectSchema } from './GroupCreateWithoutFilesInput.schema';
import { GroupUncheckedCreateWithoutFilesInputObjectSchema as GroupUncheckedCreateWithoutFilesInputObjectSchema } from './GroupUncheckedCreateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GroupCreateWithoutFilesInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutFilesInputObjectSchema)])
}).strict();
export const GroupCreateOrConnectWithoutFilesInputObjectSchema: z.ZodType<Prisma.GroupCreateOrConnectWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupCreateOrConnectWithoutFilesInput>;
export const GroupCreateOrConnectWithoutFilesInputObjectZodSchema = makeSchema();
