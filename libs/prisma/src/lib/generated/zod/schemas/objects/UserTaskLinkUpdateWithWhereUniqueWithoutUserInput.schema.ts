import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserTaskLinkWhereUniqueInputObjectSchema as UserTaskLinkWhereUniqueInputObjectSchema } from './UserTaskLinkWhereUniqueInput.schema';
import { UserTaskLinkUpdateWithoutUserInputObjectSchema as UserTaskLinkUpdateWithoutUserInputObjectSchema } from './UserTaskLinkUpdateWithoutUserInput.schema';
import { UserTaskLinkUncheckedUpdateWithoutUserInputObjectSchema as UserTaskLinkUncheckedUpdateWithoutUserInputObjectSchema } from './UserTaskLinkUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserTaskLinkWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserTaskLinkUpdateWithoutUserInputObjectSchema), z.lazy(() => UserTaskLinkUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const UserTaskLinkUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.UserTaskLinkUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkUpdateWithWhereUniqueWithoutUserInput>;
export const UserTaskLinkUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
