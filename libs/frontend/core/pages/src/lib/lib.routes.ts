import { Route } from '@angular/router';
import { CarouselPage } from './carousel-page/carousel-page';
import { FilesPage } from './files-page/files-page';
import { Home } from './home/home';
import { ImagesPage } from './images-page/images-page';
import { PageNotFound } from './page-not-found/page-not-found';

export const pagesRoutes: Route[] = [
  { path: 'home', component: Home },
  { path: 'picture', component: ImagesPage },
  { path: 'file', component: FilesPage },
  { path: 'carouselpicture', component: CarouselPage },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'page-not-found', component: PageNotFound },
  { path: '**', component: PageNotFound },
  {
  path: 'auth',
  loadChildren: () => import('@fe/components').then((m) => m.componentRoutes),
},

];
