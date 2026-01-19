import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PhoneNumberFormat } from 'google-libphonenumber';
import { PhoneNumberInput } from '../phone-number/phone-number-input';

@Component({
  selector: 'lib-phone-include',
  imports: [
    RouterOutlet,
    FormsModule,
    PhoneNumberInput,
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
],
  templateUrl: './phone-include.html',
  styleUrl: './phone-include.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneInclude {

  private translate = inject(TranslateService);
  // Signals pour l'état du formulaire
  phoneValue = signal<string>('');
  setPhoneInputValue = signal<string>('');
  currentPhoneValue = signal<string>('');
  currentCountryCode = signal<string>('');
  currentCountryISO = signal<string>('');
  submittedPhoneValue = signal<string>('');
  showSetPhoneInput = signal<boolean>(false);
  enableI18n = signal<boolean>(true);
  selectedLanguage = signal<string>('en');
  isDarkMode = signal<boolean>(false);

  PhoneNumberFormat = PhoneNumberFormat;

  // Liste des langues disponibles
  // availableLanguages = [
  //   { code: 'en', label: 'English' },
  //   { code: 'fr', label: 'Français' },
  //   // { code: 'es', label: 'Español' },
  //   { code: 'de', label: 'Deutsch' },
  //   { code: 'nl', label: 'Nederlands' }
  // ];

  // Computed pour la validation du formulaire
  isFormValid = computed(() => {
    const phone = this.currentPhoneValue();
    return phone && phone.length > 0;
  });

  constructor() {
    // Définir la langue par défaut
    // this.translate.setDefaultLang('en');
    // this.translate.use('en');

    // Effet pour gérer le changement de thème
    effect(() => {
      const isDark = this.isDarkMode();
      if (isDark) {
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
      }
    });
  }

  switchLanguage(lang: string): void {
    this.selectedLanguage.set(lang);
    this.translate.use(lang);
  }

  toggleI18n(): void {
    this.enableI18n.update(v => !v);
  }

  toggleDarkMode(): void {
    this.isDarkMode.update(v => !v);
  }

  getValue(value: string): void {
    this.currentPhoneValue.set(value);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (!this.isFormValid()) {
      return;
    }
    this.submittedPhoneValue.set(this.currentPhoneValue());
  }

  setPhone(): void {
    const newPhone = this.setPhoneInputValue();
    this.phoneValue.set(newPhone);
  }

  updateSetPhoneInput(value: string): void {
    this.setPhoneInputValue.set(value);
  }

  toggleShowSetPhoneInput(): void {
    this.showSetPhoneInput.set(!this.showSetPhoneInput());
  }

  resetForm(): void {
    this.phoneValue.set('');
    this.setPhoneInputValue.set('');
    this.currentPhoneValue.set('');
    this.currentCountryCode.set('');
    this.currentCountryISO.set('');
  }

  getCountryCode(value: string): void {
    this.currentCountryCode.set(value);
  }

  getCountryISO(value: string): void {
    this.currentCountryISO.set(value);
  }
}
