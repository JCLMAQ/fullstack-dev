import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TranslationCreateWithoutWordInputObjectSchema as TranslationCreateWithoutWordInputObjectSchema } from './TranslationCreateWithoutWordInput.schema';
import { TranslationUncheckedCreateWithoutWordInputObjectSchema as TranslationUncheckedCreateWithoutWordInputObjectSchema } from './TranslationUncheckedCreateWithoutWordInput.schema';
import { TranslationCreateOrConnectWithoutWordInputObjectSchema as TranslationCreateOrConnectWithoutWordInputObjectSchema } from './TranslationCreateOrConnectWithoutWordInput.schema';
import { TranslationUpsertWithWhereUniqueWithoutWordInputObjectSchema as TranslationUpsertWithWhereUniqueWithoutWordInputObjectSchema } from './TranslationUpsertWithWhereUniqueWithoutWordInput.schema';
import { TranslationCreateManyWordInputEnvelopeObjectSchema as TranslationCreateManyWordInputEnvelopeObjectSchema } from './TranslationCreateManyWordInputEnvelope.schema';
import { TranslationWhereUniqueInputObjectSchema as TranslationWhereUniqueInputObjectSchema } from './TranslationWhereUniqueInput.schema';
import { TranslationUpdateWithWhereUniqueWithoutWordInputObjectSchema as TranslationUpdateWithWhereUniqueWithoutWordInputObjectSchema } from './TranslationUpdateWithWhereUniqueWithoutWordInput.schema';
import { TranslationUpdateManyWithWhereWithoutWordInputObjectSchema as TranslationUpdateManyWithWhereWithoutWordInputObjectSchema } from './TranslationUpdateManyWithWhereWithoutWordInput.schema';
import { TranslationScalarWhereInputObjectSchema as TranslationScalarWhereInputObjectSchema } from './TranslationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TranslationCreateWithoutWordInputObjectSchema), z.lazy(() => TranslationCreateWithoutWordInputObjectSchema).array(), z.lazy(() => TranslationUncheckedCreateWithoutWordInputObjectSchema), z.lazy(() => TranslationUncheckedCreateWithoutWordInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TranslationCreateOrConnectWithoutWordInputObjectSchema), z.lazy(() => TranslationCreateOrConnectWithoutWordInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TranslationUpsertWithWhereUniqueWithoutWordInputObjectSchema), z.lazy(() => TranslationUpsertWithWhereUniqueWithoutWordInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TranslationCreateManyWordInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TranslationWhereUniqueInputObjectSchema), z.lazy(() => TranslationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TranslationWhereUniqueInputObjectSchema), z.lazy(() => TranslationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TranslationWhereUniqueInputObjectSchema), z.lazy(() => TranslationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TranslationWhereUniqueInputObjectSchema), z.lazy(() => TranslationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TranslationUpdateWithWhereUniqueWithoutWordInputObjectSchema), z.lazy(() => TranslationUpdateWithWhereUniqueWithoutWordInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TranslationUpdateManyWithWhereWithoutWordInputObjectSchema), z.lazy(() => TranslationUpdateManyWithWhereWithoutWordInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TranslationScalarWhereInputObjectSchema), z.lazy(() => TranslationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TranslationUncheckedUpdateManyWithoutWordNestedInputObjectSchema: z.ZodType<Prisma.TranslationUncheckedUpdateManyWithoutWordNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationUncheckedUpdateManyWithoutWordNestedInput>;
export const TranslationUncheckedUpdateManyWithoutWordNestedInputObjectZodSchema = makeSchema();
