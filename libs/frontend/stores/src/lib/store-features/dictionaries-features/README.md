# Dictionaries Feature Store

Gestion dynamique des dictionnaires (traductions) depuis l'API backend avec état automatique et gestion centralisée des erreurs.

## Architecture

```
API Backend (/api/dictionaries/all)
    ↓
DictionaryApiService
    ├─ dictionariesUrl() : Signal<string>  [URL réactive]
    └─ loadAllDictionaries() : Observable<DictionariesResponse>
    ↓
httpResource<DictionariesResponse>  [Gestion auto: loading, error, value]
    ↓
Store (AppStore + withDictionariesFeatures)
    ├─ État: selectedLanguage
    └─ Signaux: dictionariesValue, dictionariesLoading, dictionariesError, selectedDictionary
```

## État du Store

| Signal | Type | Source | Usage |
|--------|------|--------|-------|
| `dictionariesValue()` | `Dictionaries` | httpResource.value()?.dictionaries | Dictionnaires complets |
| `dictionariesLoading()` | `boolean` | httpResource.isLoading() | Afficher spinner |
| `dictionariesError()` | `Error \| null` | httpResource.error() | Afficher erreur |
| `selectedDictionary()` | `Dictionary` | getDictionaryHelper(...) | Traductions langue active |
| `selectedLanguage` | `string` | Writable state | Langue courante |

### Types

```typescript
type Dictionary = Record<string, string>;           // { key: value }
type Dictionaries = Record<string, Dictionary>;     // { en: {...}, fr: {...} }

interface DictionariesResponse {
  dictionaries: Dictionaries;
  languages: string[];
}
```

## Exemple dans un composant: 

```typescript
// Dans un composant
constructor(private store = inject(AppStore)) {}

dicts = this.store.dictionariesValue;  // Record<lang, Dictionary>
loading = this.store.dictionariesLoading;  // boolean
error = this.store.dictionariesError;  // Error | null
currentLang = this.store.selectedDictionary;  // Current language dict
```

## Flux de Chargement

### 1. Initialisation

```typescript
// withHooks.onInit() lance automatiquement:
store.loadDictionaries();  // Recharge depuis l'API

// Détecte la langue du navigateur
const browserLang = translateService.getBrowserLang() || 'en';
store.switchLanguage(browserLang);
```

### 2. Gestion Automatique par httpResource

- **Loading** : `isLoading()` = `true` pendant la requête
- **Success** : `value()` peuplé, `error()` = `null`
- **Error** : Loggée par `dictionariesErrorInterceptor`, `error()` accessible

### 3. Exposition aux Composants

```typescript
// Accès direct
store.dictionariesValue()        // Record<language, Dictionary>
store.dictionariesLoading()      // boolean
store.dictionariesError()        // Error | null

// Traductions filtrées par langue sélectionnée
store.selectedDictionary()       // Dictionary (traductions actuelles)
store.selectedLanguage()         // string (code langue: 'en', 'fr', etc.)
```

## Actions Disponibles

### `loadDictionaries()`

Recharge les dictionnaires depuis l'API. Utilise `httpResource.reload()`.

```typescript
store.loadDictionaries();
```

### `changeLanguage()`

Bascule vers la langue suivante dans la liste des langues disponibles.

```typescript
store.changeLanguage();  // en → fr → de → ...
```

### `switchLanguage(language: string)`

Change vers une langue spécifique.

```typescript
store.switchLanguage('fr');
store.switchLanguage('en');
```

### `resetDictionaries()`

Réinitialise l'état (appelé à la déconnexion).

```typescript
store.resetDictionaries();
```

## Gestion des Erreurs

### Interceptor Centralisé

L'erreur est capturée et loggée par **`dictionariesErrorInterceptor`** dans [libs/frontend/core/shared/src/lib/interceptors/dictionaries.interceptor.ts](../../../../core/shared/src/lib/interceptors/dictionaries.interceptor.ts).

- Capture toutes les requêtes `/api/dictionaries/*`
- Log détaillé : URL, statut HTTP, message
- Re-lance l'erreur à `httpResource` qui la stocke dans `error()`

### Accès à l'Erreur dans les Composants

```typescript
import { AppStore } from '@app/core/stores';

export class MyComponent {
  constructor(private store = inject(AppStore)) {}

  dictionariesError = this.store.dictionariesError;

  // Template
  @if (dictionariesError()) {
    <div class="error">{{ dictionariesError().message }}</div>
  }
}
```

## Utilisation dans les Composants

### Exemple Simple

```typescript
import { AppStore } from '@app/core/stores';
import { inject } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `
    @if (store.dictionariesLoading()) {
      <mat-spinner></mat-spinner>
    } @else if (store.dictionariesError()) {
      <p>Erreur : {{ store.dictionariesError().message }}</p>
    } @else {
      <p>{{ store.selectedDictionary()['welcome_key'] }}</p>
      <button (click)="store.changeLanguage()">Changer langue</button>
    }
  `,
})
export class MyComponent {
  store = inject(AppStore);
}
```

