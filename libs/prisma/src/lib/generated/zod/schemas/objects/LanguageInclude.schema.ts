import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TranslationFindManySchema as TranslationFindManySchema } from '../findManyTranslation.schema';
import { UserFindManySchema as UserFindManySchema } from '../findManyUser.schema';
import { TagTranslateFindManySchema as TagTranslateFindManySchema } from '../findManyTagTranslate.schema';
import { LanguageCountOutputTypeArgsObjectSchema as LanguageCountOutputTypeArgsObjectSchema } from './LanguageCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  translations: z.union([z.boolean(), z.lazy(() => TranslationFindManySchema)]).optional(),
  users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
  tagTranslates: z.union([z.boolean(), z.lazy(() => TagTranslateFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => LanguageCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const LanguageIncludeObjectSchema: z.ZodType<Prisma.LanguageInclude> = makeSchema() as unknown as z.ZodType<Prisma.LanguageInclude>;
export const LanguageIncludeObjectZodSchema = makeSchema();
