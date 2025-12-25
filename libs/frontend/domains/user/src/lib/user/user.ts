import { Component } from '@angular/core';
import { UserList } from '../user-list/user-list';

@Component({
  selector: 'lib-user',
  imports: [UserList],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {}
