import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { OrgEmailUseToSelectObjectSchema as OrgEmailUseToSelectObjectSchema } from './objects/OrgEmailUseToSelect.schema';
import { OrgEmailUseToUpdateManyMutationInputObjectSchema as OrgEmailUseToUpdateManyMutationInputObjectSchema } from './objects/OrgEmailUseToUpdateManyMutationInput.schema';
import { OrgEmailUseToWhereInputObjectSchema as OrgEmailUseToWhereInputObjectSchema } from './objects/OrgEmailUseToWhereInput.schema';

export const OrgEmailUseToUpdateManyAndReturnSchema: z.ZodType<Prisma.OrgEmailUseToUpdateManyAndReturnArgs> = z.object({ select: OrgEmailUseToSelectObjectSchema.optional(), data: OrgEmailUseToUpdateManyMutationInputObjectSchema, where: OrgEmailUseToWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OrgEmailUseToUpdateManyAndReturnArgs>;

export const OrgEmailUseToUpdateManyAndReturnZodSchema = z.object({ select: OrgEmailUseToSelectObjectSchema.optional(), data: OrgEmailUseToUpdateManyMutationInputObjectSchema, where: OrgEmailUseToWhereInputObjectSchema.optional() }).strict();