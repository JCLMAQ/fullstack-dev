import { Controller, Get, Param } from '@nestjs/common';
import { Public } from '@be/iam';
import { DictionariesService } from './dictionaries.service';

/**
 * Controller for optimized dictionary endpoints
 * Provides aggregated views of translations grouped by language
 */
@Controller('dictionaries')
export class DictionariesController {
  constructor(private readonly dictionariesService: DictionariesService) {}

  /**
   * Get all dictionaries grouped by language code
   * Returns: { en: { key: value }, fr: { key: value }, ... }
   * @Public endpoint - no authentication required
   */
  @Public()
  @Get('all')
  async getAllDictionaries() {
    return this.dictionariesService.getAllDictionaries();
  }

  /**
   * Get dictionary for a specific language
   * Returns: { key: value, ... }
   * @Public endpoint - no authentication required
   */
  @Public()
  @Get(':languageCode')
  async getDictionaryByLanguage(@Param('languageCode') languageCode: string) {
    return this.dictionariesService.getDictionaryByLanguage(languageCode);
  }

  /**
   * Get all translations for a specific word
   * Returns: { slug: "apple", type: "WORD", translations: { en: "apple", fr: "pomme" } }
   * @Public endpoint - no authentication required
   */
  @Public()
  @Get('word/:slug/translations')
  async getWordTranslations(@Param('slug') slug: string) {
    return this.dictionariesService.getWordTranslations(slug);
  }
}
