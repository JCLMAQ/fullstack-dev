import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserTaskLinkScalarWhereInputObjectSchema as UserTaskLinkScalarWhereInputObjectSchema } from './UserTaskLinkScalarWhereInput.schema';
import { UserTaskLinkUpdateManyMutationInputObjectSchema as UserTaskLinkUpdateManyMutationInputObjectSchema } from './UserTaskLinkUpdateManyMutationInput.schema';
import { UserTaskLinkUncheckedUpdateManyWithoutUserInputObjectSchema as UserTaskLinkUncheckedUpdateManyWithoutUserInputObjectSchema } from './UserTaskLinkUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserTaskLinkScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserTaskLinkUpdateManyMutationInputObjectSchema), z.lazy(() => UserTaskLinkUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const UserTaskLinkUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.UserTaskLinkUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkUpdateManyWithWhereWithoutUserInput>;
export const UserTaskLinkUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
