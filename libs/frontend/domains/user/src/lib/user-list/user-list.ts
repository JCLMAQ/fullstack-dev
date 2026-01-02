import { JsonPipe } from '@angular/common';
import { ChangeDetectorRef, Component, computed, effect, inject, signal, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
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
      background-color: var(--mat-sys-secondary-container) !important;
      cursor: pointer;
    }
  `]
})
export class UserList {

  readonly store = inject(UserStore);
  private readonly router = inject(Router);
  private readonly cdr = inject(ChangeDetectorRef);

  constructor() {
    // Initialiser le tri depuis le store s'il a été sauvegardé
    const savedSort = this.store.currentSort();
    if (savedSort) {
      this.sortState.set(savedSort as Sort);
    }

    // Charger les utilisateurs si la liste est vide et qu'il n'y a pas de chargement en cours
    effect(() => {
      const userCount = this.store.userCount();
      const isLoading = this.store.isLoading();
      const hasError = this.store.hasError();

      if (userCount === 0 && !isLoading && !hasError) {
        this.store.loadUsers();
      }
    });

    // Sauvegarder le tri dans le store quand il change
    effect(() => {
      const currentSort = this.sortState();
      if (currentSort.active && currentSort.direction) {
        this.store.setCurrentSort(currentSort);
      }
    });

    // Synchroniser l'affichage des flèches de tri avec le store
    effect(() => {
      const savedSort = this.store.currentSort();
      const matSort = this.sort();
      if (savedSort && matSort) {
        matSort.active = savedSort.active;
        matSort.direction = (savedSort.direction as 'asc' | 'desc');
        // Émettre l'event sortChange pour que MatSort se mette à jour
        matSort.sortChange.emit(savedSort as Sort);
      }
    });
  }

  routeToDetail = "/users/detail";

  mode: 'Edit' | 'View' | undefined ;
  master = false; // true : button is disable
  owner = false; // true button is disable

  // ViewChild pour tri et pagination
  protected readonly sort = viewChild(MatSort);
  protected readonly paginator = viewChild(MatPaginator);
  protected readonly sortState = signal<Sort>({ active: '', direction: '' });

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

  protected readonly sortedUsers = computed(() => {
    const users = [...this.filteredUsers()];
    const { active, direction } = this.sortState();
    if (!active || !direction) {
      return users;
    }
    return users.sort((a, b) => {
      const aValue = (a as Record<string, unknown>)[active];
      const bValue = (b as Record<string, unknown>)[active];
      if (aValue == null && bValue == null) {
        return 0;
      }
      if (aValue == null) {
        return 1;
      }
      if (bValue == null) {
        return -1;
      }
      const comparison = String(aValue).localeCompare(String(bValue), undefined, { sensitivity: 'base' });
      return direction === 'asc' ? comparison : -comparison;
    });
  });

  protected readonly paginatedUsers = computed(() => {
    const users = this.sortedUsers();
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


  /**
   * True si tous les utilisateurs paginés sont sélectionnés
   */
  readonly isAllPaginatedSelected = computed(() => {
    const paginated = this.paginatedUsers();
    return paginated.length > 0 && paginated.every(user => this.store.selection().isSelected(user));
  });

  readonly isSomePaginatedSelected = computed(() => {
    const paginated = this.paginatedUsers();
    const numSelected = paginated.filter(user => this.store.selection().isSelected(user)).length;
    return numSelected > 0 && numSelected < paginated.length;
  });

  protected toggleAll(): void {
    if (this.store.isAllSelected()) {
      this.store.clearSelection();
      this.store.clearSortedSelection();
    } else {
      this.store.selectAll();
    }
  }

  protected toggleSelection(id: string): void {
    this.store.toggleSelection(id);
    // Si aucun utilisateur n'est sélectionné, vider l'ordre trié
    if (this.store.selectedIds().length === 0) {
      this.store.clearSortedSelection();
    }
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
  navigateButton( id: string, mode: string ) { // Vers le formulaire de détail
    // Définir l'utilisateur sélectionné avant de naviguer
    this.store.setSelectedId(id);
    this.store.initNavButton(id);
    // Naviguer vers le détail avec le mode en query param
    this.router.navigate([this.routeToDetail, id], { queryParams: { mode } });
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

  protected onSortChange(sort: Sort): void {
    this.sortState.set(sort);
    this.pageIndex.set(0);

    // Si pas de tri actif, remettre l'ordre de selectedIds
    if (!sort.active || !sort.direction) {
      this.store.setSortedSelection(this.store.selectedIds());
      this.store.setCurrentSort(null);
      return;
    }

    const filtered = this.filteredUsers();
    const sorted: User[] = [...filtered];

    if (sort.active && sort.direction) {
      sorted.sort((a: User, b: User) => {
        const aValue = (a as Record<string, unknown>)[sort.active];
        const bValue = (b as Record<string, unknown>)[sort.active];
        if (aValue == null && bValue == null) return 0;
        if (aValue == null) return 1;
        if (bValue == null) return -1;
        const comparison = String(aValue).localeCompare(String(bValue), undefined, { sensitivity: 'base' });
        return sort.direction === 'asc' ? comparison : -comparison;
      });
    }

    // Extraire les IDs des sélectionnés dans l'ordre trié
    const sortedSelectedIds = sorted
      .filter((user: User) => this.store.selection().isSelected(user))
      .map((user: User) => user.id);

    this.store.setSortedSelection(sortedSelectedIds);
  }

  checkboxLabel(row: User): string {
    if (!row) {
      return `${this.store.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.store.selection().isSelected(row) ? 'deselect' : 'select'}`;
  }

  protected masterToggle(): void {
    const paginatedUsers = this.paginatedUsers();
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

  protected toggleRowSelection(user: User): void {
    this.store.toggleSelection(user.id);
  }

  protected addOne(): void {
    // Navigation pour créer un nouvel utilisateur (ID vide)
    // TODO : Gérer la création d'un nouvel utilisateur via le store si nécessaire
    this.router.navigate([this.routeToDetail, '']);
  }

}
