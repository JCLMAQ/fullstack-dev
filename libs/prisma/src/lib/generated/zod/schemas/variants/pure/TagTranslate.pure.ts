import * as z from 'zod';
// prettier-ignore
export const TagTranslateModelSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    language: z.unknown(),
    languageId: z.number().int(),
    translation: z.string(),
    tagId: z.number().int(),
    tagValue: z.unknown(),
    description: z.string().nullable()
}).strict();

export type TagTranslatePureType = z.infer<typeof TagTranslateModelSchema>;
