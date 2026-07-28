import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserTaskLinkWhereUniqueInputObjectSchema as UserTaskLinkWhereUniqueInputObjectSchema } from './UserTaskLinkWhereUniqueInput.schema';
import { UserTaskLinkCreateWithoutUserInputObjectSchema as UserTaskLinkCreateWithoutUserInputObjectSchema } from './UserTaskLinkCreateWithoutUserInput.schema';
import { UserTaskLinkUncheckedCreateWithoutUserInputObjectSchema as UserTaskLinkUncheckedCreateWithoutUserInputObjectSchema } from './UserTaskLinkUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserTaskLinkWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserTaskLinkCreateWithoutUserInputObjectSchema), z.lazy(() => UserTaskLinkUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const UserTaskLinkCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.UserTaskLinkCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkCreateOrConnectWithoutUserInput>;
export const UserTaskLinkCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
