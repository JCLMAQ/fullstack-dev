import { Route } from '@angular/router';
import { Forgotpwd } from './authenticate/forgotpwd/forgotpwd';
import { Login } from './authenticate/login/src';
import { Register } from './authenticate/register/src';
import { Resetpwd } from './authenticate/resetpwd/resetpwd';


export const componentRoutes: Route[] =
[
  { path: '', component: Login },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'forgotpwd', component: Forgotpwd },
  { path: 'resetpwd', component: Resetpwd },
];
