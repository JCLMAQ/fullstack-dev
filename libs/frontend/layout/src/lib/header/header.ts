import { Component, inject, signal, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { DictionaryStore } from '../../../../store/dictionary/dictionary.store';
import { ResponsiveService } from '../services/responsive/responsive-service';
import { ThemeService } from '../services/themes/theme-service';

@Component({
  selector: 'lib-header',
  imports: [
    MatToolbar,
    MatIcon,
    MatButtonModule,
    MatMenuModule,
    // MatDivider,
    // TitleCasePipe,
    TranslatePipe,
    // FlagComponent


  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
dictionaryStore = inject(DictionaryStore);
  ngxtranslateService = inject(TranslateService);
  themeService = inject(ThemeService);
  responsiveService = inject(ResponsiveService);
  router = inject(Router);

  readonly sidenav = viewChild.required(MatSidenav);

  collapsed = this.responsiveService.isCollapsed;
  barOpen = this.responsiveService.isMenuBarOpen;

  currentLang = signal(this.ngxtranslateService.getCurrentLang() )// get current language

  setLanguage(language: string) {
    this.dictionaryStore.switchLanguage(language);
    this.currentLang.set(language);
    this.ngxtranslateService.use(language);
    // this.dictionaryStore.setDictionary(this.dictionaryStore._dictionaries[language]);
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
