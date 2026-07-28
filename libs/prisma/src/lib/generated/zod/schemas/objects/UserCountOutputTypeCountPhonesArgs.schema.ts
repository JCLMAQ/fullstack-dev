import * as z from 'zod';
import { PhoneWhereInputObjectSchema as PhoneWhereInputObjectSchema } from './PhoneWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PhoneWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountPhonesArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountPhonesArgsObjectZodSchema = makeSchema();
