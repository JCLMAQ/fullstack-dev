import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Language } from '@db/prisma/browser';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';
import { Observable, catchError, map, of } from 'rxjs';

/**
 * Default supported languages fallback (matches SUPPORTED_LANGS from app)
 * If API fails, these languages will be used
 */
const DEFAULT_FALLBACK_LANGUAGES = ['en', 'fr', 'de', 'nl'];

// !!! TODO : Refactoriser en utilisant httpRessource
@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly http = inject(HttpClient);
  private readonly environment = inject(ENVIRONMENT_TOKEN);

  /**
   * Fetch available languages from API with fallback to static dictionary languages
   * @returns Observable<string[]> - Array of language codes (e.g., ['en', 'fr', 'de', 'nl'])
   */
  getAvailableLanguages(): Observable<string[]> {
    const apiPrefix = this.getApiPrefix();
    const endpoint = `${apiPrefix}/languages`;

    return this.http.get<Language[]>(endpoint).pipe(
      map((languages) => {
        // Extract language codes from API response
        const codes = languages.map((lang) => lang.code);
        console.log(`✅ Languages loaded from API: ${codes.join(', ')}`);
        return codes;
      }),
      catchError((error) => {
        // Fallback to static default languages if API call fails
        console.warn(
          `⚠️ Failed to load languages from API, falling back to default: ${error.message}`
        );
        return of(DEFAULT_FALLBACK_LANGUAGES);
      })
    );
  }

  /**
   * Get the API prefix, normalizing environment configuration
   * @returns string - API prefix (e.g., '/api', '/backend/api')
   */
  private getApiPrefix(): string {
    const prefix = this.environment.API_BACKEND_PREFIX ?? '';
    return prefix.replace(/^\//, '').replace(/\/$/, '');
  }
}
