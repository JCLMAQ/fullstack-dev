import * as z from 'zod';
// prettier-ignore
export const TranslationResultSchema = z.object({
    id: z.number().int(),
    text: z.string(),
    definition: z.string().nullable(),
    wordId: z.number().int(),
    word: z.unknown(),
    languageId: z.number().int(),
    language: z.unknown()
}).strict();

export type TranslationResultType = z.infer<typeof TranslationResultSchema>;
