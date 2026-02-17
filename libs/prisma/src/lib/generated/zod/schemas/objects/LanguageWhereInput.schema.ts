import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { TranslationListRelationFilterObjectSchema as TranslationListRelationFilterObjectSchema } from './TranslationListRelationFilter.schema';
import { UserListRelationFilterObjectSchema as UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';
import { TagTranslateListRelationFilterObjectSchema as TagTranslateListRelationFilterObjectSchema } from './TagTranslateListRelationFilter.schema'

const languagewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => LanguageWhereInputObjectSchema), z.lazy(() => LanguageWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LanguageWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LanguageWhereInputObjectSchema), z.lazy(() => LanguageWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  translations: z.lazy(() => TranslationListRelationFilterObjectSchema).optional(),
  users: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
  tagTranslates: z.lazy(() => TagTranslateListRelationFilterObjectSchema).optional()
}).strict();
export const LanguageWhereInputObjectSchema: z.ZodType<Prisma.LanguageWhereInput> = languagewhereinputSchema as unknown as z.ZodType<Prisma.LanguageWhereInput>;
export const LanguageWhereInputObjectZodSchema = languagewhereinputSchema;
