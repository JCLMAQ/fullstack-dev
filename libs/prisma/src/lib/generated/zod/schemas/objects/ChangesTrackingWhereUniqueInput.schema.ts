import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const ChangesTrackingWhereUniqueInputObjectSchema: z.ZodType<Prisma.ChangesTrackingWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ChangesTrackingWhereUniqueInput>;
export const ChangesTrackingWhereUniqueInputObjectZodSchema = makeSchema();
