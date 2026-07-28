import * as z from 'zod';
import { TokenWhereInputObjectSchema as TokenWhereInputObjectSchema } from './TokenWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TokenWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountTokensArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountTokensArgsObjectZodSchema = makeSchema();
