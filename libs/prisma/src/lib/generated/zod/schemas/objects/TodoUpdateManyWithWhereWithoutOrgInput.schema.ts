import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoScalarWhereInputObjectSchema as TodoScalarWhereInputObjectSchema } from './TodoScalarWhereInput.schema';
import { TodoUpdateManyMutationInputObjectSchema as TodoUpdateManyMutationInputObjectSchema } from './TodoUpdateManyMutationInput.schema';
import { TodoUncheckedUpdateManyWithoutOrgInputObjectSchema as TodoUncheckedUpdateManyWithoutOrgInputObjectSchema } from './TodoUncheckedUpdateManyWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TodoUpdateManyMutationInputObjectSchema), z.lazy(() => TodoUncheckedUpdateManyWithoutOrgInputObjectSchema)])
}).strict();
export const TodoUpdateManyWithWhereWithoutOrgInputObjectSchema: z.ZodType<Prisma.TodoUpdateManyWithWhereWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateManyWithWhereWithoutOrgInput>;
export const TodoUpdateManyWithWhereWithoutOrgInputObjectZodSchema = makeSchema();
