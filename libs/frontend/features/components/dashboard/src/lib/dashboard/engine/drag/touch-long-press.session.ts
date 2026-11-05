export const TOUCH_LONG_PRESS_MS = 400;
export const TOUCH_LONG_PRESS_MOVE_TOLERANCE_PX = 10;

export type TouchLongPressCallbacks = {
  onActivate: (event: PointerEvent) => void;
  onCancel?: () => void;
  isInteractiveTarget: (target: EventTarget | null) => boolean;
};

/**
 * Arms a 400ms touch long-press. Scrolling remains available until activation.
 * Movement, release, cancellation, or interactive targets cancel the pending press.
 */
export class TouchLongPressSession {
  private timerId: ReturnType<typeof setTimeout> | null = null;
  private startX = 0;
  private startY = 0;
  private pointerId: number | null = null;
  private target: HTMLElement | null = null;
  private disposed = false;
  private activated = false;
  private previousTouchAction: string | null = null;

  private readonly boundMove = (event: PointerEvent) => this.onMove(event);
  private readonly boundUp = (event: PointerEvent) => this.onUp(event);
  private readonly boundCancel = (event: PointerEvent) => this.onCancelEvent(event);

  constructor(private readonly callbacks: TouchLongPressCallbacks) {}

  get isPending(): boolean {
    return this.timerId !== null && !this.activated;
  }

  get isActivated(): boolean {
    return this.activated;
  }

  start(event: PointerEvent): boolean {
    if (this.disposed) {
      return false;
    }

    if (event.pointerType !== 'touch' && event.pointerType !== 'pen') {
      return false;
    }

    if (event.button !== 0) {
      return false;
    }

    if (this.callbacks.isInteractiveTarget(event.target)) {
      return false;
    }

    this.reset();

    this.pointerId = event.pointerId;
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.target = event.currentTarget as HTMLElement;
    this.activated = false;

    this.target.addEventListener('pointermove', this.boundMove);
    this.target.addEventListener('pointerup', this.boundUp);
    this.target.addEventListener('pointercancel', this.boundCancel);
    this.target.addEventListener('lostpointercapture', this.boundCancel);

    this.timerId = setTimeout(() => {
      this.timerId = null;
      if (this.disposed || this.pointerId === null || !this.target) {
        return;
      }

      this.activated = true;
      this.previousTouchAction = this.target.style.touchAction;
      // Prevent scrolling only after activation.
      this.target.style.touchAction = 'none';

      const activateEvent = event;
      this.detachListeners();
      this.callbacks.onActivate(activateEvent);

      // Drag session owns subsequent pointer prevention; restore host style.
      this.restoreTouchAction();
      this.target = null;
      this.pointerId = null;
    }, TOUCH_LONG_PRESS_MS);

    return true;
  }

  /**
   * Cancels a pending press without destroying the session.
   */
  cancel(): void {
    if (this.disposed) {
      return;
    }

    this.reset();
  }

  dispose(): void {
    if (this.disposed) {
      return;
    }

    this.disposed = true;
    this.reset();
  }

  private onMove(event: PointerEvent): void {
    if (this.disposed || event.pointerId !== this.pointerId || this.activated) {
      return;
    }

    const dx = event.clientX - this.startX;
    const dy = event.clientY - this.startY;
    if (Math.hypot(dx, dy) > TOUCH_LONG_PRESS_MOVE_TOLERANCE_PX) {
      this.reset();
      this.callbacks.onCancel?.();
    }
  }

  private onUp(event: PointerEvent): void {
    if (this.disposed || event.pointerId !== this.pointerId || this.activated) {
      return;
    }

    this.reset();
    this.callbacks.onCancel?.();
  }

  private onCancelEvent(event: PointerEvent): void {
    if (this.disposed || event.pointerId !== this.pointerId) {
      return;
    }

    this.reset();
    this.callbacks.onCancel?.();
  }

  private detachListeners(): void {
    if (!this.target) {
      return;
    }

    this.target.removeEventListener('pointermove', this.boundMove);
    this.target.removeEventListener('pointerup', this.boundUp);
    this.target.removeEventListener('pointercancel', this.boundCancel);
    this.target.removeEventListener('lostpointercapture', this.boundCancel);
  }

  private restoreTouchAction(): void {
    if (this.target && this.previousTouchAction !== null) {
      this.target.style.touchAction = this.previousTouchAction;
      this.previousTouchAction = null;
    }
  }

  private reset(): void {
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }

    this.detachListeners();
    this.restoreTouchAction();
    this.target = this.activated ? this.target : null;
    // Always clear target after restore
    this.target = null;
    this.pointerId = null;
    this.activated = false;
  }
}

export function isInteractiveHeaderTarget(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) {
    return false;
  }

  return (
    target.closest(
      'button, a, input, textarea, select, [role="button"], [role="separator"]'
    ) !== null
  );
}
