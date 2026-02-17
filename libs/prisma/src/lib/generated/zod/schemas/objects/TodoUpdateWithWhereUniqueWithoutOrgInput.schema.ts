import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoUpdateWithoutOrgInputObjectSchema as TodoUpdateWithoutOrgInputObjectSchema } from './TodoUpdateWithoutOrgInput.schema';
import { TodoUncheckedUpdateWithoutOrgInputObjectSchema as TodoUncheckedUpdateWithoutOrgInputObjectSchema } from './TodoUncheckedUpdateWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TodoUpdateWithoutOrgInputObjectSchema), z.lazy(() => TodoUncheckedUpdateWithoutOrgInputObjectSchema)])
}).strict();
export const TodoUpdateWithWhereUniqueWithoutOrgInputObjectSchema: z.ZodType<Prisma.TodoUpdateWithWhereUniqueWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateWithWhereUniqueWithoutOrgInput>;
export const TodoUpdateWithWhereUniqueWithoutOrgInputObjectZodSchema = makeSchema();
