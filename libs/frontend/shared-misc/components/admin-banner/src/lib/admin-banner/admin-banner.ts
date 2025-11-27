import { Component, computed, inject } from '@angular/core';
import { AppStore } from '@fe/stores';

@Component({
  selector: 'lib-admin-banner',
  imports: [],
  templateUrl: './admin-banner.html',
  styleUrl: './admin-banner.scss',
})
export class AdminBanner {

 private readonly appStore = inject(AppStore);

  // Signal pour l’état admin (réactif)
readonly isAdmin = computed(() => this.appStore.isAdmin());

}
