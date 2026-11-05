import {
  autoScrollSpeed,
  calculateResizePreview,
} from '../../../engine/grid/dashboard-grid.helper';
import {
  DashboardGridMetrics,
  ResizeAxis,
  ResizePreview,
} from '../../../engine/grid/widget-resize.types';

export type ResizePointerSessionConfig = {
  axis: ResizeAxis;
  getStartSpan: () => number;
  getMetrics: () => DashboardGridMetrics;
  getMin: () => number;
  getMax: () => number | undefined;
  onPreview: (preview: ResizePreview) => void;
  onCommit: (value: number) => void;
  onCancel: () => void;
  onEscape: () => void;
  onEnd: () => void;
  isActive: () => boolean;
};

export class ResizePointerSession {
  private startSpan = 0;
  private startPointer = 0;
  private latestPointer = 0;
  private scrollOffset = 0;
  private previewFrameId: number | null = null;
  private autoScrollFrameId: number | null = null;
  private activePointerId: number | null = null;
  private activeHandle: HTMLElement | null = null;

  private readonly boundPointerMove = (event: PointerEvent) =>
    this.onPointerMove(event);
  private readonly boundPointerUp = (event: PointerEvent) =>
    this.onPointerUp(event);
  private readonly boundPointerCancel = (event: PointerEvent) =>
    this.onPointerCancel(event);
  private readonly boundKeyDown = (event: KeyboardEvent) =>
    this.onDocumentKeyDown(event);

  constructor(private readonly config: ResizePointerSessionConfig) {}

  start(event: PointerEvent): void {
    event.preventDefault();
    event.stopPropagation();

    this.dispose(false);

    this.startSpan = this.config.getStartSpan();
    this.startPointer = this.pointerCoordinate(event);
    this.latestPointer = this.startPointer;
    this.scrollOffset = 0;
    this.activePointerId = event.pointerId;
    this.activeHandle = event.currentTarget as HTMLElement;
    this.activeHandle.setPointerCapture(event.pointerId);

    this.activeHandle.addEventListener('pointermove', this.boundPointerMove);
    this.activeHandle.addEventListener('pointerup', this.boundPointerUp);
    this.activeHandle.addEventListener('pointercancel', this.boundPointerCancel);
    this.activeHandle.addEventListener(
      'lostpointercapture',
      this.boundPointerCancel
    );
    document.addEventListener('keydown', this.boundKeyDown);

    if (this.config.axis === 'vertical') {
      this.scheduleAutoScroll();
    }
  }

  dispose(emitEnd = true): void {
    this.cancelPreviewFrame();
    this.stopAutoScroll();
    document.removeEventListener('keydown', this.boundKeyDown);

    if (this.activeHandle) {
      this.activeHandle.removeEventListener(
        'pointermove',
        this.boundPointerMove
      );
      this.activeHandle.removeEventListener('pointerup', this.boundPointerUp);
      this.activeHandle.removeEventListener(
        'pointercancel',
        this.boundPointerCancel
      );
      this.activeHandle.removeEventListener(
        'lostpointercapture',
        this.boundPointerCancel
      );

      if (this.activePointerId !== null) {
        try {
          this.activeHandle.releasePointerCapture(this.activePointerId);
        } catch {
          // Pointer capture may already be released.
        }
      }

      this.activeHandle = null;
    }

    this.activePointerId = null;

    if (emitEnd && this.config.isActive()) {
      this.config.onEnd();
    }
  }

  private onPointerMove(event: PointerEvent): void {
    if (!this.config.isActive() || event.pointerId !== this.activePointerId) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    this.latestPointer = this.pointerCoordinate(event);

    if (this.config.axis === 'vertical') {
      this.scheduleAutoScroll();
    }

    this.schedulePreviewFrame();
  }

  private onPointerUp(event: PointerEvent): void {
    if (!this.config.isActive() || event.pointerId !== this.activePointerId) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    this.latestPointer = this.pointerCoordinate(event);
    this.cancelPreviewFrame();

    const preview = this.previewForCurrentDelta();
    this.config.onPreview(preview);

    if (preview.snappedSpan !== this.startSpan) {
      this.config.onCommit(preview.snappedSpan);
    } else {
      this.config.onCancel();
    }

    this.dispose(true);
  }

  private onPointerCancel(event: PointerEvent): void {
    if (!this.config.isActive() || event.pointerId !== this.activePointerId) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    this.config.onCancel();
    this.dispose(true);
  }

  private onDocumentKeyDown(event: KeyboardEvent): void {
    if (!this.config.isActive() || event.key !== 'Escape') {
      return;
    }

    event.preventDefault();
    this.config.onEscape();
  }

  private pointerCoordinate(event: PointerEvent): number {
    return this.config.axis === 'horizontal' ? event.clientX : event.clientY;
  }

  private currentDelta(): number {
    return this.latestPointer - this.startPointer + this.scrollOffset;
  }

  private previewForCurrentDelta(): ResizePreview {
    return calculateResizePreview(
      this.config.axis,
      this.startSpan,
      this.currentDelta(),
      this.config.getMetrics(),
      this.config.getMin(),
      this.config.getMax()
    );
  }

  private schedulePreviewFrame(): void {
    if (this.previewFrameId !== null) {
      return;
    }

    this.previewFrameId = window.requestAnimationFrame(() => {
      this.previewFrameId = null;

      if (!this.config.isActive()) {
        return;
      }

      this.config.onPreview(this.previewForCurrentDelta());
    });
  }

  private cancelPreviewFrame(): void {
    if (this.previewFrameId !== null) {
      window.cancelAnimationFrame(this.previewFrameId);
      this.previewFrameId = null;
    }
  }

  private scheduleAutoScroll(): void {
    if (this.autoScrollFrameId !== null) {
      return;
    }

    this.autoScrollFrameId = window.requestAnimationFrame(() => {
      this.autoScrollFrameId = null;

      if (!this.config.isActive() || this.config.axis !== 'vertical') {
        return;
      }

      const speed = autoScrollSpeed(this.latestPointer, window.innerHeight);

      if (speed !== 0) {
        window.scrollBy({ top: speed, behavior: 'auto' });
        this.scrollOffset += speed;
        this.schedulePreviewFrame();
        this.scheduleAutoScroll();
      }
    });
  }

  private stopAutoScroll(): void {
    if (this.autoScrollFrameId !== null) {
      window.cancelAnimationFrame(this.autoScrollFrameId);
      this.autoScrollFrameId = null;
    }
  }
}
