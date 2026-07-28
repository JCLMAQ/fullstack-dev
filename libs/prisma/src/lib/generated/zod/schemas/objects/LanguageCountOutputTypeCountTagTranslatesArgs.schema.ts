import * as z from 'zod';
import { TagTranslateWhereInputObjectSchema as TagTranslateWhereInputObjectSchema } from './TagTranslateWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagTranslateWhereInputObjectSchema).optional()
}).strict();
export const LanguageCountOutputTypeCountTagTranslatesArgsObjectSchema = makeSchema();
export const LanguageCountOutputTypeCountTagTranslatesArgsObjectZodSchema = makeSchema();
