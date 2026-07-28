import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ApiKeyScalarWhereInputObjectSchema as ApiKeyScalarWhereInputObjectSchema } from './ApiKeyScalarWhereInput.schema';
import { ApiKeyUpdateManyMutationInputObjectSchema as ApiKeyUpdateManyMutationInputObjectSchema } from './ApiKeyUpdateManyMutationInput.schema';
import { ApiKeyUncheckedUpdateManyWithoutScopesInputObjectSchema as ApiKeyUncheckedUpdateManyWithoutScopesInputObjectSchema } from './ApiKeyUncheckedUpdateManyWithoutScopesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ApiKeyScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ApiKeyUpdateManyMutationInputObjectSchema), z.lazy(() => ApiKeyUncheckedUpdateManyWithoutScopesInputObjectSchema)])
}).strict();
export const ApiKeyUpdateManyWithWhereWithoutScopesInputObjectSchema: z.ZodType<Prisma.ApiKeyUpdateManyWithWhereWithoutScopesInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyUpdateManyWithWhereWithoutScopesInput>;
export const ApiKeyUpdateManyWithWhereWithoutScopesInputObjectZodSchema = makeSchema();
