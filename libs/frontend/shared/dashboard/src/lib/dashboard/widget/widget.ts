import { CdkDrag, CdkDragPlaceholder } from '@angular/cdk/drag-drop';
import { NgComponentOutlet } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { WidgetDashboard } from '../models/dashboard';
import { DashboardStore } from '../stores/dashboard.store';
import { WidgetHeader } from './widget-header/widget-header';
import { WidgetOptions } from './widget-options/widget-options';

@Component({
  selector: 'lib-widget',
  imports: [
      WidgetHeader,
      WidgetOptions,
      NgComponentOutlet,
      CdkDrag,
      CdkDragPlaceholder,
  ],
  templateUrl: './widget.html',
  styleUrl: './widget.scss',
})
export class Widget {

  data = input.required<WidgetDashboard>();

  store = inject(DashboardStore);

  showOptions = signal(false);

}
