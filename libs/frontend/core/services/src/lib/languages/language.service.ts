import { HttpClient, httpResource } from '@angular/common/http';
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
  private readonly http = inject(HttpClient);
  private readonly environment = inject(ENVIRONMENT_TOKEN);
  private readonly resourceFactory = (httpResource as unknown) as (
    config: { loader: () => unknown; default?: unknown }
  ) => unknown;
  private readonly apiPrefix = computed(() => {
    const prefix = this.environment.API_BACKEND_PREFIX ?? '';
    return prefix.replace(/^\//, '').replace(/\/$/, '');
  });

  availableLanguagesResource(): unknown {
    const url = `${this.apiPrefix()}/languages`;
    return this.resourceFactory({
      loader: () =>
        this.http.get<Language[]>(url).toPromise().then((languages) => {
          const codes = (languages ?? []).map((lang) => lang.code);
          console.log(`✅ Languages loaded from API: ${codes.join(', ')}`);
          return codes;
        }),
      default: DEFAULT_FALLBACK_LANGUAGES,
    });
  }
}
