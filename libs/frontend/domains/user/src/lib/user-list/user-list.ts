import { JsonPipe } from '@angular/common';
import { Component, computed, effect, HostListener, inject, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from '@db/prisma/frontend';
import { DictionaryPaginatorIntl, MATERIAL } from '@fe/material';
import { TranslateModule } from '@ngx-translate/core';
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
    TranslateModule,
    ...MATERIAL
  ],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
  styles: [`
    :host ::ng-deep .mat-mdc-row:hover {
      background-color: var(--mat-sys-secondary-container) !important;
      cursor: pointer;
    }
  `],
  providers: [{ provide: MatPaginatorIntl, useClass: DictionaryPaginatorIntl }]
})
export class UserList {

  readonly store = inject(UserStore);
  private readonly router = inject(Router);

  constructor() {
    this.store.syncSortToMatSort(this.sort);
    // Charger les utilisateurs si la liste est vide et qu'il n'y a pas de chargement en cours
    effect(() => {
      const userCount = this.store.userCount();
      const isLoading = this.store.usersIsLoading();
      const hasError = this.store.usersError();

      if (userCount === 0 && !isLoading && !hasError) {
        // this.store.loadUsers();
        this.store.reload(); // Trigger load via httpResource cache reset
      }
    });


    // Synchroniser la sélection triée avec la liste filtrée et triée
    effect(() => {
      const users = this.filteredUsers();
      this.store.syncSortedSelection(users);
    });
  }

  routeToDetail = "/users/detail";

  mode: 'Edit' | 'View' | 'Add' | undefined = 'View';
  master = false; // true : button is disable
  owner = false; // true button is disable

  // ViewChild pour tri et pagination
  protected readonly sort = viewChild(MatSort);
  protected readonly paginator = viewChild(MatPaginator);
  protected readonly sortState = computed(() => this.store.currentSort() || { active: '', direction: '' });

  // Configuration de la table
  protected readonly displayedColumns: string[] = ['select', 'firstName', 'lastName', 'email', 'actions'];
  columnsToDisplay: string[] = ['select', 'numSeq','firstName', 'lastName', 'email'];
  // columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand',  'tools'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay,  'tools'];
  expandedElement!: User | null;

  // Filtrage
  protected readonly filterValue = this.store.filterValue;
  protected readonly filteredUsers = this.store.sortedItems;

  // Pagination
  protected readonly pageIndex = this.store.pageIndex;
  protected readonly pageSize = this.store.pageSize;
  protected readonly totalItems = this.store.totalCount;


  // Actions
  protected refreshUsers(): void {
    this.store.reload();
  }

  // Sélection
  /**
   * True si tous les utilisateurs paginés sont sélectionnés
   */
  readonly isAllPaginatedSelected = computed(() => {
    const paginated = this.store.paginatedItems();
    return paginated.length > 0 && paginated.every(item => this.store.selection().isSelected(item));
  });

  readonly isSomePaginatedSelected = computed(() => {
    const paginated = this.store.paginatedItems();
    const numSelected = paginated.filter(user => this.store.selection().isSelected(user)).length;
    return numSelected > 0 && numSelected < paginated.length;
  });

// Selection Mgt
  protected toggleAll(): void {
    this.store.toggleAll();
  }

  protected toggleSelection(id: string): void {
    this.store.toggleSelection(id);
  }

  protected isSelected(id: string): boolean {
    return this.store.selectedIds().includes(id);
  }

  protected selectedSize(): number {
    return this.store.selectedIds().length;
  }

  // Méthodes d'actions sur les utilisateurs

  /**
   * Navigue vers le formulaire de détail d'un utilisateur.
   * @param id - ID de l'utilisateur à afficher
   * @param mode - Mode d'affichage (non utilisé - le mode est géré dans le composant de détail)
   */
  navigateToDetail( id: string, mode: string ) { // Vers le formulaire de détail
    // Définir l'utilisateur sélectionné avant de naviguer
    this.store.setSelectedId(id);
    console.log('Selected user ID set in store:', id, 'mode:', mode);
    this.store.initNavButton(id);
    // Naviguer vers le détail avec le mode en query param
    this.router.navigate([this.routeToDetail, id], { queryParams: { mode } });
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
    this.store.updateFilter(value.trim());
    // Reset à la première page
    this.store.setPage(0);
  }

  protected onPageChange(event: { pageIndex: number; pageSize: number }): void {
    this.store.setPagination(event.pageIndex, event.pageSize);
  }

  // Keyboard management for multi-selection with shift key
  private isShiftPressed = false;

  @HostListener('window:keydown.shift')
  onKeyDown() {
    this.isShiftPressed = true;
  }

  @HostListener('window:keyup.shift')
  onKeyUp() {
    this.isShiftPressed = false;
  }

  protected onSortChange(sort: Sort): void {
    if (this.isShiftPressed) {
      this.store.addSort(sort);
    } else {
      this.store.setCurrentSort(sort);
    }
    this.store.setPage(0);
  }

  protected addOne(): void {
    this.router.navigate([this.routeToDetail, '']);
  }
  checkboxLabel(row: User): string {
    if (!row) {
      return `${this.store.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.store.selection().isSelected(row) ? 'deselect' : 'select'}`;
  }

  protected masterToggle(): void {
    const paginatedUsers = this.store.paginatedItems();
    const allSelected = paginatedUsers.length > 0 && paginatedUsers.every(user => this.store.selection().isSelected(user));
    if (allSelected) {
      paginatedUsers.forEach(user => {
        if (this.store.selection().isSelected(user)) {
          this.store.toggleSelection(user.id);
        }
      });
    } else {
      paginatedUsers.forEach(user => {
        if (!this.store.selection().isSelected(user)) {
          this.store.toggleSelection(user.id);
        }
      });
    }
  }

}
