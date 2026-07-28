import * as z from 'zod';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountOrgsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountOrgsArgsObjectZodSchema = makeSchema();
