import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * Interceptor for handling dictionaries API errors
 * Provides centralized error logging for dictionary-related requests
 */
export function dictionariesErrorInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  // Only intercept dictionaries API requests
  if (!request.url.includes('/dictionaries')) {
    return next(request);
  }

  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      // Centralized error logging for dictionaries
      console.error('❌ Dictionaries API Error:', {
        url: request.url,
        status: error.status,
        statusText: error.statusText,
        message: error.message,
        error: error.error,
      });

      // Re-throw the error so httpResource can handle it
      return throwError(() => error);
    })
  );
}
