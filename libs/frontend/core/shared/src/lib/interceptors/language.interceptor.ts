import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AppStore } from '@fe/stores';
import { Observable } from 'rxjs';

export function LanguageInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const appStore = inject(AppStore);
  const currentLang = appStore['selectedLanguage']();

  if (currentLang) {
    console.log(`🌐 LanguageInterceptor - Adding x-custom-lang header: ${currentLang}`);

    request = request.clone({
      setHeaders: {
        'x-custom-lang': currentLang,
      },
    });
  }

  return next(request);
}
