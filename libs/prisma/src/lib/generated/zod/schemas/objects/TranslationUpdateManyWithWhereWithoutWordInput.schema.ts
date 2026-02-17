import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TranslationScalarWhereInputObjectSchema as TranslationScalarWhereInputObjectSchema } from './TranslationScalarWhereInput.schema';
import { TranslationUpdateManyMutationInputObjectSchema as TranslationUpdateManyMutationInputObjectSchema } from './TranslationUpdateManyMutationInput.schema';
import { TranslationUncheckedUpdateManyWithoutWordInputObjectSchema as TranslationUncheckedUpdateManyWithoutWordInputObjectSchema } from './TranslationUncheckedUpdateManyWithoutWordInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TranslationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TranslationUpdateManyMutationInputObjectSchema), z.lazy(() => TranslationUncheckedUpdateManyWithoutWordInputObjectSchema)])
}).strict();
export const TranslationUpdateManyWithWhereWithoutWordInputObjectSchema: z.ZodType<Prisma.TranslationUpdateManyWithWhereWithoutWordInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationUpdateManyWithWhereWithoutWordInput>;
export const TranslationUpdateManyWithWhereWithoutWordInputObjectZodSchema = makeSchema();
