import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoCreateWithoutOrgInputObjectSchema as TodoCreateWithoutOrgInputObjectSchema } from './TodoCreateWithoutOrgInput.schema';
import { TodoUncheckedCreateWithoutOrgInputObjectSchema as TodoUncheckedCreateWithoutOrgInputObjectSchema } from './TodoUncheckedCreateWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TodoCreateWithoutOrgInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutOrgInputObjectSchema)])
}).strict();
export const TodoCreateOrConnectWithoutOrgInputObjectSchema: z.ZodType<Prisma.TodoCreateOrConnectWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateOrConnectWithoutOrgInput>;
export const TodoCreateOrConnectWithoutOrgInputObjectZodSchema = makeSchema();
