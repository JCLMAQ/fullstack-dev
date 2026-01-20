import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { from, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { IamAuth } from './iam-auth';

export const iamAuthInterceptorFn: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const iamAuth = inject(IamAuth);
  const accessToken = iamAuth.getAccessToken();
  let authReq = req;
  if (accessToken) {
    authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${accessToken}` },
    });
  }
  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 && !authReq.url.endsWith('/auth/refresh-tokens')) {
        return from(iamAuth.refreshToken()).pipe(
          switchMap(tokens => {
            const newAccessToken = tokens.accessToken;
            const retryReq = req.clone({
              setHeaders: { Authorization: `Bearer ${newAccessToken}` },
            });
            return next(retryReq);
          }),
          catchError(refreshErr => {
            iamAuth.logout();
            return throwError(() => refreshErr);
          })
        );
      }
      return throwError(() => error);
    })
  );
};
