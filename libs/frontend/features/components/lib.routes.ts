import { Route } from '@angular/router';
import { Login } from './authenticate/login/src';
import { Register } from './authenticate/register/src';
import { Resetpwd } from './authenticate/resetpwd/resetpwd';


export const componentRoutes: Route[] =
[
  { path: '', component: Login },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'reset-password', component: Resetpwd },
];
