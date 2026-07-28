import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ApiKeyWhereUniqueInputObjectSchema as ApiKeyWhereUniqueInputObjectSchema } from './ApiKeyWhereUniqueInput.schema';
import { ApiKeyUpdateWithoutUserInputObjectSchema as ApiKeyUpdateWithoutUserInputObjectSchema } from './ApiKeyUpdateWithoutUserInput.schema';
import { ApiKeyUncheckedUpdateWithoutUserInputObjectSchema as ApiKeyUncheckedUpdateWithoutUserInputObjectSchema } from './ApiKeyUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ApiKeyWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ApiKeyUpdateWithoutUserInputObjectSchema), z.lazy(() => ApiKeyUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const ApiKeyUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ApiKeyUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyUpdateWithWhereUniqueWithoutUserInput>;
export const ApiKeyUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
