import { Route } from '@angular/router';
import { PhoneDetail } from './phone-detail/phone-detail';
import { PhoneInclude } from './phone-include/phone-include';
import { PhoneList } from './phone-list/phone-list';
import { PhoneNumber } from './phone-number/phone-number';
import { PhoneStore } from './store/phone-store';


export const phoneRoutes: Route[] = [
  {
    path: '',
    providers: [PhoneStore], // Store partagé pour toutes les routes enfants
    children: [
      { path: '', component: PhoneList },
      { path: 'phoneinclude', component: PhoneInclude },
      { path: 'list', component: PhoneList },
      { path: 'detail/:id', component: PhoneDetail },
      { path: 'phonenumber', component: PhoneNumber },
    ]
  },
];
