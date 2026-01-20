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
import { IamAuth } from './iam-auth';

@Injectable({ providedIn: 'root' })
export class IamAuthInterceptor implements HttpInterceptor {
  private readonly iamAuth = inject(IamAuth);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.iamAuth.getAccessToken();
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
          return from(this.iamAuth.refreshToken()).pipe(
            switchMap(tokens => {
              const newAccessToken = tokens.accessToken;
              const retryReq = req.clone({
                setHeaders: { Authorization: `Bearer ${newAccessToken}` },
              });
              return next.handle(retryReq);
            }),
            catchError(refreshErr => {
              this.iamAuth.logout();
              return throwError(() => refreshErr);
            })
          );
        }
        return throwError(() => error);
      })
    );
  }
}
