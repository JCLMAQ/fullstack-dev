import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoScalarWhereInputObjectSchema as TodoScalarWhereInputObjectSchema } from './TodoScalarWhereInput.schema';
import { TodoUpdateManyMutationInputObjectSchema as TodoUpdateManyMutationInputObjectSchema } from './TodoUpdateManyMutationInput.schema';
import { TodoUncheckedUpdateManyWithoutOwnerInputObjectSchema as TodoUncheckedUpdateManyWithoutOwnerInputObjectSchema } from './TodoUncheckedUpdateManyWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TodoUpdateManyMutationInputObjectSchema), z.lazy(() => TodoUncheckedUpdateManyWithoutOwnerInputObjectSchema)])
}).strict();
export const TodoUpdateManyWithWhereWithoutOwnerInputObjectSchema: z.ZodType<Prisma.TodoUpdateManyWithWhereWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateManyWithWhereWithoutOwnerInput>;
export const TodoUpdateManyWithWhereWithoutOwnerInputObjectZodSchema = makeSchema();
