import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  viewChild
} from '@angular/core';
import { DashboardHeaderComponent } from './shell/dashboard-header/dashboard-header.component';
import Chart from 'chart.js/auto';
import { DashboardPersistenceStore } from './engine/stores/dashboard-persistence.store';
import { DashboardViewStore } from './engine/stores/dashboard-view.store';
import { WidgetComponent } from './shell/widget/widget.component';
import { DashboardGridLayoutController } from './engine/grid/dashboard-grid-layout';
import { DashboardGridOverlayComponent } from './engine/grid/dashboard-grid-overlay/dashboard-grid-overlay.component';
import { DashboardDragCoordinator } from './engine/drag/dashboard-drag.coordinator';
import { DashboardDragGhostComponent } from './engine/drag/dashboard-drag-ghost/dashboard-drag-ghost.component';
import { WidgetAddDragStartEvent } from './shell/widgets-panel/widgets-panel.component';

@Component({
  selector: 'lib-dashboard',
  imports: [
    WidgetComponent,
    DashboardHeaderComponent,
    DashboardGridOverlayComponent,
    DashboardDragGhostComponent,
  ],
  template: `
    <div>
      <lib-dashboard-header
        (widgetAddDragStart)="onWidgetAddDragStart($event)"
      />

      <div class="sr-only" aria-live="assertive" aria-atomic="true">
        {{ dragCoordinator.liveAnnouncement() }}
      </div>

      <div class="relative">
        @if (
          viewStore.layoutMode() === 'desktop' &&
          (viewStore.showGridOverlay() || dragCoordinator.dragging())
        ) {
          <lib-dashboard-grid-overlay
            [metrics]="viewStore.gridMetrics()"
            [rows]="viewStore.overlayRowCount()"
          />
        }

        @if (
          dragCoordinator.showDragGhost() && dragCoordinator.ghostPosition();
          as ghost
        ) {
          <lib-dashboard-drag-ghost
            [x]="ghost.x"
            [y]="ghost.y"
            [width]="ghost.width"
            [height]="ghost.height"
            [valid]="ghost.valid"
          />
        }

        <div
          #dashboard
          class="relative z-1 grid gap-x-4 gap-y-0"
          [style.grid-template-columns]="viewStore.gridColumnTemplate()"
          [style.grid-auto-rows]="viewStore.gridAutoRows()"
        >
          @if (viewStore.layoutMode() === 'desktop') {
            @for (item of persistenceStore.layoutItems(); track item.widgetId) {
              <lib-widget [widgetId]="item.widgetId" class="z-1" />
            }
          } @else {
            @for (
              entry of persistenceStore.mobileWidgets();
              track entry.widget.id
            ) {
              <lib-widget [widgetId]="entry.widget.id" class="z-1" />
            }
          }
        </div>
      </div>
    </div>
  `,
  providers: [
    DashboardPersistenceStore,
    DashboardViewStore,
    DashboardDragCoordinator,
  ],
})
export default class DashboardComponent implements AfterViewInit, OnDestroy {
  dashboard = viewChild.required<ElementRef<HTMLElement>>('dashboard');

  persistenceStore = inject(DashboardPersistenceStore);
  viewStore = inject(DashboardViewStore);
  dragCoordinator = inject(DashboardDragCoordinator);

  private layoutController: DashboardGridLayoutController | null = null;

  ngAfterViewInit(): void {
    const container = this.dashboard().nativeElement;
    this.viewStore.registerContainer(container);

    this.layoutController = new DashboardGridLayoutController(
      container,
      (metrics, containerHeight) => {
        this.viewStore.setGridMetrics(metrics, containerHeight);
      },
    );
    this.layoutController.start();
    Chart.defaults.color = 'gray';
  }

  ngOnDestroy(): void {
    this.layoutController?.destroy();
    this.layoutController = null;
    this.viewStore.registerContainer(null);
    this.dragCoordinator.forceCancel();
  }

  onWidgetAddDragStart(event: WidgetAddDragStartEvent): void {
    this.viewStore.beginWidgetPointerAdd(event);
  }
}
