import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserSecretCreateWithoutUserInputObjectSchema as UserSecretCreateWithoutUserInputObjectSchema } from './UserSecretCreateWithoutUserInput.schema';
import { UserSecretUncheckedCreateWithoutUserInputObjectSchema as UserSecretUncheckedCreateWithoutUserInputObjectSchema } from './UserSecretUncheckedCreateWithoutUserInput.schema';
import { UserSecretCreateOrConnectWithoutUserInputObjectSchema as UserSecretCreateOrConnectWithoutUserInputObjectSchema } from './UserSecretCreateOrConnectWithoutUserInput.schema';
import { UserSecretWhereUniqueInputObjectSchema as UserSecretWhereUniqueInputObjectSchema } from './UserSecretWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserSecretCreateWithoutUserInputObjectSchema), z.lazy(() => UserSecretUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserSecretCreateOrConnectWithoutUserInputObjectSchema).optional(),
  connect: z.lazy(() => UserSecretWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserSecretUncheckedCreateNestedOneWithoutUserInputObjectSchema: z.ZodType<Prisma.UserSecretUncheckedCreateNestedOneWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserSecretUncheckedCreateNestedOneWithoutUserInput>;
export const UserSecretUncheckedCreateNestedOneWithoutUserInputObjectZodSchema = makeSchema();
