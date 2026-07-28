import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupCreateWithoutOrgInputObjectSchema as GroupCreateWithoutOrgInputObjectSchema } from './GroupCreateWithoutOrgInput.schema';
import { GroupUncheckedCreateWithoutOrgInputObjectSchema as GroupUncheckedCreateWithoutOrgInputObjectSchema } from './GroupUncheckedCreateWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GroupCreateWithoutOrgInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutOrgInputObjectSchema)])
}).strict();
export const GroupCreateOrConnectWithoutOrgInputObjectSchema: z.ZodType<Prisma.GroupCreateOrConnectWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupCreateOrConnectWithoutOrgInput>;
export const GroupCreateOrConnectWithoutOrgInputObjectZodSchema = makeSchema();
