import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoUpdateWithoutOrgInputObjectSchema as TodoUpdateWithoutOrgInputObjectSchema } from './TodoUpdateWithoutOrgInput.schema';
import { TodoUncheckedUpdateWithoutOrgInputObjectSchema as TodoUncheckedUpdateWithoutOrgInputObjectSchema } from './TodoUncheckedUpdateWithoutOrgInput.schema';
import { TodoCreateWithoutOrgInputObjectSchema as TodoCreateWithoutOrgInputObjectSchema } from './TodoCreateWithoutOrgInput.schema';
import { TodoUncheckedCreateWithoutOrgInputObjectSchema as TodoUncheckedCreateWithoutOrgInputObjectSchema } from './TodoUncheckedCreateWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TodoUpdateWithoutOrgInputObjectSchema), z.lazy(() => TodoUncheckedUpdateWithoutOrgInputObjectSchema)]),
  create: z.union([z.lazy(() => TodoCreateWithoutOrgInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutOrgInputObjectSchema)])
}).strict();
export const TodoUpsertWithWhereUniqueWithoutOrgInputObjectSchema: z.ZodType<Prisma.TodoUpsertWithWhereUniqueWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpsertWithWhereUniqueWithoutOrgInput>;
export const TodoUpsertWithWhereUniqueWithoutOrgInputObjectZodSchema = makeSchema();
