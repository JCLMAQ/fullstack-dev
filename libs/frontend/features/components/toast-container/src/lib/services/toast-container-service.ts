import { Injectable, signal } from '@angular/core';

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

// TODO: add translation support: aria-label="Fermer la notification"
@Injectable({ providedIn: 'root' })
export class ToastService {
  // The state is just a signal. Simple.
  readonly toasts = signal<Toast[]>([]);
  show(message: string, type: Toast['type'] = 'info') {
    const id = Date.now();
    const newToast = { id, message, type };
    // Add to the stack
    this.toasts.update(current => [...current, newToast]);
    // Auto-remove after 3 seconds
    setTimeout(() => {
      this.remove(id);
    }, 3000);
  }
  remove(id: number) {
    this.toasts.update(current =>
      current.filter(t => t.id !== id)
    );
  }
}
