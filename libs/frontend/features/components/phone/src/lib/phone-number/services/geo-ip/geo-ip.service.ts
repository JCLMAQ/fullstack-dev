import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GeoData } from '../../types/geo.type';

@Injectable()
export class GeoIpService {
  private readonly http = inject(HttpClient);

  /**
   * geoIpLookup function makes an HTTP GET request to retrieve geographical data based on the client's IP address.
   *
   * @return {Observable<GeoData>} an observable of GeoData containing geographical information
   */
  geoIpLookup(): Observable<GeoData> {
    return this.http.get<GeoData>('https://ipapi.co/json', {
      withCredentials: false
    }).pipe(
      catchError((error) => {
        console.warn('Primary GeoIP service failed, trying alternative...', error);
        // Fallback vers une API alternative qui fonctionne mieux avec CORS
        return this.http.get<{ country: string }>('https://api.country.is', {
          withCredentials: false
        }).pipe(
          map(response => ({
            country_code: response.country
          } as Partial<GeoData> as GeoData)),
          catchError(() => {
            // Si tout échoue, retourner des données par défaut pour la Belgique
            console.warn('All GeoIP services failed, using default country BE');
            return of({
              country_code: 'BE'
            } as Partial<GeoData> as GeoData);
          })
        );
      })
    );
  }
}
