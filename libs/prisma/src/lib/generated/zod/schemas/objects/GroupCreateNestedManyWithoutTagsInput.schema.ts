import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupCreateWithoutTagsInputObjectSchema as GroupCreateWithoutTagsInputObjectSchema } from './GroupCreateWithoutTagsInput.schema';
import { GroupUncheckedCreateWithoutTagsInputObjectSchema as GroupUncheckedCreateWithoutTagsInputObjectSchema } from './GroupUncheckedCreateWithoutTagsInput.schema';
import { GroupCreateOrConnectWithoutTagsInputObjectSchema as GroupCreateOrConnectWithoutTagsInputObjectSchema } from './GroupCreateOrConnectWithoutTagsInput.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GroupCreateWithoutTagsInputObjectSchema), z.lazy(() => GroupCreateWithoutTagsInputObjectSchema).array(), z.lazy(() => GroupUncheckedCreateWithoutTagsInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutTagsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GroupCreateOrConnectWithoutTagsInputObjectSchema), z.lazy(() => GroupCreateOrConnectWithoutTagsInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const GroupCreateNestedManyWithoutTagsInputObjectSchema: z.ZodType<Prisma.GroupCreateNestedManyWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupCreateNestedManyWithoutTagsInput>;
export const GroupCreateNestedManyWithoutTagsInputObjectZodSchema = makeSchema();
