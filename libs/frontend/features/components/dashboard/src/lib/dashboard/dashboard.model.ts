import { Type } from '@angular/core';

export type Widget = {
  id: number;
  label: string;
  content: Type<unknown>;
  rows?: number;
  columns?: number;
  backgroundColor?: string;
  color?: string;
};

export type UserDashboard = {
  widgets: Widget[];
  items: DashboardLayoutItem[];
  mobileOrder: number[];
};

export type DashboardLayoutItem = {
  widgetId: number;
  row: number;
  column: number;
  rows: number;
  columns: number;
};

export type DashboardLayoutDocument = {
  version: 1;
  items: DashboardLayoutItem[];
  mobileOrder: number[];
};

export const DASHBOARD_LAYOUT_VERSION = 1 as const;
