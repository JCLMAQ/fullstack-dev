import { Route } from '@angular/router';
import { UserStore } from './store/user-store';
import { UserList } from './user-list/user-list';
import { UserProfile } from './user-profile/user-profile';
import { User } from './user/user';

export const userRoutes: Route[] = [
  { path: '', component: User },
  { path: 'userprofile', component: UserProfile },
  { path: 'list', component: UserList, providers: [UserStore] },
];
