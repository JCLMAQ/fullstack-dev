import { InjectionToken } from '@angular/core';
import { MenuItems } from '../layout/src/lib/models/menu.model';

export const MENU_ITEMS_TOKEN = new InjectionToken<MenuItems[]>('MENU_ITEMS');
