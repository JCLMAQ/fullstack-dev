import { Route } from '@angular/router';
import { Login } from './login/src';
import { Register } from './register/src';


export const componentRoutes: Route[] =
[
  { path: '', component: Login },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
];
