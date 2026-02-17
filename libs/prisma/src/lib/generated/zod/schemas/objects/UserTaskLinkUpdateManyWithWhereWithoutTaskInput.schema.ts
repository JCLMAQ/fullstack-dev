import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserTaskLinkScalarWhereInputObjectSchema as UserTaskLinkScalarWhereInputObjectSchema } from './UserTaskLinkScalarWhereInput.schema';
import { UserTaskLinkUpdateManyMutationInputObjectSchema as UserTaskLinkUpdateManyMutationInputObjectSchema } from './UserTaskLinkUpdateManyMutationInput.schema';
import { UserTaskLinkUncheckedUpdateManyWithoutTaskInputObjectSchema as UserTaskLinkUncheckedUpdateManyWithoutTaskInputObjectSchema } from './UserTaskLinkUncheckedUpdateManyWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserTaskLinkScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserTaskLinkUpdateManyMutationInputObjectSchema), z.lazy(() => UserTaskLinkUncheckedUpdateManyWithoutTaskInputObjectSchema)])
}).strict();
export const UserTaskLinkUpdateManyWithWhereWithoutTaskInputObjectSchema: z.ZodType<Prisma.UserTaskLinkUpdateManyWithWhereWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkUpdateManyWithWhereWithoutTaskInput>;
export const UserTaskLinkUpdateManyWithWhereWithoutTaskInputObjectZodSchema = makeSchema();
