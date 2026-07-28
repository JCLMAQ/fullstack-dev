import * as z from 'zod';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountProfilesArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountProfilesArgsObjectZodSchema = makeSchema();
