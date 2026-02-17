import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ApiKeyWhereUniqueInputObjectSchema as ApiKeyWhereUniqueInputObjectSchema } from './ApiKeyWhereUniqueInput.schema';
import { ApiKeyCreateWithoutUserInputObjectSchema as ApiKeyCreateWithoutUserInputObjectSchema } from './ApiKeyCreateWithoutUserInput.schema';
import { ApiKeyUncheckedCreateWithoutUserInputObjectSchema as ApiKeyUncheckedCreateWithoutUserInputObjectSchema } from './ApiKeyUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ApiKeyWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ApiKeyCreateWithoutUserInputObjectSchema), z.lazy(() => ApiKeyUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ApiKeyCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.ApiKeyCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyCreateOrConnectWithoutUserInput>;
export const ApiKeyCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
