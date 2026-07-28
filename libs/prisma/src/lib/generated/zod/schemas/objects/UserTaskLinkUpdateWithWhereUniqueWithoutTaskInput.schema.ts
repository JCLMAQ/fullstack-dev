import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserTaskLinkWhereUniqueInputObjectSchema as UserTaskLinkWhereUniqueInputObjectSchema } from './UserTaskLinkWhereUniqueInput.schema';
import { UserTaskLinkUpdateWithoutTaskInputObjectSchema as UserTaskLinkUpdateWithoutTaskInputObjectSchema } from './UserTaskLinkUpdateWithoutTaskInput.schema';
import { UserTaskLinkUncheckedUpdateWithoutTaskInputObjectSchema as UserTaskLinkUncheckedUpdateWithoutTaskInputObjectSchema } from './UserTaskLinkUncheckedUpdateWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserTaskLinkWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserTaskLinkUpdateWithoutTaskInputObjectSchema), z.lazy(() => UserTaskLinkUncheckedUpdateWithoutTaskInputObjectSchema)])
}).strict();
export const UserTaskLinkUpdateWithWhereUniqueWithoutTaskInputObjectSchema: z.ZodType<Prisma.UserTaskLinkUpdateWithWhereUniqueWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkUpdateWithWhereUniqueWithoutTaskInput>;
export const UserTaskLinkUpdateWithWhereUniqueWithoutTaskInputObjectZodSchema = makeSchema();
