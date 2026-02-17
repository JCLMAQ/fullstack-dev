import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TranslationCreateWithoutWordInputObjectSchema as TranslationCreateWithoutWordInputObjectSchema } from './TranslationCreateWithoutWordInput.schema';
import { TranslationUncheckedCreateWithoutWordInputObjectSchema as TranslationUncheckedCreateWithoutWordInputObjectSchema } from './TranslationUncheckedCreateWithoutWordInput.schema';
import { TranslationCreateOrConnectWithoutWordInputObjectSchema as TranslationCreateOrConnectWithoutWordInputObjectSchema } from './TranslationCreateOrConnectWithoutWordInput.schema';
import { TranslationCreateManyWordInputEnvelopeObjectSchema as TranslationCreateManyWordInputEnvelopeObjectSchema } from './TranslationCreateManyWordInputEnvelope.schema';
import { TranslationWhereUniqueInputObjectSchema as TranslationWhereUniqueInputObjectSchema } from './TranslationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TranslationCreateWithoutWordInputObjectSchema), z.lazy(() => TranslationCreateWithoutWordInputObjectSchema).array(), z.lazy(() => TranslationUncheckedCreateWithoutWordInputObjectSchema), z.lazy(() => TranslationUncheckedCreateWithoutWordInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TranslationCreateOrConnectWithoutWordInputObjectSchema), z.lazy(() => TranslationCreateOrConnectWithoutWordInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TranslationCreateManyWordInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TranslationWhereUniqueInputObjectSchema), z.lazy(() => TranslationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TranslationCreateNestedManyWithoutWordInputObjectSchema: z.ZodType<Prisma.TranslationCreateNestedManyWithoutWordInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationCreateNestedManyWithoutWordInput>;
export const TranslationCreateNestedManyWithoutWordInputObjectZodSchema = makeSchema();
