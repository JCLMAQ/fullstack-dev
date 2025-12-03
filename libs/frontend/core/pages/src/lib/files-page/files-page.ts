
import { Component, computed, inject } from '@angular/core';
import { FileMgt } from '@fe/file-mgt';
import { AppStore } from '@fe/stores';

@Component({
  selector: 'lib-files-page',
  imports: [
    FileMgt
  ],
  templateUrl: './files-page.html',
  styleUrl: './files-page.scss',
})
export class FilesPage {
  private readonly appStore = inject(AppStore);
  readonly userId = computed(() => this.appStore.user()?.id ?? '');
}
