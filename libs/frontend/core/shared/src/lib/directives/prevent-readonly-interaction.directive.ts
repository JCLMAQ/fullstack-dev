import { Directive, ElementRef, HostListener, inject } from '@angular/core';

/**
 * Directive to prevent all interactions on readonly inputs
 * Blocks: text selection, keyboard input, paste, cut, copy, drag
 */
@Directive({
  selector: 'input[readonly]',
  standalone: true,
})
export class PreventReadonlyInteractionDirective {
  private readonly el = inject(ElementRef);

  constructor() {
    // Prevent text selection
    this.el.nativeElement.style.userSelect = 'none';
    this.el.nativeElement.style.webkitUserSelect = 'none';
    this.el.nativeElement.style.cursor = 'not-allowed';
  }

  @HostListener('keydown', ['$event'])
  @HostListener('keyup', ['$event'])
  preventKeyboardInput(event: KeyboardEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('cut', ['$event'])
  @HostListener('copy', ['$event'])
  @HostListener('paste', ['$event'])
  preventClipboard(event: ClipboardEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('drag', ['$event'])
  @HostListener('drop', ['$event'])
  preventDrag(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('mousedown', ['$event'])
  preventMouseSelection(event: MouseEvent): void {
    // Allow some events but prevent text selection
    if (event.detail > 1) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  @HostListener('selectstart', ['$event'])
  preventSelectStart(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }
}
