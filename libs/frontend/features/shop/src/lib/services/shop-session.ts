import { computed, inject, Injectable } from '@angular/core';
import { AppStore } from '@fe/stores';
import { User } from '../models/user';

/** Reuses the host IAM identity; the shop never handles passwords. */
@Injectable()
export class ShopSession {
  private readonly appStore = inject(AppStore);
  readonly user = computed<User | undefined>(() => {
    const user = this.appStore.user();
    if (!this.appStore.isLoggedIn() || !user) return undefined;
    return {
      id: String(user.id),
      email: user.email,
      name: user.nickName || user.email,
      imageUrl: user.photoUrl || '/person-placeholder.png',
    };
  });
}
