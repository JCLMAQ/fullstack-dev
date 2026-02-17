import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ScopeScalarWhereInputObjectSchema as ScopeScalarWhereInputObjectSchema } from './ScopeScalarWhereInput.schema';
import { ScopeUpdateManyMutationInputObjectSchema as ScopeUpdateManyMutationInputObjectSchema } from './ScopeUpdateManyMutationInput.schema';
import { ScopeUncheckedUpdateManyWithoutApiKeyInputObjectSchema as ScopeUncheckedUpdateManyWithoutApiKeyInputObjectSchema } from './ScopeUncheckedUpdateManyWithoutApiKeyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScopeScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ScopeUpdateManyMutationInputObjectSchema), z.lazy(() => ScopeUncheckedUpdateManyWithoutApiKeyInputObjectSchema)])
}).strict();
export const ScopeUpdateManyWithWhereWithoutApiKeyInputObjectSchema: z.ZodType<Prisma.ScopeUpdateManyWithWhereWithoutApiKeyInput> = makeSchema() as unknown as z.ZodType<Prisma.ScopeUpdateManyWithWhereWithoutApiKeyInput>;
export const ScopeUpdateManyWithWhereWithoutApiKeyInputObjectZodSchema = makeSchema();
