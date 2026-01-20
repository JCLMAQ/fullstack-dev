import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {
  private readonly authService = inject(AuthService);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.authService.getAccessToken();
    let authReq = req;
    if (accessToken) {
      authReq = req.clone({
        setHeaders: { Authorization: `Bearer ${accessToken}` },
      });
    }
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && !authReq.url.endsWith('/auth/refresh-tokens')) {
          // Tente un refresh puis rejoue la requête
          return from(this.authService.refreshTokens()).pipe(
            switchMap(() => {
              const newAccessToken = this.authService.getAccessToken();
              const retryReq = req.clone({
                setHeaders: { Authorization: `Bearer ${newAccessToken}` },
              });
              return next.handle(retryReq);
            }),
            catchError(refreshErr => {
              this.authService.logout();
              return throwError(() => refreshErr);
            })
          );
        }
        return throwError(() => error);
      })
    );
  }
}
