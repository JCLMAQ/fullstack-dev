import * as z from 'zod';
// prettier-ignore
export const TranslationInputSchema = z.object({
    id: z.number().int(),
    text: z.string(),
    definition: z.string().optional().nullable(),
    wordId: z.number().int(),
    word: z.unknown(),
    languageId: z.number().int(),
    language: z.unknown()
}).strict();

export type TranslationInputType = z.infer<typeof TranslationInputSchema>;
