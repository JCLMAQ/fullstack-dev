import { ChangeDetectionStrategy, Component, inject, signal, viewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { ResponsiveService, ThemeService } from '@fe/services';

@Component({
  selector: 'lib-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  appStore = inject(AppStore);
  translate = inject(TranslateService);
  themeService = inject(ThemeService);
  responsiveService = inject(ResponsiveService);
  router = inject(Router);

  readonly sidenav = viewChild.required(MatSidenav);

  collapsed = this.responsiveService.isCollapsed;
  barOpen = this.responsiveService.isMenuBarOpen;

  currentLang = signal(this.translate.getCurrentLang() )// get current language

  setLanguage(language: string) {
    this.appStore.switchLanguage(language);
    this.currentLang.set(language);
    this.translate.use(language);
    // this.appStore.setDictionary(this.appStore._dictionaries[language]);
  }
  toggleMenu() {
    if(!this.barOpen()){
      this.barOpen.set(!this.barOpen());
    } else {
      if(!this.collapsed()){
        this.collapsed.set(!this.collapsed());

      } else {
        this.barOpen.set(!this.barOpen());
        this.collapsed.set(!this.collapsed());
      }
    }
  }

  navigate(route: string) {
    this.router.navigate([`/${route}`]);
  }

  toggleDarkMode() {
    this.themeService.switchLightDarkTheme();
  }
}
