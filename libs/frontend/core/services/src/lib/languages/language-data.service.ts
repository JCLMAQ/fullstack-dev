import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

export interface Language {
  id: number;
  name: string;
  code: string;
}

@Injectable({ providedIn: 'root' })
export class LanguageDataService {
  private readonly apiUrl = '/api/languages';

  constructor(private readonly http: HttpClient) {}

  getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(this.apiUrl);
  }

  getLanguagesSignal() {
    return toSignal(this.getLanguages(), { initialValue: [] });
  }
}
