// Si le token n'est plus valide va voir et charge le refresh token
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthTokenRefreshInterceptor implements HttpInterceptor {
	private authService = inject(AuthService);

	intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const authToken = this.authService.getAccessToken();
		let authReq = req;
		if (authToken) {
			authReq = req.clone({
				setHeaders: { Authorization: `Bearer ${authToken}` },
			});
		}
		return next.handle(authReq).pipe(
			catchError((error: HttpErrorResponse) => {
				if (error.status === 401) {
					const refreshToken = this.authService.getRefreshToken?.();
					if (refreshToken) {
						return this.authService.refreshToken(refreshToken).pipe(
							switchMap((tokens: { accessToken: string; refreshToken: string }) => {
								this.authService.setAccessToken(tokens.accessToken);
								if (tokens.refreshToken) {
									this.authService.setRefreshToken?.(tokens.refreshToken);
								}
								const retryReq = req.clone({
									setHeaders: { Authorization: `Bearer ${tokens.accessToken}` },
								});
								return next.handle(retryReq);
							}),
							catchError(refreshError => {
								this.authService.logout();
								return throwError(() => refreshError);
							})
						);
					} else {
						this.authService.logout();
						return throwError(() => error);
					}
				}
				return throwError(() => error);
			})
		);
	}
}
