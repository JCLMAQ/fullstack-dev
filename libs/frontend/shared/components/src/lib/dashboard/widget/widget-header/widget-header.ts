import { Component, inject, input, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Widget } from '../../dashboard/models/dashboard';
import { DashboardStore } from '../../dashboard/stores/dashboard.store';

@Component({
  selector: 'lib-widget-header',
  imports: [
    MatIcon,
    MatButtonModule
  ],
  templateUrl: './widget-header.html',
  styleUrl: './widget-header.scss',
})
export class WidgetHeader {

  data = input.required<Widget>();
  showOptions = model.required<boolean>();
  store = inject(DashboardStore);

}