### Avec Service

```typescript
import { AppStore } from '@app/core/stores';
import { computed, inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  #store = inject(AppStore);

  // Obtenir une traduction
  getTranslation(key: string): string {
    const dict = this.#store.selectedDictionary();
    return dict[key] ?? key;
  }

  // Obtenir une clé traduite avec fallback
  getTranslationSafe(key: string, fallback = ''): string {
    const dict = this.#store.selectedDictionary();
    return dict[key] ?? fallback ?? key;
  }

  // Computed pour tous les codes langues
  availableLanguages = computed(() => 
    Object.keys(this.#store.dictionariesValue())
  );

  currentLanguage = this.#store.selectedLanguage;
}
```

## Architecture Interne

### Flow de Données

```
┌─ withState
│  └─ selectedLanguage: string
│
├─ withMethods
│  └─ dictionariesResource: httpResource<DictionariesResponse>
│     ├─ value() : DictionariesResponse | undefined
│     ├─ isLoading() : boolean
│     ├─ error() : Error | null
│     └─ reload() : boolean
│
├─ withComputed
│  ├─ dictionariesValue()
│  ├─ dictionariesLoading()
│  ├─ dictionariesError()
│  └─ selectedDictionary()
│
└─ withHooks
   └─ onInit() : Charge dictionnaires + détecte langue navigateur
```

### Modules Impliqués

| Module | Rôle |
|--------|------|
| `DictionaryApiService` | Endpoint HTTP `/api/dictionaries/all` |
| `dictionariesErrorInterceptor` | Centralise les erreurs API |
| `AppStore` (withDictionariesFeatures) | Gère l'état des dictionnaires |
| `TranslateService` | Intégration ngx-translate |

## Points Importants

### ✅ httpResource vs rxMethod

- **Avant** : `rxMethod` + gestion manuelle (`_dictionariesLoading`, `_dictionariesError`, etc.)
- **Après** : `httpResource` + signaux automatiques ✨
- **Avantage** : Moins de code, pas d'état manuel, état toujours synchronized

### ✅ URL Réactive

- `dictionaryApi.dictionariesUrl()` est un **signal computed**
- Permet de changer l'URL dynamiquement si besoin (multi-environnement)
- `httpResource` ré-exécute le GET automatiquement si l'URL change

### ✅ Erreurs Centralisées

- Plus de `console.error()` dans le store
- L'interceptor capte et logue les erreurs
- Le store expose juste `error()` signal pour l'UI

### ✅ Signaux Publics Modernes
- API propre: `dictionariesValue()`, `dictionariesLoading()`, `dictionariesError()`
- Pas d'état "privé" (`_`) exposé publiquement
- Services consommateurs modernisés pour utiliser la nouvelle API

## Migration depuis rxMethod

Si vous avez du code ancien utilisant `rxMethod`, voici la migration:

**Avant:**

```typescript
loadDictionaries: rxMethod<void>(
  pipe(
    tap(() => patchState(store, { _dictionariesLoading: true })),
    switchMap(() => dictionaryApi.loadAllDictionaries().pipe(
      tap(dictionaries => patchState(store, {...})),
      catchError(error => patchState(store, {...}))
    ))
  )
),
```

**Après:**

```typescript
const dictionariesResource = httpResource<DictionariesResponse>(
  () => dictionaryApi.dictionariesUrl()
);

loadDictionaries: () => {
  dictionariesResource.reload();
},
```

## Debugging

### Vérifier l'État du Store

```typescript
// Dans la console du navigateur
const store = ng.probe(document.querySelector('app-root')).injector.get(AppStore);
console.log({
  dicts: store.dictionariesValue(),
  loading: store.dictionariesLoading(),
  error: store.dictionariesError(),
  lang: store.selectedLanguage()
});
```

### Logs Disponibles

```
🔄 Dictionaries reload triggered
🌐 Language changed to: fr
🌐 Language switched to: en
🌐 Detected Browser Language: fr
🔄 Dictionaries reset to initial state
❌ Dictionaries API Error: [détails]
```

## Ressources

- [NgRx Signals Store](https://ngrx.io/guide/signals/store)
- [httpResource Angular Docs](https://angular.dev/api/common/http/httpResource)
- [DictionaryApiService](../../../features/dictionary/data/dictionary-api.service.ts)
- [dictionariesErrorInterceptor](../../../../core/shared/src/lib/interceptors/dictionaries.interceptor.ts)

---

**Dernière mise à jour:** 28 janvier 2026  
**Auteur:** GitHub Copilot
