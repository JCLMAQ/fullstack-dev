import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class Toaster {
  private readonly snackBar = inject(MatSnackBar);

  success(message: string): void {
    this.show(message);
  }
  error(message: string): void {
    this.show(message);
  }
  loading(message: string): void {
    this.show(message);
  }

  private show(message: string): void {
    this.snackBar.open(message, 'OK', { duration: 2500 });
  }
}
