import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PhoneScalarWhereInputObjectSchema as PhoneScalarWhereInputObjectSchema } from './PhoneScalarWhereInput.schema';
import { PhoneUpdateManyMutationInputObjectSchema as PhoneUpdateManyMutationInputObjectSchema } from './PhoneUpdateManyMutationInput.schema';
import { PhoneUncheckedUpdateManyWithoutUserInputObjectSchema as PhoneUncheckedUpdateManyWithoutUserInputObjectSchema } from './PhoneUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PhoneScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PhoneUpdateManyMutationInputObjectSchema), z.lazy(() => PhoneUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const PhoneUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.PhoneUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PhoneUpdateManyWithWhereWithoutUserInput>;
export const PhoneUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
