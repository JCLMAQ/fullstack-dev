import { Component, effect, inject, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from '@db/prisma';
import { UserStore } from '../store/user-store';

@Component({
  selector: 'lib-user-list',
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatChipsModule,
  ],
  providers: [UserStore],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {
  private readonly store = inject(UserStore);
  private readonly router = inject(Router);

  routeToDetail = "users/user";

  mode: 'Edit' | 'View' | 'Update' | undefined ;
  master = false; // true : button is disable
  owner = false; // true button is disable

  // ViewChild pour tri et pagination
  protected readonly sort = viewChild(MatSort);
  protected readonly paginator = viewChild(MatPaginator);

  // Signals exposés au template
  protected readonly users = this.store.users;
  protected readonly isLoading = this.store.isLoading;
  protected readonly hasError = this.store.hasError;
  protected readonly userCount = this.store.userCount;
  protected readonly selectedUserId = this.store.selectedUserId;
  protected readonly followers = this.store.followers;
  protected readonly following = this.store.following;
  protected readonly hasFollowers = this.store.hasFollowers;
  protected readonly hasFollowing = this.store.hasFollowing;

  // Configuration de la table
  protected readonly displayedColumns: string[] = ['select', 'firstName', 'lastName', 'email', 'actions'];
  protected readonly dataSource = new MatTableDataSource<User>([]);

  constructor() {
    // Synchroniser les données du store avec la table
    effect(() => {
      this.dataSource.data = this.users();
    });

    // Configurer le tri et la pagination après initialisation de la vue
    effect(() => {
      const sort = this.sort();
      const paginator = this.paginator();

      if (sort && paginator) {
        this.dataSource.sort = sort;
        this.dataSource.paginator = paginator;
      }
    });
  }

  // Actions
  protected refreshUsers(): void {
    this.store.loadUsers();
  }

  protected selectUser(id: string): void {
    this.store.loadUser(id);
    // TODO Ajouter les endpoints followers/following (côté backend)
    // Note: Les endpoints followers/following ne sont pas encore implémentés côté backend
    // this.store.loadFollowers(id);
    // this.store.loadFollowing(id);
    this.store.loadOrganizations(id);
  }

  // Sélection
  protected isAllSelected(): boolean {
    return this.store.isAllSelected();
  }

  protected toggleAll(): void {
    if (this.isAllSelected()) {
      this.store.clearSelection();
    } else {
      this.store.selectAll();
    }
  }

  protected toggleSelection(id: string): void {
    this.store.toggleSelection(id);
  }

  protected isSelected(id: string): boolean {
    return this.store.selectedIdSet().has(id);
  }

  protected selectedSize(): number {
    return this.store.selectedIdSet().size;
  }

  // Méthodes d'actions sur les utilisateurs
/*
  navigateButton( id: string, mode: string ) {
    this.todoStore.todoIdSelectedId(id);
    this.todoStore.initNavButton(id);
    this.router.navigate([this.routeToDetail, id, mode]);
  }

  addOne() {
    this.router.navigate([this.routeToDetail, '', 'create']);
  }

// Delete the selected item
  async remove( id: string ) {

  }

  virtualRemove(id: string) {

  }

*/

  protected navigateButton(id: string, mode: string): void {
    this.selectUser(id);
    this.router.navigate(['/users/detail', id]);
  }



  protected editUser(id: string): void {
    // TODO: Implémenter la navigation vers le formulaire d'édition
    console.log('Éditer utilisateur:', id);
  }

  protected viewUser(id: string): void {
    this.selectUser(id);
  }

  protected softDeleteUser(id: string): void {
    // TODO: Implémenter le soft delete via le store
    console.log('Soft delete utilisateur:', id);
    // this.store.softDeleteUser(id);
  }

  protected hardDeleteUser(id: string): void {
    // TODO: Implémenter le hard delete via le store
    console.log('Hard delete utilisateur:', id);
    // this.store.hardDeleteUser(id);
  }
}
