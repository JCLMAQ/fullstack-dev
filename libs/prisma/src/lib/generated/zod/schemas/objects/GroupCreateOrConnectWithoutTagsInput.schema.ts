import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupCreateWithoutTagsInputObjectSchema as GroupCreateWithoutTagsInputObjectSchema } from './GroupCreateWithoutTagsInput.schema';
import { GroupUncheckedCreateWithoutTagsInputObjectSchema as GroupUncheckedCreateWithoutTagsInputObjectSchema } from './GroupUncheckedCreateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GroupCreateWithoutTagsInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutTagsInputObjectSchema)])
}).strict();
export const GroupCreateOrConnectWithoutTagsInputObjectSchema: z.ZodType<Prisma.GroupCreateOrConnectWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupCreateOrConnectWithoutTagsInput>;
export const GroupCreateOrConnectWithoutTagsInputObjectZodSchema = makeSchema();
