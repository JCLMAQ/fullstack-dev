
import { Component, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export type IdleWarningDialogData = { remaining: number, loggedOut?: boolean };

@Component({
  selector: 'lib-auth-idle-warning-dialog',
  templateUrl: './idle-warning-dialog.html',
  styleUrls: ['./idle-warning-dialog.scss'],
})
export class IdleWarningDialog {
  public data: IdleWarningDialogData;
  protected remaining;
  protected loggedOut: boolean;
  private intervalId: any;
  private dialogRef;

  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this.dialogRef = inject(MatDialogRef<IdleWarningDialog>);
    this.remaining = signal(this.data.remaining);
    this.loggedOut = !!this.data.loggedOut;
    if (!this.loggedOut) {
      this.startCountdown();
    }
  }

  private startCountdown() {
    this.intervalId = setInterval(() => {
      const next = this.remaining() - 1;
      this.remaining.set(next);
      if (next <= 0) {
        clearInterval(this.intervalId);
        this.dialogRef.close();
      }
    }, 1000);
  }

  stayConnected() {
    clearInterval(this.intervalId);
    this.dialogRef.close('stay');
  }
}

