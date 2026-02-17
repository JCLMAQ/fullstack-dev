import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserSecretWhereInputObjectSchema as UserSecretWhereInputObjectSchema } from './UserSecretWhereInput.schema';
import { UserSecretUpdateWithoutUserInputObjectSchema as UserSecretUpdateWithoutUserInputObjectSchema } from './UserSecretUpdateWithoutUserInput.schema';
import { UserSecretUncheckedUpdateWithoutUserInputObjectSchema as UserSecretUncheckedUpdateWithoutUserInputObjectSchema } from './UserSecretUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserSecretWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserSecretUpdateWithoutUserInputObjectSchema), z.lazy(() => UserSecretUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const UserSecretUpdateToOneWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.UserSecretUpdateToOneWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserSecretUpdateToOneWithWhereWithoutUserInput>;
export const UserSecretUpdateToOneWithWhereWithoutUserInputObjectZodSchema = makeSchema();
