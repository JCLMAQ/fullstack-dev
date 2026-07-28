import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { OrgEmailUpdateManyMutationInputObjectSchema as OrgEmailUpdateManyMutationInputObjectSchema } from './objects/OrgEmailUpdateManyMutationInput.schema';
import { OrgEmailWhereInputObjectSchema as OrgEmailWhereInputObjectSchema } from './objects/OrgEmailWhereInput.schema';

export const OrgEmailUpdateManySchema: z.ZodType<Prisma.OrgEmailUpdateManyArgs> = z.object({ data: OrgEmailUpdateManyMutationInputObjectSchema, where: OrgEmailWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OrgEmailUpdateManyArgs>;

export const OrgEmailUpdateManyZodSchema = z.object({ data: OrgEmailUpdateManyMutationInputObjectSchema, where: OrgEmailWhereInputObjectSchema.optional() }).strict();