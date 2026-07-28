import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserTaskLinkWhereUniqueInputObjectSchema as UserTaskLinkWhereUniqueInputObjectSchema } from './UserTaskLinkWhereUniqueInput.schema';
import { UserTaskLinkUpdateWithoutTaskInputObjectSchema as UserTaskLinkUpdateWithoutTaskInputObjectSchema } from './UserTaskLinkUpdateWithoutTaskInput.schema';
import { UserTaskLinkUncheckedUpdateWithoutTaskInputObjectSchema as UserTaskLinkUncheckedUpdateWithoutTaskInputObjectSchema } from './UserTaskLinkUncheckedUpdateWithoutTaskInput.schema';
import { UserTaskLinkCreateWithoutTaskInputObjectSchema as UserTaskLinkCreateWithoutTaskInputObjectSchema } from './UserTaskLinkCreateWithoutTaskInput.schema';
import { UserTaskLinkUncheckedCreateWithoutTaskInputObjectSchema as UserTaskLinkUncheckedCreateWithoutTaskInputObjectSchema } from './UserTaskLinkUncheckedCreateWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserTaskLinkWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserTaskLinkUpdateWithoutTaskInputObjectSchema), z.lazy(() => UserTaskLinkUncheckedUpdateWithoutTaskInputObjectSchema)]),
  create: z.union([z.lazy(() => UserTaskLinkCreateWithoutTaskInputObjectSchema), z.lazy(() => UserTaskLinkUncheckedCreateWithoutTaskInputObjectSchema)])
}).strict();
export const UserTaskLinkUpsertWithWhereUniqueWithoutTaskInputObjectSchema: z.ZodType<Prisma.UserTaskLinkUpsertWithWhereUniqueWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkUpsertWithWhereUniqueWithoutTaskInput>;
export const UserTaskLinkUpsertWithWhereUniqueWithoutTaskInputObjectZodSchema = makeSchema();
