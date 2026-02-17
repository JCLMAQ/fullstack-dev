import * as z from 'zod';

export const DictioEntryTypeSchema = z.enum(['WORD', 'PHRASE', 'SENTENCE', 'IDIOM', 'TAG'])

export type DictioEntryType = z.infer<typeof DictioEntryTypeSchema>;