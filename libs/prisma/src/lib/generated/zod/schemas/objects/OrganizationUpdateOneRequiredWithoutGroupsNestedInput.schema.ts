import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateWithoutGroupsInputObjectSchema as OrganizationCreateWithoutGroupsInputObjectSchema } from './OrganizationCreateWithoutGroupsInput.schema';
import { OrganizationUncheckedCreateWithoutGroupsInputObjectSchema as OrganizationUncheckedCreateWithoutGroupsInputObjectSchema } from './OrganizationUncheckedCreateWithoutGroupsInput.schema';
import { OrganizationCreateOrConnectWithoutGroupsInputObjectSchema as OrganizationCreateOrConnectWithoutGroupsInputObjectSchema } from './OrganizationCreateOrConnectWithoutGroupsInput.schema';
import { OrganizationUpsertWithoutGroupsInputObjectSchema as OrganizationUpsertWithoutGroupsInputObjectSchema } from './OrganizationUpsertWithoutGroupsInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateToOneWithWhereWithoutGroupsInputObjectSchema as OrganizationUpdateToOneWithWhereWithoutGroupsInputObjectSchema } from './OrganizationUpdateToOneWithWhereWithoutGroupsInput.schema';
import { OrganizationUpdateWithoutGroupsInputObjectSchema as OrganizationUpdateWithoutGroupsInputObjectSchema } from './OrganizationUpdateWithoutGroupsInput.schema';
import { OrganizationUncheckedUpdateWithoutGroupsInputObjectSchema as OrganizationUncheckedUpdateWithoutGroupsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutGroupsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutGroupsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutGroupsInputObjectSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutGroupsInputObjectSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrganizationUpdateToOneWithWhereWithoutGroupsInputObjectSchema), z.lazy(() => OrganizationUpdateWithoutGroupsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutGroupsInputObjectSchema)]).optional()
}).strict();
export const OrganizationUpdateOneRequiredWithoutGroupsNestedInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateOneRequiredWithoutGroupsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateOneRequiredWithoutGroupsNestedInput>;
export const OrganizationUpdateOneRequiredWithoutGroupsNestedInputObjectZodSchema = makeSchema();
