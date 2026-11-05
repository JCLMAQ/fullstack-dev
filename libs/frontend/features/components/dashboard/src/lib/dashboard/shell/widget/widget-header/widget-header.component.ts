import {
  Component,
  inject,
  output
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { isInteractiveHeaderTarget } from '../../../engine/drag/touch-long-press.session';
import { WidgetStore } from '../widget.store';

@Component({
  selector: 'lib-widget-header',
  imports: [MatIcon, MatButtonModule],
  template: `
    @if (store.widget(); as widget) {
    <div
      class="relative mb-3 cursor-grab touch-none rounded-md transition-colors duration-150 active:cursor-grabbing focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      [style.--mat-icon-button-icon-color]="widget.color ?? 'inherit'"
      tabindex="0"
      [attr.aria-label]="'Drag ' + widget.label + ' widget'"
      [attr.aria-grabbed]="store.isKeyboardLifted() ? 'true' : 'false'"
      [attr.aria-description]="
        'Press Space or Enter to lift, arrow keys to move, Space or Enter to drop, Escape to cancel.'
      "
      [attr.aria-keyshortcuts]="'Space Enter ArrowLeft ArrowRight ArrowUp ArrowDown Escape'"
      (pointerdown)="onHeaderPointerDown($event)"
      (keydown)="store.onHeaderKeyDown($event)"
    >
      <div class="flex items-center gap-0.5 pr-10">
        <mat-icon
          class="-ml-1 inline-flex! size-5 shrink-0 items-center justify-center text-xl! leading-none text-current/60"
          aria-hidden="true"
          >drag_indicator</mat-icon
        >
        <h3 class="text-xl leading-none">{{ widget.label }}</h3>
      </div>

      @if (store.contextualControlsVisible() || store.isKeyboardLifted()) {
      <div
        class="absolute top-1/2 right-0 -mr-3 -translate-y-1/2"
        (pointerdown)="$event.stopPropagation()"
      >
        <button
          matIconButton
          type="button"
          [attr.aria-label]="'Delete ' + widget.label + ' widget'"
          (click)="store.openOptions()"
        >
          <mat-icon>delete</mat-icon>
        </button>
      </div>
      }
    </div>
    }
  `,
})
export class WidgetHeaderComponent {
  readonly store = inject(WidgetStore);

  dragStart = output<PointerEvent>();

  onHeaderPointerDown(event: PointerEvent): void {
    if (event.button !== 0 || isInteractiveHeaderTarget(event.target)) {
      return;
    }

    this.store.onHeaderPointerDown();
    this.dragStart.emit(event);
  }
}
