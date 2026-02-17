import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const OrgEmailWhereUniqueInputObjectSchema: z.ZodType<Prisma.OrgEmailWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailWhereUniqueInput>;
export const OrgEmailWhereUniqueInputObjectZodSchema = makeSchema();
