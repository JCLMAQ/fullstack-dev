import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupCreateWithoutPostsInputObjectSchema as GroupCreateWithoutPostsInputObjectSchema } from './GroupCreateWithoutPostsInput.schema';
import { GroupUncheckedCreateWithoutPostsInputObjectSchema as GroupUncheckedCreateWithoutPostsInputObjectSchema } from './GroupUncheckedCreateWithoutPostsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GroupCreateWithoutPostsInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutPostsInputObjectSchema)])
}).strict();
export const GroupCreateOrConnectWithoutPostsInputObjectSchema: z.ZodType<Prisma.GroupCreateOrConnectWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupCreateOrConnectWithoutPostsInput>;
export const GroupCreateOrConnectWithoutPostsInputObjectZodSchema = makeSchema();
