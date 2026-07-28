import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ApiKeyScalarWhereInputObjectSchema as ApiKeyScalarWhereInputObjectSchema } from './ApiKeyScalarWhereInput.schema';
import { ApiKeyUpdateManyMutationInputObjectSchema as ApiKeyUpdateManyMutationInputObjectSchema } from './ApiKeyUpdateManyMutationInput.schema';
import { ApiKeyUncheckedUpdateManyWithoutUserInputObjectSchema as ApiKeyUncheckedUpdateManyWithoutUserInputObjectSchema } from './ApiKeyUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ApiKeyScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ApiKeyUpdateManyMutationInputObjectSchema), z.lazy(() => ApiKeyUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const ApiKeyUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.ApiKeyUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyUpdateManyWithWhereWithoutUserInput>;
export const ApiKeyUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
