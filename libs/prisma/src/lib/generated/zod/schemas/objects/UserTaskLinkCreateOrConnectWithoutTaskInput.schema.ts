import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserTaskLinkWhereUniqueInputObjectSchema as UserTaskLinkWhereUniqueInputObjectSchema } from './UserTaskLinkWhereUniqueInput.schema';
import { UserTaskLinkCreateWithoutTaskInputObjectSchema as UserTaskLinkCreateWithoutTaskInputObjectSchema } from './UserTaskLinkCreateWithoutTaskInput.schema';
import { UserTaskLinkUncheckedCreateWithoutTaskInputObjectSchema as UserTaskLinkUncheckedCreateWithoutTaskInputObjectSchema } from './UserTaskLinkUncheckedCreateWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserTaskLinkWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserTaskLinkCreateWithoutTaskInputObjectSchema), z.lazy(() => UserTaskLinkUncheckedCreateWithoutTaskInputObjectSchema)])
}).strict();
export const UserTaskLinkCreateOrConnectWithoutTaskInputObjectSchema: z.ZodType<Prisma.UserTaskLinkCreateOrConnectWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkCreateOrConnectWithoutTaskInput>;
export const UserTaskLinkCreateOrConnectWithoutTaskInputObjectZodSchema = makeSchema();
