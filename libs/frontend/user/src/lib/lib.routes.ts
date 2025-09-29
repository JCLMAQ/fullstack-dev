import { Route } from '@angular/router';
import { UserProfile } from './user-profile/user-profile';
import { User } from './user/user';

export const userRoutes: Route[] = [
  { path: 'users', component: User },
  { path: 'users/userprofile', component: UserProfile }
];
