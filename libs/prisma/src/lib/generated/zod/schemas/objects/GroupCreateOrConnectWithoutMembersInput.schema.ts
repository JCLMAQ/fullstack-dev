import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupCreateWithoutMembersInputObjectSchema as GroupCreateWithoutMembersInputObjectSchema } from './GroupCreateWithoutMembersInput.schema';
import { GroupUncheckedCreateWithoutMembersInputObjectSchema as GroupUncheckedCreateWithoutMembersInputObjectSchema } from './GroupUncheckedCreateWithoutMembersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GroupCreateWithoutMembersInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutMembersInputObjectSchema)])
}).strict();
export const GroupCreateOrConnectWithoutMembersInputObjectSchema: z.ZodType<Prisma.GroupCreateOrConnectWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupCreateOrConnectWithoutMembersInput>;
export const GroupCreateOrConnectWithoutMembersInputObjectZodSchema = makeSchema();
