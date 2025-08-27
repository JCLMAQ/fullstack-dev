import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { ResponsiveService } from '@fe/services';
import { MenuItem } from './custom-sidenav/menu-item/menu-item';
import { menuItems } from './custom-sidenav/menu-item/menu-items';
import { SidenavHeader } from './custom-sidenav/sidenav-header/sidenav-header';
@Component({
  selector: 'lib-layout',
  imports: [
    MatSidenavModule,
    MatListModule,
    RouterModule,
    MatIconModule,
    MenuItem,
    SidenavHeader
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout {
  responsiveService = inject(ResponsiveService);

  collapsed = computed(() => this.responsiveService.isCollapsed());

  menuItems = menuItems;
}
