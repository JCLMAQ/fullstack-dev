import { Component, effect, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppStore } from '@fe/stores';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

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

  constructor() {
    const translateService = this.ngxtranslateService;
    translateService.addLangs(['en','fr']);
    translateService.use(translateService.getBrowserLang() || 'en'); // use browser language by default

    // Le store AppStore s'initialise automatiquement grâce à withHooks({ onInit })
    // Mais on peut forcer une synchronisation si nécessaire
    console.log('🚀 App initialized - AppStore should be synced with localStorage');
  }

  currentLang = signal(this.ngxtranslateService.getCurrentLang()); // get current language

  // Effect pour logger les changements d'utilisateur (utile pour debug)
  logCurrentUser = effect(() => {
    const user = this.appStore.user();
    const authToken = this.appStore.authToken();
    console.log("👤 AppStore User:", user?.email || 'undefined');
    console.log("🔐 AppStore AuthToken:", authToken ? '***' : 'undefined');
  });

}
