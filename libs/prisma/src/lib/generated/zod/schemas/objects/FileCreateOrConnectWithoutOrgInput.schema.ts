import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileCreateWithoutOrgInputObjectSchema as FileCreateWithoutOrgInputObjectSchema } from './FileCreateWithoutOrgInput.schema';
import { FileUncheckedCreateWithoutOrgInputObjectSchema as FileUncheckedCreateWithoutOrgInputObjectSchema } from './FileUncheckedCreateWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FileCreateWithoutOrgInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutOrgInputObjectSchema)])
}).strict();
export const FileCreateOrConnectWithoutOrgInputObjectSchema: z.ZodType<Prisma.FileCreateOrConnectWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateOrConnectWithoutOrgInput>;
export const FileCreateOrConnectWithoutOrgInputObjectZodSchema = makeSchema();
