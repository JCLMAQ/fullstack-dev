import * as z from 'zod';
import { ChangesTrackingWhereInputObjectSchema as ChangesTrackingWhereInputObjectSchema } from './ChangesTrackingWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChangesTrackingWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountChangesLogsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountChangesLogsArgsObjectZodSchema = makeSchema();
