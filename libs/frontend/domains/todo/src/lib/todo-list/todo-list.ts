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
import { TodoWithRelations } from '@db/prisma/frontend';
import { DictionaryPaginatorIntl, MATERIAL } from '@fe/material';
import { TranslateModule } from '@ngx-translate/core';
import { TodoStore } from '../store/todo-store';

@Component({
  selector: 'lib-todo-list',
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
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
  styles: [`
    :host ::ng-deep .mat-mdc-row:hover {
      background-color: var(--mat-sys-secondary-container) !important;
      cursor: pointer;
    }
  `],
  providers: [{ provide: MatPaginatorIntl, useClass: DictionaryPaginatorIntl }]
})
export class TodoList {
  protected readonly _store = inject(TodoStore);
  private readonly _router = inject(Router);

  constructor() {
    this._store.syncSortToMatSort(this.sort);

    // Synchroniser la sélection triée avec la liste filtrée et triée
    effect(() => {
      const todos = this.filteredItems();
      const selection = this._store.selection();
      const sortedSelectedIds = todos
        .filter(todo => selection.isSelected(todo))
        .map(todo => todo.id);
      this._store.setSortedSelection(sortedSelectedIds);
    });
  }

  routeToDetail = "/todos/detail";

  mode: 'Edit' | 'View' | 'add' | undefined = 'View';
  master = false; // true : button is disable
  owner = false; // true button is disable;

  // ViewChild pour tri et pagination
  protected readonly sort = viewChild(MatSort);
  protected readonly paginator = viewChild(MatPaginator);
  protected readonly sortState = computed(() => this._store.currentSort() || { active: '', direction: '' });

   // Configuration de la table
    protected readonly displayedColumns: string[] = ['select', 'order', 'numSeq', 'title','state', 'actions'];
    columnsToDisplay: string[] = ['select', 'order', 'numSeq', 'title','state'];
    // columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand',  'tools'];
    columnsToDisplayWithExpand = [...this.columnsToDisplay,  'tools'];
    expandedElement!: TodoWithRelations | null;

    // Filtrage
  protected readonly filterValue = this._store.filterValue;
  protected readonly filteredItems = this._store.sortedItems;

  // Pagination
  protected readonly pageIndex = this._store.pageIndex;
  protected readonly pageSize = this._store.pageSize;
  // protected readonly paginatedItems = this._store.paginatedItems;
  protected readonly totalItems = this._store.itemsCount;

// Available actions on the list of todos
  // todos$ = this.store.todosValue;
  // todosStatus$ = this.store.todosStatus;
  // todosError$ = this.store.todosError;
  // todosIsLoading$ = this.store.todosIsLoading;
  // todosIds$ = this.store.todosIds;
  // todosEntityMap$ = this.store.todosEntityMap;
  // todosEntities$ = this.store.todosEntities;

// Méthodes d'actions sur les todos

protected refreshOrReload(): void {
    // this._store.loadItems();
  }
  /**
   * Navigue vers le formulaire de détail d'un todo.
   * @param id - ID du todo à afficher
   * @param mode - Mode d'affichage (non utilisé - le mode est géré dans le composant de détail)
   */
  navigateButton( id: string, mode: string ) { // Vers le formulaire de détail
    // Définir l'utilisateur sélectionné avant de naviguer
    this._store.setSelectedId(id);
    this._store.initNavButton(id);
    // Naviguer vers le détail avec le mode en query param
    this._router.navigate([this.routeToDetail, id], { queryParams: { mode } });
  }

  navigateDetail( id: string, mode: string ) { // Vers le formulaire de détail
    // Définir l'utilisateur sélectionné avant de naviguer
    this._store.setSelectedId(id);
    this._store.initNavButton(id);
    // Naviguer vers le détail avec le mode en query param
    this._router.navigate([this.routeToDetail, id], { queryParams: { mode } });
  }

  // protected viewItem(id: string): void {
  //   this.selectItem(id);
  // }

  protected onPageChange(event: { pageIndex: number; pageSize: number }): void {
    this._store.setPagination(event.pageIndex, event.pageSize);
  }

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
      this._store.addSort(sort);
    } else {
      this._store.setCurrentSort(sort);
    }
    this._store.setPage(0);
  }

  protected softDelete(id: string): void {
    // TODO: Implémenter le soft delete via le store
    console.log('Soft delete todo:', id);
    // this._store.softDelete(id);
  }

  protected hardDelete(id: string): void {
    // TODO: Implémenter le hard delete via le store
    console.log('Hard delete todo:', id);
    // this._store.hardDelete(id);
  }

   protected applyFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this._store.updateFilter(value.trim());
    // Reset à la première page
    this._store.setPage(0);
  }

  /**
   * True si tous les utilisateurs paginés sont sélectionnés
   */
  readonly isAllPaginatedSelected = computed(() => {
    const paginated = this._store.paginatedItems();
    return paginated.length > 0 && paginated.every(item => this._store.selection().isSelected(item)) && paginated.every(item => this._store.selection().isSelected(item));
  });

  readonly isSomePaginatedSelected = computed(() => {
    const paginated = this._store.paginatedItems();
    const numSelected = paginated.filter(item => this._store.selection().isSelected(item)).length;
    return numSelected > 0 && numSelected < paginated.length;
  });
  // Selection CheckBox Mgt
// protected toggleAll(): void {
//     this._store.toggleAll();
//   }
//   protected toggleSelection(id: string): void {
//     this._store.toggleSelection(id);
//   }
  protected isSelected(id: string): boolean {
    return this._store.selectedIds().includes(id);
  }
  protected selectedSize(): number {
    return this._store.selectedIds().length;
  }
//   protected toggleRowSelection(todo: TodoWithRelations): void {
//       this._store.toggleSelection(todo.id);
// }

checkboxLabel(row: TodoWithRelations): string {
      if (!row) {
        return `${this._store.isAllSelected() ? 'select' : 'deselect'} all`;
      }
      return `${this._store.selection().isSelected(row) ? 'deselect' : 'select'}`;
    }
protected masterToggle(): void {
    const paginatedItems = this._store.paginatedItems();
    const allSelected = paginatedItems.length > 0 && paginatedItems.every(item => this._store.selection().isSelected(item));
    if (allSelected) {
      paginatedItems.forEach(item => {
        if (this._store.selection().isSelected(item)) {
          this._store.toggleSelection(item.id);
        }
      });
    } else {
      paginatedItems.forEach(item => {
        if (!this._store.selection().isSelected(item)) {
          this._store.toggleSelection(item.id);
        }
      });
    }
  }

}
