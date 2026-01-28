import type { Translation } from './translation.model';

/**
 * Dictionary entry type - mirrors Prisma DictioEntryType enum
 */
export enum DictioEntryType {
  WORD = 'WORD',
  PHRASE = 'PHRASE',
  SENTENCE = 'SENTENCE',
  IDIOM = 'IDIOM',
}

/**
 * Word model for frontend - mirrors Prisma Word schema
 */
export interface Word {
  id: number;
  slug: string; // Unique identifier like "apple-fruit"
  createdAt: string;
  type: DictioEntryType;
  translations?: Translation[];
}

/**
 * DTO for creating a new word
 */
export interface CreateWordDto {
  slug: string;
  type: DictioEntryType;
}

/**
 * DTO for updating a word
 */
export interface UpdateWordDto {
  slug?: string;
  type?: DictioEntryType;
}
