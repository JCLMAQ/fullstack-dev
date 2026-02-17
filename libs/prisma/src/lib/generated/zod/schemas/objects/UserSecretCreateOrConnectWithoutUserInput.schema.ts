import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserSecretWhereUniqueInputObjectSchema as UserSecretWhereUniqueInputObjectSchema } from './UserSecretWhereUniqueInput.schema';
import { UserSecretCreateWithoutUserInputObjectSchema as UserSecretCreateWithoutUserInputObjectSchema } from './UserSecretCreateWithoutUserInput.schema';
import { UserSecretUncheckedCreateWithoutUserInputObjectSchema as UserSecretUncheckedCreateWithoutUserInputObjectSchema } from './UserSecretUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserSecretWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserSecretCreateWithoutUserInputObjectSchema), z.lazy(() => UserSecretUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const UserSecretCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.UserSecretCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserSecretCreateOrConnectWithoutUserInput>;
export const UserSecretCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
