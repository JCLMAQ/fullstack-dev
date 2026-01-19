import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export function LanguageInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  // Skip adding header for translation file requests to avoid circular dependency
  if (request.url.includes('/i18n/')) {
    return next(request);
  }

  // URLs externes qui ne doivent pas recevoir de headers personnalisés
  const externalUrls = [
    'ipapi.co',
    'api.country.is',
    'ip-api.com',
    'geolocation-db.com'
  ];

  const isExternalUrl = externalUrls.some((url) => request.url.includes(url));

  if (isExternalUrl) {
    console.log('🌍 LanguageInterceptor - URL externe, pas de header x-custom-lang');
    return next(request);
  }

  // Read language from localStorage (set by AppStore/TranslateService)
  const storedAppState = localStorage.getItem('AppStore');
  let currentLang = 'fr'; // default fallback

  if (storedAppState) {
    try {
      const appState = JSON.parse(storedAppState);
      currentLang = appState.selectedLanguage || 'fr';
    } catch (error) {
      console.error('Failed to parse AppStore from localStorage', error);
    }
  }

  console.log(`🌐 LanguageInterceptor - Adding x-custom-lang header: ${currentLang}`);

  request = request.clone({
    setHeaders: {
      'x-custom-lang': currentLang,
    },
  });

  return next(request);
}
