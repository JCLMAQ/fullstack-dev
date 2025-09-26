import { InjectionToken } from '@angular/core';
import { MenuItems } from '../layout/src/lib/menu.model';

export const MENU_ITEMS = new InjectionToken<MenuItems[]>('MENU_ITEMS');
