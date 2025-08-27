import { Component, computed, input } from '@angular/core';


@Component({
    selector: 'lib-progress',
    imports: [],
    templateUrl: './progress.html',
    styleUrl: './progress.scss'
})
export class ProgressComponent {
  readonly value = input.required<number>();

  readonly max = input.required<number>();

  readonly ratio = computed(() => this.value() / this.max());

}
