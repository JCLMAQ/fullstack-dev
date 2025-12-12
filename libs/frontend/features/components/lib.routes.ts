import { Route } from '@angular/router';
import { Login } from './authenticate/login/src';
import { Register } from './authenticate/register/src';


export const componentRoutes: Route[] =
[
  { path: '', component: Login },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
];
