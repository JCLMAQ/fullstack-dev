import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormField, form, maxLength, minLength, required, schema } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute } from '@angular/router';
import { Phone, PhoneType } from '@db/prisma';
import { map } from 'rxjs';
import { PhoneService } from '../services/phone-service';

interface PhoneFormModel {
  id: number | null;
  userId: string;
  countryCode: string;
  countryIso: string;
  number: string;
  extension: string;
  phoneType: PhoneType;
  isPrimary: boolean;
  createdAt: string;
  updatedAt: string;
}

const phoneSchema = schema<PhoneFormModel>((f) => {
  required(f.userId, { message: 'Utilisateur requis' });
  required(f.countryCode, { message: 'Indicatif requis' });
  required(f.countryIso, { message: 'Code ISO requis' });
  minLength(f.countryIso, 2, { message: 'Code ISO trop court' });
  maxLength(f.countryIso, 3, { message: 'Code ISO trop long' });
  required(f.number, { message: 'Numéro requis' });
  minLength(f.number, 6, { message: 'Numéro trop court' });
});

@Component({
  selector: 'lib-phone-detail',
  imports: [
    JsonPipe,
    FormField,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDividerModule,
  ],
  templateUrl: './phone-detail.html',
  styleUrl: './phone-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly phoneService = inject(PhoneService);

  readonly phoneId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id'))),
    { initialValue: null },
  );

  readonly phoneState = signal<PhoneFormModel>(this.createEmptyPhone());
  readonly phoneForm = form(this.phoneState, phoneSchema);

  readonly phoneTypeOptions = Object.values(PhoneType);

  readonly isLoading = signal(false);
  readonly loadError = signal<string | null>(null);
  readonly submittedPhone = signal<PhoneFormModel | null>(null);

  readonly hasExistingId = computed(() => !!this.phoneState().id);

  constructor() {
    effect(() => {
      const id = this.phoneId();

      this.submittedPhone.set(null);

      if (!id) {
        this.loadError.set(null);
        this.phoneState.set(this.createEmptyPhone());
        return;
      }

      void this.loadPhone(id);
    });
  }

  submit(): void {
    if (!this.phoneForm().valid()) {
      this.touchAllFields();
      return;
    }

    this.submittedPhone.set(this.phoneState());
  }

  private async loadPhone(id: string): Promise<void> {
    this.isLoading.set(true);
    this.loadError.set(null);

    try {
      const phone = await this.phoneService.getPhoneById(id);
      this.phoneState.set(this.mapPhoneToForm(phone));
    } catch {
      this.loadError.set('Impossible de charger ce téléphone.');
      this.phoneState.set(this.createEmptyPhone());
    } finally {
      this.isLoading.set(false);
    }
  }

  private touchAllFields(): void {
    this.phoneForm.userId().markAsTouched();
    this.phoneForm.countryCode().markAsTouched();
    this.phoneForm.countryIso().markAsTouched();
    this.phoneForm.number().markAsTouched();
    this.phoneForm.extension().markAsTouched();
    this.phoneForm.phoneType().markAsTouched();
    this.phoneForm.isPrimary().markAsTouched();
  }

  private mapPhoneToForm(phone: Phone): PhoneFormModel {
    return {
      id: Number(phone.id),
      userId: phone.userId,
      countryCode: phone.countryCode,
      countryIso: phone.countryIso,
      number: phone.number,
      extension: phone.extension ?? '',
      phoneType: phone.phoneType ?? PhoneType.Mobile,
      isPrimary: phone.isPrimary ?? false,
      createdAt: phone.createdAt ? new Date(phone.createdAt).toISOString() : '',
      updatedAt: phone.updatedAt ? new Date(phone.updatedAt).toISOString() : '',
    };
  }

  private createEmptyPhone(): PhoneFormModel {
    return {
      id: null,
      userId: '',
      countryCode: '',
      countryIso: '',
      number: '',
      extension: '',
      phoneType: PhoneType.Mobile,
      isPrimary: false,
      createdAt: '',
      updatedAt: '',
    };
  }
}
