import { JsonPipe } from '@angular/common';
import { Component, computed, effect, inject, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { TodoWithRelations } from '@db/prisma';
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
  providers: [{ provide: MatPaginatorIntl, useClass: DictionaryPaginatorIntl }]
  // providers: [TodoStore],
})
export class TodoList {
  readonly _store = inject(TodoStore);
  private readonly _router = inject(Router);

  constructor() {
      // Synchroniser l'affichage des flèches de tri avec le store
    effect(() => {
      const savedSort = this._store.currentSort();
      const matSort = this.sort();
      if (savedSort && matSort) {
        matSort.active = savedSort.active;
        matSort.direction = (savedSort.direction as 'asc' | 'desc');
        // Émettre l'event sortChange pour que MatSort se mette à jour
        matSort.sortChange.emit(savedSort as Sort);
      }
    });

    // Synchroniser la sélection triée avec la liste filtrée et triée
    effect(() => {
      const todos = this.filteredTodos();
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
    protected readonly displayedColumns: string[] = ['select', 'OrderTodo', 'numSeq', 'title','todoState','content', 'actions'];
    columnsToDisplay: string[] = ['select', 'OrderTodo', 'numSeq', 'title','todoState','content'];
    // columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand',  'tools'];
    columnsToDisplayWithExpand = [...this.columnsToDisplay,  'tools'];
    expandedElement!: TodoWithRelations | null;

    // Filtrage
  protected readonly filterValue = this._store.filterValue;
  protected readonly filteredTodos = this._store.sortedTodos;

  // Pagination
  protected readonly pageIndex = this._store.pageIndex;
  protected readonly pageSize = this._store.pageSize;
  protected readonly paginatedTodos = this._store.paginatedItems;
  protected readonly totalTodos = this._store.todosCount;





  // todos$ = this.store.todosValue;
  // todosStatus$ = this.store.todosStatus;
  // todosError$ = this.store.todosError;
  // todosIsLoading$ = this.store.todosIsLoading;
  // todosIds$ = this.store.todosIds;
  // todosEntityMap$ = this.store.todosEntityMap;
  // todosEntities$ = this.store.todosEntities;

// Méthodes d'actions sur les todos

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

  // protected viewTodo(id: string): void {
  //   this.selectTodo(id);
  // }

  protected onPageChange(event: { pageIndex: number; pageSize: number }): void {
    this._store.setPagination(event.pageIndex, event.pageSize);
  }

  protected softDeleteTodo(id: string): void {
    // TODO: Implémenter le soft delete via le store
    console.log('Soft delete todo:', id);
    // this._store.softDeleteTodo(id);
  }

  protected hardDeleteTodo(id: string): void {
    // TODO: Implémenter le hard delete via le store
    console.log('Hard delete todo:', id);
    // this._store.hardDeleteTodo(id);
  }


  // Selection CheckBox Mgt
protected toggleAll(): void {
    this._store.toggleAll();
  }
  protected toggleSelection(id: string): void {
    this._store.toggleSelection(id);
  }
  protected isSelected(id: string): boolean {
    return this._store.selectedIds().includes(id);
  }
  protected selectedSize(): number {
    return this._store.selectedIds().length;
  }
  protected toggleRowSelection(todo: TodoWithRelations): void {
      this._store.toggleSelection(todo.id);
    }
// protected masterToggle(): void {
//     const paginatedTodos = this.paginatedTodos();
//     const allSelected = paginatedTodos.length > 0 && paginatedTodos.every(todo => this._store.selection().isSelected(todo));
//     if (allSelected) {
//       paginatedTodos.forEach(todo => {
//         if (this._store.selection().isSelected(todo)) {
//           this._store.toggleSelection(todo.id);
//         }
//       });
//     } else {
//       paginatedTodos.forEach(todo => {
//         if (!this._store.selection().isSelected(todo)) {
//           this._store.toggleSelection(todo.id);
//         }
//       });
//     }
//   }

    // checkboxLabel(row: TodoWithRelations): string {
    //     if (!row) {
    //       return `${this._store.isAllSelected() ? 'select' : 'deselect'} all`;
    //     }
    //     return `${this._store.selection().isSelected(row) ? 'deselect' : 'select'}`;
    //   }

}
