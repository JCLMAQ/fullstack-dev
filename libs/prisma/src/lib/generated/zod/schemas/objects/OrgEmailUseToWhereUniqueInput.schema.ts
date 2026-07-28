import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const OrgEmailUseToWhereUniqueInputObjectSchema: z.ZodType<Prisma.OrgEmailUseToWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUseToWhereUniqueInput>;
export const OrgEmailUseToWhereUniqueInputObjectZodSchema = makeSchema();
