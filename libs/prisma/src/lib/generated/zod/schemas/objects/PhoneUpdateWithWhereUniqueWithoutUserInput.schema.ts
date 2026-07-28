import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PhoneWhereUniqueInputObjectSchema as PhoneWhereUniqueInputObjectSchema } from './PhoneWhereUniqueInput.schema';
import { PhoneUpdateWithoutUserInputObjectSchema as PhoneUpdateWithoutUserInputObjectSchema } from './PhoneUpdateWithoutUserInput.schema';
import { PhoneUncheckedUpdateWithoutUserInputObjectSchema as PhoneUncheckedUpdateWithoutUserInputObjectSchema } from './PhoneUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PhoneWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PhoneUpdateWithoutUserInputObjectSchema), z.lazy(() => PhoneUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const PhoneUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.PhoneUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PhoneUpdateWithWhereUniqueWithoutUserInput>;
export const PhoneUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
