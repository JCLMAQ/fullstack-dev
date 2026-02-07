import { JsonPipe } from '@angular/common';
import { Component, computed, inject, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSort, MatSortModule } from '@angular/material/sort';
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
    // this.store.loadTodos();
  }

  routeToDetail = "/todos/detail";

  mode: 'Edit' | 'View' | 'add' | undefined = 'View';
  master = false; // true : button is disable
  owner = false; // true button is disable;

  // ViewChild pour tri et pagination
  protected readonly sort = viewChild(MatSort);
  protected readonly paginator = viewChild(MatPaginator);
  protected readonly sortState = computed(() => this._store.currentSort() || { active: '', direction: '' });


  // todos$ = this.store.todosValue;
  // todosStatus$ = this.store.todosStatus;
  // todosError$ = this.store.todosError;
  // todosIsLoading$ = this.store.todosIsLoading;
  // todosIds$ = this.store.todosIds;
  // todosEntityMap$ = this.store.todosEntityMap;
  // todosEntities$ = this.store.todosEntities;

  // Selection Boutons
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

    // checkboxLabel(row: TodoWithRelations): string {
    //     if (!row) {
    //       return `${this._store.isAllSelected() ? 'select' : 'deselect'} all`;
    //     }
    //     return `${this._store.selection().isSelected(row) ? 'deselect' : 'select'}`;
    //   }

}
