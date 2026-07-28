import * as z from 'zod';
import { OrgEmailWhereInputObjectSchema as OrgEmailWhereInputObjectSchema } from './OrgEmailWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrgEmailWhereInputObjectSchema).optional()
}).strict();
export const OrganizationCountOutputTypeCountOrgEmailsArgsObjectSchema = makeSchema();
export const OrganizationCountOutputTypeCountOrgEmailsArgsObjectZodSchema = makeSchema();
