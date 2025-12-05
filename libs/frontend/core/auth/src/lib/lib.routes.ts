import { Route } from '@angular/router';
// import { Auth } from './auth/auth';
import { Login } from '@fe/login';
import { Changepwd } from './changepwd/changepwd';
import { Forgotpwd } from './forgotpwd/forgotpwd';
import { Register } from './register/register';
import { Resetpwd } from './resetpwd/resetpwd';

export const authRoutes: Route[] = [

  { path: 'login', component: Login,
  },
  { path: 'register', component: Register,
  },
  { path: 'forgotpwd', component: Forgotpwd,
  },
  { path: 'changepwd', component: Changepwd,
  },
   { path: 'resetpwd', component: Resetpwd,
  },
  { path: '', component: Login,}

];
