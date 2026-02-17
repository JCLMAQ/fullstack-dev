import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupCreateWithoutPostsInputObjectSchema as GroupCreateWithoutPostsInputObjectSchema } from './GroupCreateWithoutPostsInput.schema';
import { GroupUncheckedCreateWithoutPostsInputObjectSchema as GroupUncheckedCreateWithoutPostsInputObjectSchema } from './GroupUncheckedCreateWithoutPostsInput.schema';
import { GroupCreateOrConnectWithoutPostsInputObjectSchema as GroupCreateOrConnectWithoutPostsInputObjectSchema } from './GroupCreateOrConnectWithoutPostsInput.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GroupCreateWithoutPostsInputObjectSchema), z.lazy(() => GroupCreateWithoutPostsInputObjectSchema).array(), z.lazy(() => GroupUncheckedCreateWithoutPostsInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutPostsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GroupCreateOrConnectWithoutPostsInputObjectSchema), z.lazy(() => GroupCreateOrConnectWithoutPostsInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const GroupCreateNestedManyWithoutPostsInputObjectSchema: z.ZodType<Prisma.GroupCreateNestedManyWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupCreateNestedManyWithoutPostsInput>;
export const GroupCreateNestedManyWithoutPostsInputObjectZodSchema = makeSchema();
