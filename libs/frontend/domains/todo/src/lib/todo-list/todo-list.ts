import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TodoStore } from '../store/todo-store';

@Component({
  selector: 'lib-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
  // providers: [TodoStore],
})
export class TodoList {
  readonly _store = inject(TodoStore);
  private readonly _router = inject(Router);

  constructor() {
    // this.store.loadTodos();
  }

  routeToDetail = "/todos/detail";

  mode: 'Edit' | 'View' | undefined ;

  // filter$ = linkedSignal(() => this.store.filter());

  // todos$ = this.store.todosValue;
  // todosStatus$ = this.store.todosStatus;
  // todosError$ = this.store.todosError;
  // todosIsLoading$ = this.store.todosIsLoading;
  // todosIds$ = this.store.todosIds;
  // todosEntityMap$ = this.store.todosEntityMap;
  // todosEntities$ = this.store.todosEntities;



  // Add filterForm
  // filterForm = form(this.filter$, (schema) => {
  //   required(schema.ownerId, { message: 'Owner ID is required' });
  //   // minLength(schema.ownerId, 3, { message: 'Owner ID must be at least 3 characters' });
  //   // orgId is optional, but if provided, must be at least 3 characters
  //   // minLength(schema.orgId, 3, { message: 'Org ID must be at least 3 characters' });
  //   }
  // );

//   constructor() {
// this.store.updateFilter(
//       this.filterForm().value,
//     );
//   }
//   search(): void {
//     this.store.updateFilter(
//       this.filterForm().value(),
//     );
//   }

}
