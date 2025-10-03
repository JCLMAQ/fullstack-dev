import { Component, inject, input, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIcon } from '@angular/material/icon';
import { Widget } from '../../dashboard/models/dashboard';
import { DashboardStore } from '../../dashboard/stores/dashboard.store';

@Component({
  selector: 'lib-widget-options',
  imports: [
    MatButtonToggleModule,
    MatIcon,
    MatButtonModule

  ],
  templateUrl: './widget-options.html',
  styleUrl: './widget-options.scss',
})
export class WidgetOptions {

 data = input.required<Widget>();
  showOptions = model.required<boolean>();
  store = inject(DashboardStore);

}
