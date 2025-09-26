import { Route } from '@angular/router';


export const appRoutes: Route[] = [

  // { path: '', component: Layout }
   { path: '', loadComponent: () => import('@fe/layout').then(m => m.Layout) }
];
