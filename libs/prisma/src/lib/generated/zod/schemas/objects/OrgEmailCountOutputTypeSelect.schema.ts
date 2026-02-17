import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrgEmailCountOutputTypeCountOrgEmailUseTosArgsObjectSchema as OrgEmailCountOutputTypeCountOrgEmailUseTosArgsObjectSchema } from './OrgEmailCountOutputTypeCountOrgEmailUseTosArgs.schema'

const makeSchema = () => z.object({
  OrgEmailUseTos: z.union([z.boolean(), z.lazy(() => OrgEmailCountOutputTypeCountOrgEmailUseTosArgsObjectSchema)]).optional()
}).strict();
export const OrgEmailCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.OrgEmailCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailCountOutputTypeSelect>;
export const OrgEmailCountOutputTypeSelectObjectZodSchema = makeSchema();
