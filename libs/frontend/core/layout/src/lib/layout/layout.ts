import { Component, inject, signal, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterOutlet } from '@angular/router';
import { ImageMgt } from '@fe/image-mgt';
import { ResponsiveService } from '../services/responsive/responsive-service';
import { CustomSidenav } from './custom-sidenav/custom-sidenav';
import { Header } from './header/header';

@Component({
  selector: 'lib-layout',
  imports: [
    MatSidenavModule,
    CustomSidenav,
    Header,
    RouterOutlet,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    ImageMgt,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  responsiveService = inject(ResponsiveService);
  readonly sidenav = viewChild.required(MatSidenav);
  readonly rightSidenav = viewChild.required<MatSidenav>('rightSidenav');

  isRightDrawerOpen = signal(false);

  backDrop() {
    if (this.responsiveService.isMobile()) {
      this.responsiveService.isMenuBarOpen.set(
        !this.responsiveService.isMenuBarOpen(),
      );
    }
  }

  toggleRightDrawer() {
    this.isRightDrawerOpen.set(!this.isRightDrawerOpen());
  }

  // appStore = inject(AppStore)
  // logCurrentUser = effect(() => {
  //   console.log("App Store user computed: ", this.appStore.user());
  // });
}
