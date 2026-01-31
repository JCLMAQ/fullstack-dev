import { Component, inject } from '@angular/core';
import { AppStore } from '@fe/stores';

@Component({
  selector: 'lib-dictionary',
  imports: [],
  templateUrl: './dictionary.html',
  styleUrl: './dictionary.scss',
})
export class Dictionary {

  store = inject(AppStore);


}
