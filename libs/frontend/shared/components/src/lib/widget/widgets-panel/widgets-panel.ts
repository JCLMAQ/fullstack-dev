import { Component, inject } from '@angular/core';
import { DashboardStore } from '../../dashboard/stores/dashboard.store';

@Component({
  selector: 'lib-widgets-panel',
  imports: [],
  templateUrl: './widgets-panel.html',
  styleUrl: './widgets-panel.scss',
})
export class WidgetsPanel {
  store = inject(DashboardStore);
}
