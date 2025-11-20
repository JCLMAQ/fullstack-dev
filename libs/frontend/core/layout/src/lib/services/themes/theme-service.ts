import { computed, effect, Injectable, signal } from '@angular/core';

export interface lightDarkTheme {
  name: 'light' | 'dark' | 'system';
  icon: string;
}

export interface ColorTheme {
  id: string;
  primary: string;
  displayName: string;
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private lightDarkTheme = signal<'light' | 'dark' | 'system'>('system');

  private readonly STORAGE_LIGHT_DARK_KEY = 'theme.lightDark';
  private readonly STORAGE_COLOR_KEY = 'theme.color';

  private themesApp: lightDarkTheme[] = [
    { name: 'light', icon: 'light_mode' },
    { name: 'dark', icon: 'dark_mode' },
    { name: 'system', icon: 'desktop_windows' },
  ];

  selectedLightDarkTheme = computed(() =>
    this.themesApp.find((t) => t.name === this.lightDarkTheme()),
  );

  getLightDarkThemes() {
    return this.themesApp;
  }

  setLightDarkTheme(themesApp: 'light' | 'dark' | 'system') {
    this.lightDarkTheme.set(themesApp);
  }

  switchLightDarkTheme() {
    const currentTheme = this.lightDarkTheme();
    console.log(`🔄 Basculement du thème depuis: ${currentTheme}`);
    if (currentTheme === 'light') {
      this.lightDarkTheme.set('dark');
      console.log('➡️ Nouveau thème: dark');
    } else if (currentTheme === 'dark') {
      this.lightDarkTheme.set('system');
      console.log('➡️ Nouveau thème: system');
    } else {
      this.lightDarkTheme.set('light');
      console.log('➡️ Nouveau thème: light');
    }
  }

  constructor() {

    if (typeof window !== 'undefined') {
      try {
        const savedMode = localStorage.getItem(this.STORAGE_LIGHT_DARK_KEY) as 'light' | 'dark' | 'system' | null;
        if (savedMode && ['light', 'dark', 'system'].includes(savedMode)) {
          this.lightDarkTheme.set(savedMode);
        }
        const savedColorId = localStorage.getItem(this.STORAGE_COLOR_KEY);
        if (savedColorId) {
          const theme = this.themesColor.find((t) => t.id === savedColorId);
            if (theme) {
              this.currentColorTheme.set(theme);
            }
        }
      } catch {}
    }

    effect(() => {
      const lightDarkTheme = this.lightDarkTheme();
      const colorScheme =
        lightDarkTheme === 'system' ? 'light dark' : lightDarkTheme;
      document.body.style.setProperty('color-scheme', colorScheme);

      // Gestion des classes Tailwind pour le mode sombre
      if (lightDarkTheme === 'dark') {
        document.documentElement.classList.add('dark');
        console.log('🌙 Mode sombre activé - classe dark ajoutée');
      } else if (lightDarkTheme === 'light') {
        document.documentElement.classList.remove('dark');
        console.log('☀️ Mode clair activé - classe dark supprimée');
      } else {
        // Mode système : utilise la préférence du navigateur
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
          document.documentElement.classList.add('dark');
          console.log('🌙 Mode système (sombre) - classe dark ajoutée');
        } else {
          document.documentElement.classList.remove('dark');
          console.log('☀️ Mode système (clair) - classe dark supprimée');
        }
      }

      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem(this.STORAGE_LIGHT_DARK_KEY, lightDarkTheme);
        } catch {}
      }

    });

    // Écouter les changements de préférence système
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleMediaChange = () => {
        if (this.lightDarkTheme() === 'system') {
          if (mediaQuery.matches) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
      };

      mediaQuery.addEventListener('change', handleMediaChange);
    }
  }

  // Custom Color theme code
  private readonly themesColor: ColorTheme[] = [
    {
      id: 'blue',
      primary: '#1976D2',
      displayName: 'Blue',
    },
    { id: 'green', primary: '#00796B', displayName: 'Green' },
    { id: 'orange', primary: '#E65100', displayName: 'Orange' },
    { id: 'purple', primary: '#6200EE', displayName: 'Purple' },
    { id: 'red', primary: '#C2185B', displayName: 'Red' },
  ];

  currentColorTheme = signal<ColorTheme>(this.themesColor[0]);

  getColorThemes(): ColorTheme[] {
    return this.themesColor;
  }

  setColorTheme(themeId: string): void {
    const theme = this.themesColor.find((t) => t.id === themeId);
    if (theme) {
      this.currentColorTheme.set(theme);
    }
  }

  updateThemeClass = effect(() => {
    const theme = this.currentColorTheme();
    document.body.classList.remove(
      ...this.themesColor.map((t) => `${t.id}-theme`),
    );
    document.body.classList.add(`${theme.id}-theme`);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(this.STORAGE_COLOR_KEY, theme.id);
      } catch {}
    }
  });
}
