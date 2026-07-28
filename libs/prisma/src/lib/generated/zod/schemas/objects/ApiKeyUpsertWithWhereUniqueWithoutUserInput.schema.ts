import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ApiKeyWhereUniqueInputObjectSchema as ApiKeyWhereUniqueInputObjectSchema } from './ApiKeyWhereUniqueInput.schema';
import { ApiKeyUpdateWithoutUserInputObjectSchema as ApiKeyUpdateWithoutUserInputObjectSchema } from './ApiKeyUpdateWithoutUserInput.schema';
import { ApiKeyUncheckedUpdateWithoutUserInputObjectSchema as ApiKeyUncheckedUpdateWithoutUserInputObjectSchema } from './ApiKeyUncheckedUpdateWithoutUserInput.schema';
import { ApiKeyCreateWithoutUserInputObjectSchema as ApiKeyCreateWithoutUserInputObjectSchema } from './ApiKeyCreateWithoutUserInput.schema';
import { ApiKeyUncheckedCreateWithoutUserInputObjectSchema as ApiKeyUncheckedCreateWithoutUserInputObjectSchema } from './ApiKeyUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ApiKeyWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ApiKeyUpdateWithoutUserInputObjectSchema), z.lazy(() => ApiKeyUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => ApiKeyCreateWithoutUserInputObjectSchema), z.lazy(() => ApiKeyUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ApiKeyUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ApiKeyUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyUpsertWithWhereUniqueWithoutUserInput>;
export const ApiKeyUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
