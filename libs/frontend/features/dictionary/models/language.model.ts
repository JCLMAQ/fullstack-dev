/**
 * Language model for frontend - mirrors Prisma Language schema
 */
export interface Language {
  id: number;
  code: string; // e.g., "en", "fr", "es"
  name: string; // e.g., "English", "Français", "Español"
}

/**
 * DTO for creating a new language
 */
export interface CreateLanguageDto {
  code: string;
  name: string;
}

/**
 * DTO for updating a language
 */
export interface UpdateLanguageDto {
  code?: string;
  name?: string;
}
