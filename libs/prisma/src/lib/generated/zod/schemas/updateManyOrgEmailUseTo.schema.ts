import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { OrgEmailUseToUpdateManyMutationInputObjectSchema as OrgEmailUseToUpdateManyMutationInputObjectSchema } from './objects/OrgEmailUseToUpdateManyMutationInput.schema';
import { OrgEmailUseToWhereInputObjectSchema as OrgEmailUseToWhereInputObjectSchema } from './objects/OrgEmailUseToWhereInput.schema';

export const OrgEmailUseToUpdateManySchema: z.ZodType<Prisma.OrgEmailUseToUpdateManyArgs> = z.object({ data: OrgEmailUseToUpdateManyMutationInputObjectSchema, where: OrgEmailUseToWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OrgEmailUseToUpdateManyArgs>;

export const OrgEmailUseToUpdateManyZodSchema = z.object({ data: OrgEmailUseToUpdateManyMutationInputObjectSchema, where: OrgEmailUseToWhereInputObjectSchema.optional() }).strict();