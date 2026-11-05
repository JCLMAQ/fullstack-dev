import { calculateGridMetrics } from './dashboard-grid.helper';
import { DashboardGridMetrics } from './widget-resize.types';

export class DashboardGridLayoutController {
  private resizeObserver: ResizeObserver | null = null;

  constructor(
    private readonly element: HTMLElement,
    private readonly onLayoutChange: (
      metrics: DashboardGridMetrics,
      containerHeight: number
    ) => void
  ) {}

  start(): void {
    this.publishLayout();

    this.resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) {
        return;
      }

      this.publishLayout(entry.contentRect.width);
    });

    this.resizeObserver.observe(this.element);
  }

  destroy(): void {
    this.resizeObserver?.disconnect();
    this.resizeObserver = null;
  }

  private publishLayout(width = this.element.clientWidth): void {
    this.onLayoutChange(
      calculateGridMetrics(width),
      this.element.scrollHeight
    );
  }
}
