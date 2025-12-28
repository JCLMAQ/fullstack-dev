import { JsonPipe } from '@angular/common';
import { Component, computed, inject, signal, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from '@db/prisma';
import { MATERIAL } from '@fe/material';
import { UserStore } from '../store/user-store';

@Component({
  selector: 'lib-user-list',
  imports: [
    JsonPipe,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    ...MATERIAL
  ],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
  styles: [`
    :host ::ng-deep .mat-mdc-row:hover {
      background-color: var(--mat-sys-primary-container) !important;
      cursor: pointer;
    }
  `]
})
export class UserList {

  readonly store = inject(UserStore);
  private readonly router = inject(Router);

  routeToDetail = "/users/detail";

  mode: 'Edit' | 'View' | 'Update' | undefined ;
  master = false; // true : button is disable
  owner = false; // true button is disable

  // ViewChild pour tri et pagination
  protected readonly sort = viewChild(MatSort);
  protected readonly paginator = viewChild(MatPaginator);

  // Filtrage
  protected readonly filterValue = signal('');
  protected readonly filteredUsers = computed(() => {
    const filter = this.filterValue().toLowerCase();
    if (!filter) {
      return this.store.users();
    }
    return this.store.users().filter(user =>
      user.firstName?.toLowerCase().includes(filter) ||
      user.lastName?.toLowerCase().includes(filter) ||
      user.email?.toLowerCase().includes(filter)
    );
  });

  // Pagination
  protected readonly pageIndex = signal(0);
  protected readonly pageSize = signal(5);

  protected readonly paginatedUsers = computed(() => {
    const users = this.filteredUsers();
    const start = this.pageIndex() * this.pageSize();
    const end = start + this.pageSize();
    return users.slice(start, end);
  });

  protected readonly totalUsers = computed(() => this.filteredUsers().length);

  // Configuration de la table
  protected readonly displayedColumns: string[] = ['select', 'firstName', 'lastName', 'email', 'actions'];
  columnsToDisplay: string[] = ['select', 'numSeq','firstName', 'lastName', 'email'];
  // columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand',  'tools'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay,  'tools'];
  expandedElement!: User | null;


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

  protected isSomeSelected(): boolean {
    // Vérifie si certains (mais pas tous) utilisateurs paginés sont sélectionnés
    const numPaginated = this.paginatedUsers().length;
    const numSelected = this.paginatedUsers().filter(user =>
      this.store.selection().isSelected(user)
    ).length;
    return numSelected > 0 && numSelected < numPaginated;
  }

  protected toggleAll(): void {
    if (this.store.isAllSelected()) {
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

  /**
   * Navigue vers le formulaire de détail d'un utilisateur.
   * @param id - ID de l'utilisateur à afficher
   * @param mode - Mode d'affichage (non utilisé - le mode est géré dans le composant de détail)
   */
  navigateButton( id: string, mode: string ) {
    // Définir l'utilisateur sélectionné avant de naviguer
    this.store.setSelectedId(id);
    // Naviguer vers le détail
    this.router.navigate([this.routeToDetail, id]);
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

  protected applyFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.filterValue.set(value.trim());
    // Reset à la première page
    this.pageIndex.set(0);
  }

  protected onPageChange(event: { pageIndex: number; pageSize: number }): void {
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
  }

  checkboxLabel(row: User): string {
    if (!row) {
      return `${this.store.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.store.selection().isSelected(row) ? 'deselect' : 'select'}`;
  }

  protected masterToggle(): void {
    const isAllSelected = this.store.isAllSelected();
    const paginatedIds = this.paginatedUsers().map(user => user.id);
    const currentIds = this.store.selectedIds();

    if (isAllSelected) {
      // Désélectionner tous les utilisateurs paginés
      this.paginatedUsers().forEach((user: User) => {
        this.store.selection().deselect(user);
      });
      // Retirer leurs IDs de selectedIds
      const filteredIds = currentIds.filter(id => !paginatedIds.includes(id));
      this.store.setSelection(filteredIds);
    } else {
      // Sélectionner tous les utilisateurs paginés
      this.paginatedUsers().forEach((user: User) => {
        this.store.selection().select(user);
      });
      // Ajouter leurs IDs à selectedIds
      const newIds = paginatedIds.filter(id => !currentIds.includes(id));
      this.store.setSelection([...currentIds, ...newIds]);
    }
  }

  protected toggleRowSelection(user: User): void {
    // Synchroniser selection() et selectedIds
    this.store.selection().toggle(user);
    this.store.toggleSelection(user.id);
  }

  protected addOne(): void {
    // Navigation pour créer un nouvel utilisateur (ID vide)
    this.router.navigate([this.routeToDetail, '']);
  }

}
