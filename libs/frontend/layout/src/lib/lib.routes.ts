import { Route } from '@angular/router';
import { Layout } from './layout/layout';

export const layoutRoutes: Route[] = [
  {
    path: '',
    component: Layout,
    children: [

      {
        path: 'users',
        loadChildren: () => import('@fe/user').then(m => m.userRoutes)
      },
       {
        path: '',
        loadChildren: () => import('@fe/pages').then(m => m.pagesRoutes)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../../../shared/dashboard').then(m => m.dashboardRoutes)
      }
    ]
  }
];
