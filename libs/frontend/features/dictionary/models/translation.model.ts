import type { Language } from './language.model';
import type { Word } from './word.model';

/**
 * Translation model for frontend - mirrors Prisma Translation schema
 */
export interface Translation {
  id: number;
  text: string; // The translated text
  definition?: string | null; // Optional definition/description
  wordId: number;
  languageId: number;
  word?: Word;
  language?: Language;
}

/**
 * DTO for creating a new translation
 */
export interface CreateTranslationDto {
  text: string;
  definition?: string;
  wordId: number;
  languageId: number;
}

/**
 * DTO for updating a translation
 */
export interface UpdateTranslationDto {
  text?: string;
  definition?: string;
  wordId?: number;
  languageId?: number;
}
