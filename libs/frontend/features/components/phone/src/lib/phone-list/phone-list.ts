
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { PhoneStore } from '../store/phone-store';

@Component({
  selector: 'lib-phone-list',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './phone-list.html',
  styleUrl: './phone-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneList {
  readonly store = inject(PhoneStore);
  private readonly router = inject(Router);

  showDetail(id: string | number): void {
    this.store.setSelectedId(String(id));
  }

  navigateToDetail(id: string | number): void {
    void this.router.navigate(['/phones/detail', String(id)]);
  }

  closeDetail(): void {
    this.store.setSelectedId(null);
  }
}
