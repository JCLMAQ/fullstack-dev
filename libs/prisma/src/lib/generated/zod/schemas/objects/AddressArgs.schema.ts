import * as z from 'zod';
import { AddressSelectObjectSchema as AddressSelectObjectSchema } from './AddressSelect.schema';
import { AddressIncludeObjectSchema as AddressIncludeObjectSchema } from './AddressInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AddressSelectObjectSchema).optional(),
  include: z.lazy(() => AddressIncludeObjectSchema).optional()
}).strict();
export const AddressArgsObjectSchema = makeSchema();
export const AddressArgsObjectZodSchema = makeSchema();
