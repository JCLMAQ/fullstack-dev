import { Route } from '@angular/router';
import { isUserAuthenticated } from '@fe/core/auth';
import { PhoneDetail } from './phone-detail/phone-detail';
import { PhoneInclude } from './phone-include/phone-include';
import { PhoneList } from './phone-list/phone-list';
import { PhoneNumberInput } from './phone-number/phone-number-input';
// import { Phone } from './phone/phone';
import { PhoneStore } from './store/phone-store';


export const phoneRoutes: Route[] = [
  {
    path: '',
    canActivate: [isUserAuthenticated],
    providers: [PhoneStore], // Store partagé pour toutes les routes enfants
    children: [
      { path: '', component: PhoneList },
      { path: 'phoneinclude', component: PhoneInclude },
      { path: 'list', component: PhoneList },
      { path: 'detail/:id', component: PhoneDetail },
      { path: 'phonenumber', component: PhoneNumberInput },
    ]
  },
];
