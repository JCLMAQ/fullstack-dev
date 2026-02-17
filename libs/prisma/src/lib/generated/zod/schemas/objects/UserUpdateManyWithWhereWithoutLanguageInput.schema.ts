import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserScalarWhereInputObjectSchema as UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';
import { UserUpdateManyMutationInputObjectSchema as UserUpdateManyMutationInputObjectSchema } from './UserUpdateManyMutationInput.schema';
import { UserUncheckedUpdateManyWithoutLanguageInputObjectSchema as UserUncheckedUpdateManyWithoutLanguageInputObjectSchema } from './UserUncheckedUpdateManyWithoutLanguageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateManyMutationInputObjectSchema), z.lazy(() => UserUncheckedUpdateManyWithoutLanguageInputObjectSchema)])
}).strict();
export const UserUpdateManyWithWhereWithoutLanguageInputObjectSchema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutLanguageInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateManyWithWhereWithoutLanguageInput>;
export const UserUpdateManyWithWhereWithoutLanguageInputObjectZodSchema = makeSchema();
