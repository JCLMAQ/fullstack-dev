import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export class MultiTranslateHttpLoader implements TranslateLoader {
  constructor(
    private http: HttpClient,
    public resources: { prefix: string; suffix: string }[]
  ) {}

  public getTranslation(lang: string): Observable<any> {
    return forkJoin(
      this.resources.map((config) =>
        this.http.get(`${config.prefix}${lang}${config.suffix}`).pipe(
          catchError((error) => {
            /*your error handling logic per resource*/
            console.error(`Could not load translations for lang: ${lang}`, error);
            return of({});
          })
        )
      )
    ).pipe(map((response) => Object.assign({}, ...response)));
  }
}
