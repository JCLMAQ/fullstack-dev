import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationCreateWithoutFilesInputObjectSchema as OrganizationCreateWithoutFilesInputObjectSchema } from './OrganizationCreateWithoutFilesInput.schema';
import { OrganizationUncheckedCreateWithoutFilesInputObjectSchema as OrganizationUncheckedCreateWithoutFilesInputObjectSchema } from './OrganizationUncheckedCreateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrganizationCreateWithoutFilesInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutFilesInputObjectSchema)])
}).strict();
export const OrganizationCreateOrConnectWithoutFilesInputObjectSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateOrConnectWithoutFilesInput>;
export const OrganizationCreateOrConnectWithoutFilesInputObjectZodSchema = makeSchema();
