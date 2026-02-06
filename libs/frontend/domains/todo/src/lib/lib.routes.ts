import { Route } from '@angular/router';
import { isUserAuthenticated } from '@fe/auth';
import { TodoStore } from './store/todo-store';
import { TodoDetail } from './todo-detail/todo-detail';
import { TodoList } from './todo-list/todo-list';
import { Todo } from './todo/todo';

export const todoRoutes: Route[] = [
  {
    path: '',
    canActivate: [isUserAuthenticated],
    providers: [TodoStore], // Store partagé pour toutes les routes enfants
    children: [
      { path: '', component: Todo },
      { path: 'list', component: TodoList },
      { path: 'detail/:id', component: TodoDetail },
    ]
  },
];
