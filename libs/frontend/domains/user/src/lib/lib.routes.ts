import { Route } from '@angular/router';
import { UserList } from './user-list/user-list';
import { UserProfile } from './user-profile/user-profile';
import { User } from './user/user';

export const userRoutes: Route[] = [
  { path: '', component: User },
  { path: 'userprofile', component: UserProfile },
  { path: 'list', component: UserList },
];
