import { Route } from '@angular/router';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';

export const pagesRoutes: Route[] = [
  { path: 'home', component: Home },
  { path: 'page-not-found', component: PageNotFound },
  { path: '**', component: PageNotFound }
];
