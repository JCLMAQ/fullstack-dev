import { Route } from '@angular/router';
import { Layout } from './layout/layout';
export const layoutRoutes: Route[] = [
  {
    path: '',
    component: Layout,
children: [
      {
        path: '',
        redirectTo: 'pages/home',
        pathMatch: 'full',
      },
      {
        path: 'pages',
        loadChildren: () => import('@fe/pages').then((m) => m.pagesRoutes),
      },
      // {
      //   path: 'auth',
      //   loadChildren: () => import('@fe/auth').then((m) => m.authRoutes),
      // },
      {
        path: 'auth',
        loadChildren: () =>
          import('@fe/components').then((m) => m.componentRoutes),
      },
      {
        path: 'users',
        loadChildren: () => import('@fe/user').then((m) => m.userRoutes),
      },
      {
        path: 'phones',
        loadChildren: () => import('@fe/phone').then((m) => m.phoneRoutes),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('@fe/dashboard').then((m) => m.dashboardRoutes),
          // canActivate: [isUserAuthenticated],
      },
      // {
      //   path: 'files',
      //   loadChildren: () =>
      //     import('@fe/file-mgt').then(
      //       (m) => m.fileMgtRoutes
      //     ),
      // }
    ],
  }


];
