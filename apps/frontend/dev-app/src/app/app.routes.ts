import { Route } from '@angular/router';

export const appRoutes: Route[] = [

  {
    path: '',
    loadComponent: () =>
      import('@fe/layout').then(m => m.Layout),
    children: [
      // {
      //   path: 'home',
      //   loadComponent: () =>
      //     import('../app/features/home/home-page.component').then(m => m.HomePageComponent),
      // },
      // {
      //   path: 'userprofile',
      //   loadComponent: () =>
      //     import('../app/features/user/userprofile/userprofile.component').then(m => m.UserprofileComponent),
      // },


    ],
  },
];
