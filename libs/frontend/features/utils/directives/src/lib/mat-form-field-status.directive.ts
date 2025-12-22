import { Directive, effect, inject, input } from '@angular/core';
import { type FieldState } from '@angular/forms/signals';
import { MatFormField } from '@angular/material/form-field';

/**
 * Directive pour appliquer des classes CSS au mat-form-field
 * basées sur l'état du formulaire Signal Forms
 */
@Directive({
  selector: 'mat-form-field[fieldState]',
  standalone: true,
})
export class MatFormFieldStatusDirective {
  readonly fieldState = input.required<FieldState<unknown>>();
  private readonly matFormField = inject(MatFormField);

  constructor() {
    effect(() => {
      const state = this.fieldState();
      const element = this.matFormField._elementRef.nativeElement as HTMLElement;

      // Retire toutes les classes de statut
      element.classList.remove(
        'ring-2',
        'ring-green-500',
        'border-green-500',
        'ring-red-500',
        'border-red-500',
        'bg-red-50',
        'animate-pulse',
        'bg-blue-50'
      );

      // Success State: Green ring when valid and dirty
      if (state.valid() && state.dirty()) {
        element.classList.add( 'ring-green-500', 'border-green-500', 'bg-green-50');
      }

      // Error State: Red ring when invalid and touched
      if (state.invalid() && state.touched()) {
        element.classList.add('ring-red-500', 'border-red-500', 'bg-red-50');
      }

      // Pending State: Blue pulse during async validation
      if (state.pending()) {
        element.classList.add('animate-pulse', 'bg-blue-50');
      }
    });
  }
}
