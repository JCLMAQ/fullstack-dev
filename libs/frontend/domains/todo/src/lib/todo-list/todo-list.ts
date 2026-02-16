import { JsonPipe } from '@angular/common';
import { Component, computed, effect, HostListener, inject, signal, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { TodoWithRelations } from '@db/prisma/frontend';
import { DictionaryPaginatorIntl, MATERIAL } from '@fe/material';
import { ConfirmDialogService } from '@fe/messages';
import { TranslateModule } from '@ngx-translate/core';
import { TodoStore } from '../store/todo-store';
import { TodoSubList } from '../todo-sub-list/todo-sub-list';

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
    MatDialogModule,
    TranslateModule,
    TodoSubList,
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
  private readonly confirmDialog = inject(ConfirmDialogService);

  constructor() {
    this._store.syncSortToMatSort(this.sort);

    // Synchroniser la sélection triée avec la liste filtrée et triée
    effect(() => {
      const todos = this.visibleItems();
      const selection = this._store.selection();
      const sortedSelectedIds = todos
        .filter(todo => selection.isSelected(todo))
        .map(todo => todo.id);
      this._store.setSortedSelection(sortedSelectedIds);
    });
  }

  routeToDetail = '/todos/detail';

  mode: 'Edit' | 'View' | 'add' | undefined = 'View';
  master = false; // true : button is disable
  owner = false; // true button is disable;
  admin = false; // true button is enable

  // ViewChild pour tri et pagination
  protected readonly sort = viewChild(MatSort);
  protected readonly paginator = viewChild(MatPaginator);
  protected readonly sortState = computed(() => this._store.currentSort() || { active: '', direction: '' });

  // Configuration de la table
  protected readonly displayedColumns: string[] = ['select', 'order', 'numSeq', 'title', 'state', 'actions'];
  columnsToDisplay: string[] = ['select', 'order', 'numSeq', 'title', 'state'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'tools'];
  expandedElement: TodoWithRelations | null = null;

  // Filtrage
  protected readonly filterValue = this._store.filterValue;
  protected readonly showSubTodos = signal(false);
  protected readonly visibleItems = computed(() => {
    const items = this._store.sortedItems();
    return this.showSubTodos() ? items : items.filter((item) => item.mainTodoId == null);
  });
  protected readonly paginatedItems = computed(() => {
    const items = this.visibleItems();
    const start = this.pageIndex() * this.pageSize();
    return items.slice(start, start + this.pageSize());
  });
  protected readonly totalVisibleItems = computed(() => this.visibleItems().length);

  // Pagination
  protected readonly pageIndex = this._store.pageIndex;
  protected readonly pageSize = this._store.pageSize;

// Available actions on the list of todos
  // todos$ = this.store.todosValue;
  // todosStatus$ = this.store.todosStatus;
  // todosError$ = this.store.todosError;
  // todosIsLoading$ = this.store.todosIsLoading;
  // todosIds$ = this.store.todosIds;
  // todosEntityMap$ = this.store.todosEntityMap;
  // todosEntities$ = this.store.todosEntities;

// Méthodes d'actions sur les todos
  navigateToDetail(id: string, mode: string): void {
    // Définir l'utilisateur sélectionné avant de naviguer
    this._store.setSelectedId(id);
    this._store.initNavButton(id);
    // Naviguer vers le détail avec le mode en query param
    this._router.navigate([this.routeToDetail, id], { queryParams: { mode } });
  }

  protected addOne(): void {
    const mode = 'add';
    this._router.navigate([this.routeToDetail, ''], { queryParams: { mode } });
  }

  protected softDelete(id: string): void {
    this.confirmDialog.confirmDelete(false).subscribe((result) => {
      if (result) {
        console.log('Soft delete todo:', id);
        this._store.softDeleteTodo({ id });
      }
    });
  }

  protected hardDelete(id: string): void {
    this.confirmDialog.confirmDelete(true).subscribe((result) => {
      if (result) {
        console.log('Hard delete todo:', id);
        this._store.hardDeleteTodo({ id });
      }
    });
  }

  protected refreshOrReload(): void {
    // this._store.loadItems();
  }

  /**
   * Navigue vers le formulaire de détail d'un todo.
   * @param id - ID du todo à afficher
   * @param mode - Mode d'affichage
   */

  protected onPageChange(event: { pageIndex: number; pageSize: number }): void {
    this._store.setPagination(event.pageIndex, event.pageSize);
  }

  // Keyboard management for multi-selection with shift key
  private isShiftPressed = false;

  @HostListener('window:keydown.shift')
  onKeyDown(): void {
    this.isShiftPressed = true;
  }

  @HostListener('window:keyup.shift')
  onKeyUp(): void {
    this.isShiftPressed = false;
  }


// Filter and sort management
  protected applyFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this._store.updateFilter(value.trim());
    // Reset à la première page
    this._store.setPage(0);
  }

  protected onSortChange(sort: Sort): void {
    if (this.isShiftPressed) {
      this._store.addSort(sort);
    } else {
      this._store.setCurrentSort(sort);
    }
    this._store.setPage(0);
  }

  protected toggleShowSubTodos(): void {
    this.showSubTodos.update((value) => !value);
    this._store.setPage(0);
  }

  /**
   * True si tous les utilisateurs paginés sont sélectionnés
   */
  readonly isAllPaginatedSelected = computed(() => {
    const paginated = this.paginatedItems();
    return paginated.length > 0 && paginated.every(item => this._store.selection().isSelected(item));
  });

  readonly isSomePaginatedSelected = computed(() => {
    const paginated = this.paginatedItems();
    const numSelected = paginated.filter(item => this._store.selection().isSelected(item)).length;
    return numSelected > 0 && numSelected < paginated.length;
  });

  protected isSelected(id: string): boolean {
    return this._store.selectedIds().includes(id);
  }

  protected selectedSize(): number {
    return this._store.selectedIds().length;
  }

  checkboxLabel(row: TodoWithRelations): string {
    if (!row) {
      return `${this._store.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this._store.selection().isSelected(row) ? 'deselect' : 'select'}`;
  }

  protected masterToggle(): void {
    const paginatedItems = this.paginatedItems();
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

