import { Injectable } from '@angular/core';
import { widgetsDirectory } from './catalog/widgets.registry';
import { DashboardLayoutDocument, UserDashboard } from './dashboard.model';
import {
  cloneDefaultLayoutDocument,
  hydrateLayoutDocument,
  isValidLayoutDocument,
  normalizeLayoutDocument,
  packItemsFirstFit,
} from './engine/grid/dashboard-layout.helper';

export const DASHBOARD_LAYOUT_KEY = 'dashboardLayout';

/** Local persistence only. Legacy keys remain available until logout for recovery. */
@Injectable({ providedIn: 'root' })
export class DashboardService {
  async fetchWidgets(): Promise<UserDashboard> {
    const raw = localStorage.getItem(DASHBOARD_LAYOUT_KEY);
    let layout: DashboardLayoutDocument;
    if (raw !== null) {
      const stored: unknown = JSON.parse(raw);
      if (!isValidLayoutDocument(stored)) {
        throw new Error('Invalid dashboard layout');
      }
      layout = this.normalize(stored);
    } else {
      layout = this.migrateLegacyLayout() ?? cloneDefaultLayoutDocument();
      // Write the new document before considering migration successful.
      await this.saveLayout(layout);
    }
    return hydrateLayoutDocument(layout);
  }

  async saveLayout(layout: DashboardLayoutDocument): Promise<void> {
    if (!isValidLayoutDocument(layout)) {
      throw new Error('Invalid dashboard layout');
    }
    localStorage.setItem(DASHBOARD_LAYOUT_KEY, JSON.stringify(this.normalize(layout)));
  }

  clearDashboardData(): void {
    for (const key of [DASHBOARD_LAYOUT_KEY, 'dashboardWidgets', 'dashboardWidgetsOrder']) {
      localStorage.removeItem(key);
    }
  }

  private normalize(layout: DashboardLayoutDocument): DashboardLayoutDocument {
    return normalizeLayoutDocument(layout, widgetsDirectory.map(widget => widget.id));
  }

  private migrateLegacyLayout(): DashboardLayoutDocument | null {
    const raw = localStorage.getItem('dashboardWidgets');
    if (raw === null) return null;
    const widgets: unknown = JSON.parse(raw);
    const rawOrder = localStorage.getItem('dashboardWidgetsOrder');
    const order: unknown = rawOrder === null ? [] : JSON.parse(rawOrder);
    if (!Array.isArray(widgets) || !Array.isArray(order) ||
        !order.every(id => Number.isSafeInteger(id))) {
      throw new Error('Invalid legacy dashboard');
    }

    const sizes = new Map<number, { widgetId: number; rows: number; columns: number }>();
    for (const widget of widgets) {
      if (typeof widget !== 'object' || widget === null || !Number.isSafeInteger(widget.id)) {
        throw new Error('Invalid legacy widget');
      }
      if (!widgetsDirectory.some(entry => entry.id === widget.id)) continue;
      const columns = widget.columns ?? 1;
      const rows = widget.rows ?? 1;
      if (!Number.isSafeInteger(columns) || columns < 1 || columns > 4 ||
          !Number.isSafeInteger(rows) || rows < 1 || rows > 100) {
        throw new Error('Invalid legacy widget dimensions');
      }
      // Old grid: four columns, 150px rows, 16px gaps. New grid: 12 columns, 80px rows.
      sizes.set(widget.id, {
        widgetId: widget.id,
        columns: columns * 3,
        rows: Math.ceil(rows * 166 / 80),
      });
    }
    const ids = [...new Set<number>([...order, ...sizes.keys()])].filter(id => sizes.has(id));
    return {
      version: 1,
      items: packItemsFirstFit(ids.map(id => sizes.get(id)!)),
      mobileOrder: ids,
    };
  }
}
