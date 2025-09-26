import { Component, computed, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { ResponsiveService } from '../../../../services/responsive/responsive-service';
import { menuItems } from '../menu-items';
import { MenuItem } from './menu-item/menu-item';
import { SidenavHeader } from './sidenav-header/sidenav-header';

@Component({
  selector: 'lib-custom-sidenav',
  imports: [
    MenuItem,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    MatIconModule,
    SidenavHeader
  ],
  templateUrl: './custom-sidenav.html',
  styleUrl: './custom-sidenav.scss',
})
export class CustomSidenav {
  responsiveService = inject(ResponsiveService);

  collapsed = computed(() => this.responsiveService.isCollapsed());

  menuItems = menuItems;


}
