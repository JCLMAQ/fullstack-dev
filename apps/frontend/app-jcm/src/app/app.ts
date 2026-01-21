import { Component, effect, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdleTimeoutService } from '@fe/auth';

import { AppStore } from '@fe/stores';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SUPPORTED_LANGS } from './data/dictionaries';

// TODO : solve Circular dependency issue

@Component({
  imports: [
    RouterModule,
    TranslateModule
  ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  protected title = 'app-jcm';

  appStore = inject(AppStore);
  ngxtranslateService = inject(TranslateService);

  // Force l'instanciation du service IdleTimeoutService pour activer l'auto-logout
  private _idleTimeout = inject(IdleTimeoutService);

   currentLang = signal(this.ngxtranslateService.getCurrentLang()); // get current language

  constructor() {
    const translateService = this.ngxtranslateService;
    translateService.addLangs(SUPPORTED_LANGS);
    // translateService.use(translateService.getBrowserLang() || 'en'); // use browser language by default


// Synchronisation de la langue entre le store et ngxTranslate
    effect(() => {
    const lang = this.appStore['selectedLanguage']();
    if (lang && lang !== translateService.getCurrentLang()) {
      translateService.use(lang);
      this.currentLang.set(lang);
    } else {
      this.currentLang.set(translateService.getCurrentLang());
    }
  });

    // Le store AppStore s'initialise automatiquement grâce à withHooks({ onInit })
    // Mais on peut forcer une synchronisation si nécessaire
    console.log('🚀 App initialized - AppStore should be synced with localStorage');
  }

  // currentLang = signal(this.ngxtranslateService.getCurrentLang()); // get current language
  // logCurrentLang = effect(() => {
  //     console.log("🌐 Current Language (app.ts):", this.currentLang());
  //   });

  logCurrentUser = effect(() => {
    const user = this.appStore.user();
    const authToken = this.appStore.authToken();
    console.log("👤 AppStore User (app.ts):", user?.email || 'undefined');
    console.log("🔐 AppStore AuthToken (app.ts):", authToken ? '***' : 'undefined');
  });

}
