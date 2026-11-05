import { TestBed } from '@angular/core/testing';
import { Dashboard } from './dashboard';

jest.mock('chart.js/auto', () => ({
  __esModule: true,
  default: Object.assign(jest.fn(() => ({ destroy: jest.fn() })), { defaults: {} }),
}));

describe('Dashboard integration', () => {
  it('renders the persisted widgets and releases the grid observer on destroy', async () => {
    localStorage.setItem('dashboardLayout', JSON.stringify({
      version: 1,
      items: [{ widgetId: 6, row: 1, column: 1, rows: 3, columns: 3 }],
      mobileOrder: [6],
    }));
    const disconnect = jest.fn();
    const originalObserver = globalThis.ResizeObserver;
    globalThis.ResizeObserver = jest.fn(() => ({
      observe: jest.fn(), unobserve: jest.fn(), disconnect,
    })) as unknown as typeof ResizeObserver;
    try {
      TestBed.configureTestingModule({ imports: [Dashboard] });
      const fixture = TestBed.createComponent(Dashboard);
      fixture.detectChanges();
      await fixture.whenStable();
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('lib-widget')).toBeTruthy();
      expect(fixture.nativeElement.textContent).toContain('Views');
      fixture.destroy();
      expect(disconnect).toHaveBeenCalled();
    } finally {
      globalThis.ResizeObserver = originalObserver;
      localStorage.clear();
    }
  });
});
