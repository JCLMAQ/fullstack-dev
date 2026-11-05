import { DashboardService, DASHBOARD_LAYOUT_KEY } from './dashboard.service';

describe('Dashboard local persistence', () => {
  let service: DashboardService;
  beforeEach(() => {
    localStorage.clear();
    service = new DashboardService();
  });

  it('migrates legacy sizes and preserves user order without removing the backup', async () => {
    const widgets = [
      { id: 1, label: 'Analytics', columns: 2, rows: 2 },
      { id: 6, label: 'Views', columns: 1, rows: 1 },
    ];
    localStorage.setItem('dashboardWidgets', JSON.stringify(widgets));
    localStorage.setItem('dashboardWidgetsOrder', '[6,1]');
    const dashboard = await service.fetchWidgets();
    expect(dashboard.mobileOrder).toEqual([6, 1]);
    expect(dashboard.items[0]).toMatchObject({ widgetId: 6, columns: 3, rows: 3 });
    expect(dashboard.items[1]).toMatchObject({ widgetId: 1, columns: 6, rows: 5 });
    expect(localStorage.getItem('dashboardWidgets')).toBe(JSON.stringify(widgets));
    expect(JSON.parse(localStorage.getItem(DASHBOARD_LAYOUT_KEY)!)).toMatchObject({ version: 1 });
  });

  it('persists deletion of the final widget across reloads', async () => {
    await service.fetchWidgets();
    await service.saveLayout({ version: 1, items: [], mobileOrder: [] });
    expect((await new DashboardService().fetchWidgets()).widgets).toEqual([]);
  });

  it('keeps an empty legacy dashboard empty', async () => {
    localStorage.setItem('dashboardWidgets', '[]');
    expect((await service.fetchWidgets()).items).toEqual([]);
  });

  it('does not overwrite corrupt saved data', async () => {
    localStorage.setItem(DASHBOARD_LAYOUT_KEY, '{broken');
    await expect(service.fetchWidgets()).rejects.toThrow();
    expect(localStorage.getItem(DASHBOARD_LAYOUT_KEY)).toBe('{broken');
  });

  it('rejects malformed legacy dimensions without writing a new document', async () => {
    localStorage.setItem('dashboardWidgets', '[{"id":1,"rows":-1}]');
    await expect(service.fetchWidgets()).rejects.toThrow();
    expect(localStorage.getItem(DASHBOARD_LAYOUT_KEY)).toBeNull();
  });

  it('clears both storage formats on logout', async () => {
    localStorage.setItem('dashboardWidgets', '[]');
    localStorage.setItem('dashboardWidgetsOrder', '[]');
    await service.fetchWidgets();
    service.clearDashboardData();
    expect(localStorage.getItem(DASHBOARD_LAYOUT_KEY)).toBeNull();
    expect(localStorage.getItem('dashboardWidgets')).toBeNull();
    expect(localStorage.getItem('dashboardWidgetsOrder')).toBeNull();
  });
});
