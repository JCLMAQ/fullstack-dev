import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { OrgEmailUseToWhereInputObjectSchema as OrgEmailUseToWhereInputObjectSchema } from './objects/OrgEmailUseToWhereInput.schema';

export const OrgEmailUseToDeleteManySchema: z.ZodType<Prisma.OrgEmailUseToDeleteManyArgs> = z.object({ where: OrgEmailUseToWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OrgEmailUseToDeleteManyArgs>;

export const OrgEmailUseToDeleteManyZodSchema = z.object({ where: OrgEmailUseToWhereInputObjectSchema.optional() }).strict();