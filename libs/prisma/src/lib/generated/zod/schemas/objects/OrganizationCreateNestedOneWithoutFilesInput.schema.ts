import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationCreateWithoutFilesInputObjectSchema as OrganizationCreateWithoutFilesInputObjectSchema } from './OrganizationCreateWithoutFilesInput.schema';
import { OrganizationUncheckedCreateWithoutFilesInputObjectSchema as OrganizationUncheckedCreateWithoutFilesInputObjectSchema } from './OrganizationUncheckedCreateWithoutFilesInput.schema';
import { OrganizationCreateOrConnectWithoutFilesInputObjectSchema as OrganizationCreateOrConnectWithoutFilesInputObjectSchema } from './OrganizationCreateOrConnectWithoutFilesInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutFilesInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutFilesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutFilesInputObjectSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrganizationCreateNestedOneWithoutFilesInputObjectSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateNestedOneWithoutFilesInput>;
export const OrganizationCreateNestedOneWithoutFilesInputObjectZodSchema = makeSchema();
