import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationCreateWithoutFilesInputObjectSchema as OrganizationCreateWithoutFilesInputObjectSchema } from './OrganizationCreateWithoutFilesInput.schema';
import { OrganizationUncheckedCreateWithoutFilesInputObjectSchema as OrganizationUncheckedCreateWithoutFilesInputObjectSchema } from './OrganizationUncheckedCreateWithoutFilesInput.schema';
import { OrganizationCreateOrConnectWithoutFilesInputObjectSchema as OrganizationCreateOrConnectWithoutFilesInputObjectSchema } from './OrganizationCreateOrConnectWithoutFilesInput.schema';
import { OrganizationUpsertWithoutFilesInputObjectSchema as OrganizationUpsertWithoutFilesInputObjectSchema } from './OrganizationUpsertWithoutFilesInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateToOneWithWhereWithoutFilesInputObjectSchema as OrganizationUpdateToOneWithWhereWithoutFilesInputObjectSchema } from './OrganizationUpdateToOneWithWhereWithoutFilesInput.schema';
import { OrganizationUpdateWithoutFilesInputObjectSchema as OrganizationUpdateWithoutFilesInputObjectSchema } from './OrganizationUpdateWithoutFilesInput.schema';
import { OrganizationUncheckedUpdateWithoutFilesInputObjectSchema as OrganizationUncheckedUpdateWithoutFilesInputObjectSchema } from './OrganizationUncheckedUpdateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutFilesInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutFilesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutFilesInputObjectSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutFilesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrganizationUpdateToOneWithWhereWithoutFilesInputObjectSchema), z.lazy(() => OrganizationUpdateWithoutFilesInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutFilesInputObjectSchema)]).optional()
}).strict();
export const OrganizationUpdateOneWithoutFilesNestedInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateOneWithoutFilesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateOneWithoutFilesNestedInput>;
export const OrganizationUpdateOneWithoutFilesNestedInputObjectZodSchema = makeSchema();
