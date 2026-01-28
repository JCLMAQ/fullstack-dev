import { PrismaClientService } from '@db/prisma-client';
import { Injectable } from '@nestjs/common';

/**
 * Service for providing optimized dictionary data
 * Aggregates translations from database into format compatible with frontend
 */
@Injectable()
export class DictionariesService {
  constructor(private readonly prisma: PrismaClientService) {}

  /**
   * Get all dictionaries grouped by language code
   * Returns format: { en: { key: value }, fr: { key: value }, ... }
   */
  async getAllDictionaries() {
    // Get all languages
    const languages = await this.prisma.language.findMany({
      select: { id: true, code: true },
    });

    // Get all words with their translations
    const words = await this.prisma.word.findMany({
      include: {
        translations: {
          include: {
            language: true,
          },
        },
      },
    });

    // Build dictionaries object grouped by language
    const dictionaries: Record<string, Record<string, string>> = {};
    const languageCodes: string[] = [];

    // Initialize dictionaries for each language
    languages.forEach((lang) => {
      dictionaries[lang.code] = {};
      languageCodes.push(lang.code);
    });

    // Populate dictionaries with translations
    words.forEach((word) => {
      word.translations.forEach((translation) => {
        const langCode = translation.language.code;
        // Use word slug as key and translation text as value
        dictionaries[langCode][word.slug] = translation.text;
      });
    });

    return {
      dictionaries,
      languages: languageCodes,
    };
  }

  /**
   * Get dictionary for a specific language
   * Returns format: { key: value, ... }
   */
  async getDictionaryByLanguage(languageCode: string) {
    // Get language
    const language = await this.prisma.language.findUnique({
      where: { code: languageCode },
    });

    if (!language) {
      throw new Error(`Language ${languageCode} not found`);
    }

    // Get all translations for this language
    const translations = await this.prisma.translation.findMany({
      where: { languageId: language.id },
      include: {
        word: true,
      },
    });

    // Build dictionary object
    const dictionary: Record<string, string> = {};
    translations.forEach((translation) => {
      dictionary[translation.word.slug] = translation.text;
    });

    return dictionary;
  }

  /**
   * Get all translations for a specific word grouped by language
   * Returns format: { slug: "apple", type: "WORD", translations: { en: "apple", fr: "pomme" } }
   */
  async getWordTranslations(slug: string) {
    const word = await this.prisma.word.findUnique({
      where: { slug },
      include: {
        translations: {
          include: {
            language: true,
          },
        },
      },
    });

    if (!word) {
      throw new Error(`Word ${slug} not found`);
    }

    // Build translations object grouped by language code
    const translations: Record<string, string> = {};
    word.translations.forEach((translation) => {
      translations[translation.language.code] = translation.text;
    });

    return {
      slug: word.slug,
      type: word.type,
      translations,
    };
  }
}
