import { InjectionToken } from '@angular/core';
import { MenuItems } from '../menu.model';

export const MENU_ITEMS = new InjectionToken<MenuItems[]>('MENU_ITEMS');
