import * as z from 'zod';
import { OrgEmailUseToWhereInputObjectSchema as OrgEmailUseToWhereInputObjectSchema } from './OrgEmailUseToWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrgEmailUseToWhereInputObjectSchema).optional()
}).strict();
export const OrgEmailCountOutputTypeCountOrgEmailUseTosArgsObjectSchema = makeSchema();
export const OrgEmailCountOutputTypeCountOrgEmailUseTosArgsObjectZodSchema = makeSchema();
