import { JsonPipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { FieldState } from '@angular/forms/signals';

@Component({
  selector: 'lib-debug-panel',
  imports: [JsonPipe],
  templateUrl: './debug-panel.html',
  styleUrl: './debug-panel.scss',
})
export class DebugPanel {
  readonly form = input.required<FieldState<unknown>>();
  readonly formValue = computed(() => this.form().value());
  readonly formValid = computed(() => this.form().valid());
  readonly formErrors = computed(() => this.form().errors());
  readonly formDirty = computed(() => this.form().dirty());
  readonly formTouched = computed(() => this.form().touched());
}
