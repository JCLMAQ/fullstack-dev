import { inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { map, Observable } from 'rxjs';
import { ConfirmDialog, type ConfirmDialogData } from './confirm-dialog';

@Injectable({ providedIn: 'root' })
export class ConfirmDialogService {
  private readonly dialog = inject(MatDialog);
  private readonly translate = inject(TranslateService);

  confirm(
    data: ConfirmDialogData,
    config: MatDialogConfig<ConfirmDialogData> = {}
  ): Observable<boolean> {
    return this.dialog
      .open(ConfirmDialog, { width: '400px', ...config, data })
      .afterClosed()
      .pipe(map(Boolean));
  }

  confirmDelete(
    permanent: boolean,
    config: MatDialogConfig<ConfirmDialogData> = {}
  ): Observable<boolean> {
    return this.confirm(
      {
        title: this.translate.instant(permanent ? 'common.deletePermanent' : 'common.deleteTitle'),
        message: this.translate.instant(permanent ? 'common.deletePermanentMsg' : 'common.deleteMsg'),
        confirmText: this.translate.instant('common.delete'),
        cancelText: this.translate.instant('common.cancel'),
        confirmColor: 'warn',
      },
      config
    );
  }
}
