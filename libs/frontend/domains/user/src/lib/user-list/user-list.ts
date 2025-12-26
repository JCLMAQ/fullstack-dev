import { Component, inject } from '@angular/core';
import { UserStore } from '../store/user-store';

@Component({
  selector: 'lib-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {
  private readonly store = inject(UserStore);

  // Signals exposés au template
  users = this.store.users;
  isLoading = this.store.isLoading;
  hasError = this.store.hasError;
  userCount = this.store.userCount;
  selectedUserId = this.store.selectedUserId;
  followers = this.store.followers;
  following = this.store.following;
  hasFollowers = this.store.hasFollowers;
  hasFollowing = this.store.hasFollowing;

  // Actions
  refreshUsers() {
    this.store.loadUsers();
  }

  selectUser(id: string) {
    this.store.loadUser(id);
    this.store.loadFollowers(id);
    this.store.loadFollowing(id);
    this.store.loadOrganizations(id);
  }
}
