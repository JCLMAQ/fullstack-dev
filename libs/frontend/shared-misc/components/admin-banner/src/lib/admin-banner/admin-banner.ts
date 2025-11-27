import { Component, computed, inject } from '@angular/core';
import { AppStore } from '@fe/stores';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'lib-admin-banner',
  imports: [TranslateModule],
  templateUrl: './admin-banner.html',
  styleUrl: './admin-banner.scss',
})
export class AdminBanner {

 private readonly appStore = inject(AppStore);

  // Signal pour l’état admin (réactif)
readonly isAdmin = computed(() => this.appStore.isAdmin());

}
