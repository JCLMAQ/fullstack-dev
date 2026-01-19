import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenStorageService } from '@fe/core/auth';
import { Observable } from 'rxjs';

export function AuthInterceptor (request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    console.log('🔍 AuthInterceptor - URL:', request.url);

    // Injecter le TokenStorageService au lieu de lire directement localStorage
    const tokenStorage = inject(TokenStorageService);
    const token = tokenStorage.authToken();

    console.log('🔍 AuthInterceptor - Token from service:', token ? '***' : 'null');

    // Routes qui n'ont pas besoin d'authentification
    const publicRoutes = [
        '/authentication/sign-in',
        '/authentication/register',
        '/authentication/register-extended',
        '/authentication/check-credentials',
        '/authentication/reset-password',
        '/authentication/forgot-password',
    ];

    // URLs externes qui ne doivent pas recevoir withCredentials ni token
    const externalUrls = [
        'ipapi.co',
        'api.country.is',
        'ip-api.com',
        'geolocation-db.com'
    ];

    const isExternalUrl = externalUrls.some((url) => request.url.includes(url));

    if (isExternalUrl) {
        console.log('🌍 URL externe - pas de token ni credentials');
        return next(request);
    }

    const isPublicRoute = publicRoutes.some((route) => request.url.includes(route));

    if (isPublicRoute) {
        console.log('✅ Route publique - pas de token nécessaire');
        return next(request);
    }

    if (!token) {
        console.log('❌ Aucun token trouvé');
        return next(request);
    }

    // Cloner la requête et ajouter le header Authorization et withCredentials
    const cloned = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`),
        withCredentials: true // Permet l'envoi des cookies avec les requêtes cross-origin
    });

    console.log('✅ Token ajouté au header Authorization + withCredentials activé');
    return next(cloned);
}



