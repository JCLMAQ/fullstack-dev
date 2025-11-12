import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvatarRefreshService {
  // Signal partagé pour notifier tous les composants d'avatar
  private refreshSignal = signal(0);

  // Getter public pour que les composants puissent s'abonner
  get refreshTrigger() {
    return this.refreshSignal.asReadonly();
  }

  // Méthode pour déclencher un refresh global
  triggerRefresh(): void {
    const timestamp = Date.now();
    console.log('🔄 AvatarRefreshService: Trigger refresh global avec timestamp:', timestamp);
    this.refreshSignal.set(timestamp);
  }
}
