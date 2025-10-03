import { Route } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';


export const dashboardRoutes: Route[] = [
  { path: 'dashboard', component: Dashboard },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '**', component: PageNotFound }
];
