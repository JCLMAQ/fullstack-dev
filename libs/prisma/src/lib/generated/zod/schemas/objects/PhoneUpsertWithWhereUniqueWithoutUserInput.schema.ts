import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PhoneWhereUniqueInputObjectSchema as PhoneWhereUniqueInputObjectSchema } from './PhoneWhereUniqueInput.schema';
import { PhoneUpdateWithoutUserInputObjectSchema as PhoneUpdateWithoutUserInputObjectSchema } from './PhoneUpdateWithoutUserInput.schema';
import { PhoneUncheckedUpdateWithoutUserInputObjectSchema as PhoneUncheckedUpdateWithoutUserInputObjectSchema } from './PhoneUncheckedUpdateWithoutUserInput.schema';
import { PhoneCreateWithoutUserInputObjectSchema as PhoneCreateWithoutUserInputObjectSchema } from './PhoneCreateWithoutUserInput.schema';
import { PhoneUncheckedCreateWithoutUserInputObjectSchema as PhoneUncheckedCreateWithoutUserInputObjectSchema } from './PhoneUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PhoneWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PhoneUpdateWithoutUserInputObjectSchema), z.lazy(() => PhoneUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => PhoneCreateWithoutUserInputObjectSchema), z.lazy(() => PhoneUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const PhoneUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.PhoneUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PhoneUpsertWithWhereUniqueWithoutUserInput>;
export const PhoneUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
