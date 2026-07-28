import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { LanguageCountOutputTypeCountTranslationsArgsObjectSchema as LanguageCountOutputTypeCountTranslationsArgsObjectSchema } from './LanguageCountOutputTypeCountTranslationsArgs.schema';
import { LanguageCountOutputTypeCountUsersArgsObjectSchema as LanguageCountOutputTypeCountUsersArgsObjectSchema } from './LanguageCountOutputTypeCountUsersArgs.schema';
import { LanguageCountOutputTypeCountTagTranslatesArgsObjectSchema as LanguageCountOutputTypeCountTagTranslatesArgsObjectSchema } from './LanguageCountOutputTypeCountTagTranslatesArgs.schema'

const makeSchema = () => z.object({
  translations: z.union([z.boolean(), z.lazy(() => LanguageCountOutputTypeCountTranslationsArgsObjectSchema)]).optional(),
  users: z.union([z.boolean(), z.lazy(() => LanguageCountOutputTypeCountUsersArgsObjectSchema)]).optional(),
  tagTranslates: z.union([z.boolean(), z.lazy(() => LanguageCountOutputTypeCountTagTranslatesArgsObjectSchema)]).optional()
}).strict();
export const LanguageCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.LanguageCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.LanguageCountOutputTypeSelect>;
export const LanguageCountOutputTypeSelectObjectZodSchema = makeSchema();
