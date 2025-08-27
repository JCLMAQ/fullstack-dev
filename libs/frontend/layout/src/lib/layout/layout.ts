import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

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
