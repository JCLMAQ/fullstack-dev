import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserTaskLinkWhereUniqueInputObjectSchema as UserTaskLinkWhereUniqueInputObjectSchema } from './UserTaskLinkWhereUniqueInput.schema';
import { UserTaskLinkUpdateWithoutUserInputObjectSchema as UserTaskLinkUpdateWithoutUserInputObjectSchema } from './UserTaskLinkUpdateWithoutUserInput.schema';
import { UserTaskLinkUncheckedUpdateWithoutUserInputObjectSchema as UserTaskLinkUncheckedUpdateWithoutUserInputObjectSchema } from './UserTaskLinkUncheckedUpdateWithoutUserInput.schema';
import { UserTaskLinkCreateWithoutUserInputObjectSchema as UserTaskLinkCreateWithoutUserInputObjectSchema } from './UserTaskLinkCreateWithoutUserInput.schema';
import { UserTaskLinkUncheckedCreateWithoutUserInputObjectSchema as UserTaskLinkUncheckedCreateWithoutUserInputObjectSchema } from './UserTaskLinkUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserTaskLinkWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserTaskLinkUpdateWithoutUserInputObjectSchema), z.lazy(() => UserTaskLinkUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => UserTaskLinkCreateWithoutUserInputObjectSchema), z.lazy(() => UserTaskLinkUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const UserTaskLinkUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.UserTaskLinkUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkUpsertWithWhereUniqueWithoutUserInput>;
export const UserTaskLinkUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
