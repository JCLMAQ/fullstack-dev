import { Component } from '@angular/core';
import { TodoList } from '../todo-list/todo-list';

@Component({
  selector: 'lib-todo',
  imports: [
    TodoList
  ],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {}
