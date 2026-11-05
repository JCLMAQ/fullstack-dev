import { autoScrollSpeed } from '../grid/dashboard-grid.helper';

export type DragSessionCallbacks = {
  onMove: (pointerX: number, pointerY: number) => void;
  onCommit: () => void;
  onCancel: () => void;
  onEscape: () => void;
  onEnd: () => void;
  isActive: () => boolean;
};

export type DragSessionConfig = {
  grabOffsetX: number;
  grabOffsetY: number;
  containerRect: DOMRect;
  callbacks: DragSessionCallbacks;
};

/**
 * Manages pointer capture, rAF-coalesced move events, auto-scroll,
 * and cleanup for a single drag operation.
 */
export class DashboardDragSession {
  private latestPointerX = 0;
  private latestPointerY = 0;
  private scrollOffsetY = 0;
  private moveFrameId: number | null = null;
  private autoScrollFrameId: number | null = null;
  private activePointerId: number | null = null;
  private activeHandle: HTMLElement | null = null;
  private disposed = false;

  private readonly boundPointerMove = (event: PointerEvent) =>
    this.onPointerMove(event);
  private readonly boundPointerUp = (event: PointerEvent) =>
    this.onPointerUp(event);
  private readonly boundPointerCancel = (event: PointerEvent) =>
    this.onPointerCancel(event);
  private readonly boundLostCapture = (event: PointerEvent) =>
    this.onLostCapture(event);
  private readonly boundKeyDown = (event: KeyboardEvent) =>
    this.onDocumentKeyDown(event);

  constructor(private readonly config: DragSessionConfig) {}

  get grabOffsetX(): number {
    return this.config.grabOffsetX;
  }

  get grabOffsetY(): number {
    return this.config.grabOffsetY;
  }

  start(event: PointerEvent): void {
    if (this.disposed) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    this.activePointerId = event.pointerId;
    this.activeHandle = event.currentTarget as HTMLElement;
    this.scrollOffsetY = 0;

    this.updatePointerPosition(event);

    try {
      this.activeHandle.setPointerCapture(event.pointerId);
    } catch {
      this.config.callbacks.onCancel();
      this.dispose(true);
      return;
    }

    this.activeHandle.addEventListener('pointermove', this.boundPointerMove);
    this.activeHandle.addEventListener('pointerup', this.boundPointerUp);
    this.activeHandle.addEventListener('pointercancel', this.boundPointerCancel);
    this.activeHandle.addEventListener('lostpointercapture', this.boundLostCapture);
    document.addEventListener('keydown', this.boundKeyDown);

    this.scheduleAutoScroll();
  }

  dispose(emitEnd = true): void {
    if (this.disposed) {
      return;
    }

    this.disposed = true;
    this.cancelMoveFrame();
    this.stopAutoScroll();
    document.removeEventListener('keydown', this.boundKeyDown);

    if (this.activeHandle) {
      this.activeHandle.removeEventListener('pointermove', this.boundPointerMove);
      this.activeHandle.removeEventListener('pointerup', this.boundPointerUp);
      this.activeHandle.removeEventListener('pointercancel', this.boundPointerCancel);
      this.activeHandle.removeEventListener('lostpointercapture', this.boundLostCapture);

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

    if (emitEnd && this.config.callbacks.isActive()) {
      this.config.callbacks.onEnd();
    }
  }

  private updatePointerPosition(event: PointerEvent): void {
    const rect = this.config.containerRect;
    this.latestPointerX = event.clientX - rect.left;
    this.latestPointerY = event.clientY - rect.top + this.scrollOffsetY;
  }

  private onPointerMove(event: PointerEvent): void {
    if (this.disposed || !this.config.callbacks.isActive()) {
      return;
    }

    if (event.pointerId !== this.activePointerId) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    this.updatePointerPosition(event);
    this.scheduleMoveFrame();
    this.scheduleAutoScroll();
  }

  private onPointerUp(event: PointerEvent): void {
    if (this.disposed || !this.config.callbacks.isActive()) {
      return;
    }

    if (event.pointerId !== this.activePointerId) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    this.updatePointerPosition(event);
    this.cancelMoveFrame();

    this.config.callbacks.onMove(this.latestPointerX, this.latestPointerY);
    this.config.callbacks.onCommit();

    this.dispose(true);
  }

  private onPointerCancel(event: PointerEvent): void {
    if (this.disposed || !this.config.callbacks.isActive()) {
      return;
    }

    if (event.pointerId !== this.activePointerId) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    this.config.callbacks.onCancel();
    this.dispose(true);
  }

  private onLostCapture(event: PointerEvent): void {
    if (this.disposed || !this.config.callbacks.isActive()) {
      return;
    }

    if (event.pointerId !== this.activePointerId) {
      return;
    }

    this.config.callbacks.onCancel();
    this.dispose(true);
  }

  private onDocumentKeyDown(event: KeyboardEvent): void {
    if (this.disposed || !this.config.callbacks.isActive()) {
      return;
    }

    if (event.key !== 'Escape') {
      return;
    }

    event.preventDefault();
    this.config.callbacks.onEscape();
  }

  private scheduleMoveFrame(): void {
    if (this.moveFrameId !== null) {
      return;
    }

    this.moveFrameId = window.requestAnimationFrame(() => {
      this.moveFrameId = null;

      if (this.disposed || !this.config.callbacks.isActive()) {
        return;
      }

      this.config.callbacks.onMove(this.latestPointerX, this.latestPointerY);
    });
  }

  private cancelMoveFrame(): void {
    if (this.moveFrameId !== null) {
      window.cancelAnimationFrame(this.moveFrameId);
      this.moveFrameId = null;
    }
  }

  private scheduleAutoScroll(): void {
    if (this.autoScrollFrameId !== null) {
      return;
    }

    this.autoScrollFrameId = window.requestAnimationFrame(() => {
      this.autoScrollFrameId = null;

      if (this.disposed || !this.config.callbacks.isActive()) {
        return;
      }

      const viewportY =
        this.latestPointerY -
        this.scrollOffsetY +
        this.config.containerRect.top;
      const speed = autoScrollSpeed(viewportY, window.innerHeight);

      if (speed !== 0) {
        window.scrollBy({ top: speed, behavior: 'auto' });
        this.scrollOffsetY += speed;
        this.scheduleMoveFrame();
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
