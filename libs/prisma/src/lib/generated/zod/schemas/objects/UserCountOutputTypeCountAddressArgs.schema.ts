import * as z from 'zod';
import { AddressWhereInputObjectSchema as AddressWhereInputObjectSchema } from './AddressWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AddressWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountAddressArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountAddressArgsObjectZodSchema = makeSchema();
