import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DashboardPersistenceStore } from './dashboard-persistence.store';
import { DashboardService } from '../../dashboard.service';
import { DashboardLayoutDocument, UserDashboard } from '../../dashboard.model';
import { hydrateLayoutDocument } from '../grid/dashboard-layout.helper';

describe('Dashboard persistence lifecycle', () => {
  const layout: DashboardLayoutDocument = {
    version: 1,
    items: [{ widgetId: 6, row: 1, column: 1, rows: 3, columns: 3 }],
    mobileOrder: [6],
  };
  let resolveLoad: (data: UserDashboard) => void;
  let rejectLoad: (reason: Error) => void;
  let saveLayout: jest.Mock;

  beforeEach(() => {
    const loading = new Promise<UserDashboard>((resolve, reject) => {
      resolveLoad = resolve;
      rejectLoad = reject;
    });
    saveLayout = jest.fn().mockResolvedValue(undefined);
    TestBed.configureTestingModule({
      providers: [DashboardPersistenceStore,
        { provide: DashboardService, useValue: { fetchWidgets: () => loading, saveLayout } },
        { provide: MatSnackBar, useValue: { open: jest.fn() } },
      ],
    });
  });

  async function flush(): Promise<void> {
    await Promise.resolve();
    TestBed.tick();
    await Promise.resolve();
  }

  it('waits for hydration before saving and saves removal of the final widget', async () => {
    const store = TestBed.inject(DashboardPersistenceStore);
    await flush();
    expect(saveLayout).not.toHaveBeenCalled();
    resolveLoad(hydrateLayoutDocument(layout));
    await flush();
    expect(store.loaded()).toBe(true);
    expect(saveLayout).toHaveBeenLastCalledWith(layout);
    store.removeWidget(6);
    await flush();
    expect(saveLayout).toHaveBeenLastCalledWith({ version: 1, items: [], mobileOrder: [] });
  });

  it('does not overwrite storage after a failed load', async () => {
    const store = TestBed.inject(DashboardPersistenceStore);
    rejectLoad(new Error('Corrupt storage'));
    await flush();
    store.setLayoutDocument(layout);
    await flush();
    expect(store.loaded()).toBe(false);
    expect(saveLayout).not.toHaveBeenCalled();
  });
});
