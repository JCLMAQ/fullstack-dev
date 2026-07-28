import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PhoneWhereUniqueInputObjectSchema as PhoneWhereUniqueInputObjectSchema } from './PhoneWhereUniqueInput.schema';
import { PhoneCreateWithoutUserInputObjectSchema as PhoneCreateWithoutUserInputObjectSchema } from './PhoneCreateWithoutUserInput.schema';
import { PhoneUncheckedCreateWithoutUserInputObjectSchema as PhoneUncheckedCreateWithoutUserInputObjectSchema } from './PhoneUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PhoneWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PhoneCreateWithoutUserInputObjectSchema), z.lazy(() => PhoneUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const PhoneCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.PhoneCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PhoneCreateOrConnectWithoutUserInput>;
export const PhoneCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
