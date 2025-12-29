import { DatePipe } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { customError, disabled, Field, form, required, validate } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { Gender, Language, Position, Title } from '@db/prisma';
import { FieldError } from '@fe/signalform-utilities';
import { TranslateModule } from '@ngx-translate/core';
import { UserStore } from '../store/user-store';

type UserFormData = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  title: Title | null;
  nickName: string;
  Gender: Gender | null;
  Language: Language | null;
  photoUrl: string;
  dateOfBirth: Date | null;
  hasEmergencyContact: boolean;
  emergencyContactName: string;
  emergencyContactPhone: string;
  position: Position | null;
  jobTitle: string;
  isValidated: Date | null;
  isSuspended: Date | null;
  managerId: string;
  published: boolean | null;
  isPublic: boolean | null;
};


@Component({
  selector: 'lib-user-detail',
  imports: [
    DatePipe,
    Field,
    FieldError,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatDividerModule,
    MatSnackBarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TranslateModule,
  ],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss',
})
export class UserDetail {
  protected readonly userStore = inject(UserStore);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);

  // Form mode: 'view' | 'edit' | 'add'
  protected readonly mode = signal<'view' | 'edit' | 'add'>('view');
  // Current user ID from route
  protected readonly userId = signal<string | null>(null);

  // Signal pour les données du formulaire
  protected readonly userData = signal<UserFormData>({
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    title: null,
    nickName: '',
    Gender: null,
    Language: null,
    photoUrl: '',
    dateOfBirth: null,
    hasEmergencyContact: false,
    emergencyContactName: '',
    emergencyContactPhone: '',
    position: null,
    jobTitle: '',
    isValidated: null,
    isSuspended: null,
    managerId: '',
    published: null,
    isPublic: null,
  });

  // Form with Angular Signal Forms
  protected readonly userForm = form(this.userData, (path) => {
    required(path.email, { message: 'Email est requis' });
    validate(path.email, ({ value }) => {
      const email = value();
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return customError({
          kind: 'email',
          message: 'Email invalide'
        });
      }
      return null;
    });

    // Emergency contact conditional validation
    required(path.emergencyContactName, {
      message: 'Nom du contact d\'urgence requis',
      when: ({ valueOf }) => valueOf(path.hasEmergencyContact) === true
    });
    required(path.emergencyContactPhone, {
      message: 'Téléphone du contact d\'urgence requis',
      when: ({ valueOf }) => valueOf(path.hasEmergencyContact) === true
    });
    disabled(path.emergencyContactName, ({ valueOf }) => !valueOf(path.hasEmergencyContact));
    disabled(path.emergencyContactPhone, ({ valueOf }) => !valueOf(path.hasEmergencyContact));

    // Date of birth conditional validation
    required(path.dateOfBirth, {
      message: 'Date de naissance requise',
      when: ({ valueOf }) => valueOf(path.position) === 'Individual'
    });
    disabled(path.dateOfBirth, ({ valueOf }) => valueOf(path.position) !== 'Individual');

    // Job title conditional validation
    disabled(path.jobTitle, ({ valueOf }) => valueOf(path.position) !== 'Manager');
    required(path.jobTitle, {
      message: 'Fonction requise',
      when: ({ valueOf }) => valueOf(path.position) === 'Manager'
    })
  });

  // Options for selects
  protected readonly titleOptions: Title[] = ['Mr', 'Mme', 'Dct'];
  protected readonly genderOptions: Gender[] = ['MALE', 'FEMELE', 'UNKNOWN', 'NONE'];
  protected readonly languageOptions: Language[] = ['en', 'fr'];
  protected readonly positionOptions: Position[] = ['Individual', 'Manager', 'Member', 'Secretary'];

  protected readonly isAdmin = computed(() => true); // TODO: Get from auth service

  constructor() {
    // Load user id and mode from route params and set selected user in store
      const params = this.route.snapshot.params;
      // user id from route
      this.userId.set(params['id'] ?? null);
      if((this.userId() === undefined )|| (this.userId() === null)){
        this.userId.set(this.userStore.userEntities().at(0)?.id ?? null);
      }
      // mode from route
      this.mode.set((params['mode'] ?? null));
      if(this.mode() === undefined || this.mode() === null) {
        this.mode.set('view');
      }
      // Set selected user in store and initialize navigation
      if (this.userId()) {
        this.userStore.setSelectedId(this.userId());
        this.userStore.initNavButton(this.userId()!);
      }

    // Populate form when selectedUser changes
    effect(() => {
      const selectedUser = this.userStore.selectedUser();
      if (selectedUser) {
        this.userData.set({
          id: selectedUser.id,
          email: selectedUser.email,
          firstName: selectedUser.firstName ?? '',
          lastName: selectedUser.lastName ?? '',
          title: selectedUser.title,
          nickName: selectedUser.nickName ?? '',
          Gender: selectedUser.Gender,
          Language: selectedUser.Language,
          photoUrl: selectedUser.photoUrl ?? '',
          dateOfBirth: selectedUser.dateOfBirth,
          hasEmergencyContact: selectedUser.hasEmergencyContact ?? false,
          emergencyContactName: selectedUser.emergencyContactName ?? '',
          emergencyContactPhone: selectedUser.emergencyContactPhone ?? '',
          position: selectedUser.position,
          jobTitle: selectedUser.jobTitle ?? '',
          isValidated: selectedUser.isValidated,
          isSuspended: selectedUser.isSuspended,
          managerId: selectedUser.managerId ?? '',
          published: selectedUser.published,
          isPublic: selectedUser.isPublic,
        });
      }
    });
  }

  // CRUD Operations
  protected save(): void {
    if (!this.userForm().valid()) {
      this.snackBar.open('Veuillez corriger les erreurs du formulaire', 'OK', { duration: 3000 });
      return;
    }

    const formValue = this.userForm().value();
    const userId = formValue.id;

    if (!userId) {
      this.snackBar.open('ID utilisateur manquant', 'OK', { duration: 3000 });
      return;
    }

    this.userStore.updateUser(userId, formValue);
    this.snackBar.open('Utilisateur sauvegardé avec succès', 'OK', { duration: 3000 });
    this.mode.set('view');
  }

  protected cancel(): void {
    const selectedUser = this.userStore.selectedUser();
    if (selectedUser) {
      this.userData.set({
        id: selectedUser.id,
        email: selectedUser.email,
        firstName: selectedUser.firstName ?? '',
        lastName: selectedUser.lastName ?? '',
        title: selectedUser.title,
        nickName: selectedUser.nickName ?? '',
        Gender: selectedUser.Gender,
        Language: selectedUser.Language,
        photoUrl: selectedUser.photoUrl ?? '',
        dateOfBirth: selectedUser.dateOfBirth,
        hasEmergencyContact: selectedUser.hasEmergencyContact ?? false,
        emergencyContactName: selectedUser.emergencyContactName ?? '',
        emergencyContactPhone: selectedUser.emergencyContactPhone ?? '',
        position: selectedUser.position,
        jobTitle: selectedUser.jobTitle ?? '',
        isValidated: selectedUser.isValidated,
        isSuspended: selectedUser.isSuspended,
        managerId: selectedUser.managerId ?? '',
        published: selectedUser.published,
        isPublic: selectedUser.isPublic,
      });
    }
    this.mode.set('view');
  }

  protected remove(): void {
    const userId = this.userForm().value().id;
    if (userId && confirm('Êtes-vous sûr de vouloir supprimer définitivement cet utilisateur ?')) {
      this.userStore.deleteUser(userId);
      this.snackBar.open('Utilisateur supprimé', 'OK', { duration: 3000 });
      this.router.navigate(['/users']);
    }
  }

  protected virtualRemove(): void {
    const userId = this.userForm().value().id;
    if (userId && confirm('Êtes-vous sûr de vouloir désactiver cet utilisateur ?')) {
      this.userStore.softDeleteUser(userId);
      this.snackBar.open('Utilisateur désactivé', 'OK', { duration: 3000 });
      this.router.navigate(['/users']);
    }
  }

  protected add(): void {
    // Set mode to add
    this.mode.set('add');
    // Clear form for new user
    this.userData.set({
      id: '',
      email: '',
      firstName: '',
      lastName: '',
      title: null,
      nickName: '',
      Gender: null,
      Language: null,
      photoUrl: '',
      dateOfBirth: null,
      hasEmergencyContact: false,
      emergencyContactName: '',
      emergencyContactPhone: '',
      position: null,
      jobTitle: '',
      isValidated: null,
      isSuspended: null,
      managerId: '',
      published: null,
      isPublic: null,
    });
    this.snackBar.open('Créez un nouvel utilisateur', 'OK', { duration: 3000 });
  }

  // Navigation between selected users - delegate to store
  protected first = () => this.userStore.first();
  protected previous = () => this.userStore.previous();
  protected next = () => this.userStore.next();
  protected last = () => this.userStore.last();

  protected reload(): void {
    const userId = this.userForm().value().id;
    if (userId) {
      this.userStore.loadUser(userId);
    }
  }

  protected goBack(): void {
    this.router.navigate(['/users']);
  }
}
