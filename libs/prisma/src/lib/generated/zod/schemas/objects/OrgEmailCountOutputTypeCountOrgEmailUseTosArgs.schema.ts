import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrgEmailUseToWhereInputObjectSchema as OrgEmailUseToWhereInputObjectSchema } from './OrgEmailUseToWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrgEmailUseToWhereInputObjectSchema).optional()
}).strict();
export const OrgEmailCountOutputTypeCountOrgEmailUseTosArgsObjectSchema = makeSchema();
export const OrgEmailCountOutputTypeCountOrgEmailUseTosArgsObjectZodSchema = makeSchema();
