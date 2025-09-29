import { Route } from '@angular/router';
import { Layout } from './layout/layout';

export const layoutRoutes: Route[] = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        loadChildren: () => import('@fe/pages').then(m => m.pagesRoutes)
      }
    ]
  }
];
