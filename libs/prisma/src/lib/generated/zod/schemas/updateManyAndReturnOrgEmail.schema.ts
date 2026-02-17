import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { OrgEmailSelectObjectSchema as OrgEmailSelectObjectSchema } from './objects/OrgEmailSelect.schema';
import { OrgEmailUpdateManyMutationInputObjectSchema as OrgEmailUpdateManyMutationInputObjectSchema } from './objects/OrgEmailUpdateManyMutationInput.schema';
import { OrgEmailWhereInputObjectSchema as OrgEmailWhereInputObjectSchema } from './objects/OrgEmailWhereInput.schema';

export const OrgEmailUpdateManyAndReturnSchema: z.ZodType<Prisma.OrgEmailUpdateManyAndReturnArgs> = z.object({ select: OrgEmailSelectObjectSchema.optional(), data: OrgEmailUpdateManyMutationInputObjectSchema, where: OrgEmailWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OrgEmailUpdateManyAndReturnArgs>;

export const OrgEmailUpdateManyAndReturnZodSchema = z.object({ select: OrgEmailSelectObjectSchema.optional(), data: OrgEmailUpdateManyMutationInputObjectSchema, where: OrgEmailWhereInputObjectSchema.optional() }).strict();