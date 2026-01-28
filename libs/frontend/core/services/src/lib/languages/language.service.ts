import { httpResource, type HttpResourceRef } from '@angular/common/http';
import { computed, inject, Injectable } from '@angular/core';
import { Language } from '@db/prisma/browser';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';

/**
 * Default supported languages fallback (matches SUPPORTED_LANGS from app)
 * If API fails, these languages will be used
 */
const DEFAULT_FALLBACK_LANGUAGES = ['en', 'fr', 'de', 'nl'];

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly environment = inject(ENVIRONMENT_TOKEN);
  private readonly apiPrefix = computed(() => {
    const prefix = this.environment.API_BACKEND_PREFIX ?? '';
    return prefix.replace(/^\//, '').replace(/\/$/, '');
  });

  private readonly availableLanguagesResourceRef = httpResource<Language[]>(
    () => `${this.apiPrefix()}/languages`,
    {
      defaultValue: [],
      parse: (value) => (Array.isArray(value) ? (value as Language[]) : []),
    },
  );

  readonly availableLanguageCodes = computed(() => {
    const languages = this.availableLanguagesResourceRef.value();
    if (!languages || languages.length === 0) {
      return DEFAULT_FALLBACK_LANGUAGES;
    }
    const codes = languages
      .map((language) => language.code)
      .filter((code): code is string => Boolean(code));
    return codes.length > 0 ? codes : DEFAULT_FALLBACK_LANGUAGES;
  });

  readonly availableLanguagesLoading = computed(() =>
    this.availableLanguagesResourceRef.isLoading(),
  );

  readonly availableLanguagesError = computed(() =>
    this.availableLanguagesResourceRef.error(),
  );

  availableLanguagesResource(): HttpResourceRef<Language[]> {
    return this.availableLanguagesResourceRef;
  }

  reloadAvailableLanguages(): boolean {
    return this.availableLanguagesResourceRef.reload();
  }
}
