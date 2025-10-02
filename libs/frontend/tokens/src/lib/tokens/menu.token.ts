import { InjectionToken } from '@angular/core';
import { MenuItems } from '@fe/layout';

export const MENU_ITEMS_TOKEN = new InjectionToken<MenuItems[]>('MENU_ITEMS');
