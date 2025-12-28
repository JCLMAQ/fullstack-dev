import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
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
import { Gender, Language, Position, Title, User } from '@db/prisma';
import { FieldError } from '@fe/signalform-utilities';
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
  ],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetail {
  protected readonly userStore = inject(UserStore);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);

  // Form mode: 'view' | 'edit'
  protected readonly mode = signal<'view' | 'edit'>('view');

  // Current user index in selectedUsers
  protected readonly currentIndex = signal<number>(-1);

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
  });

  // Options for selects
  protected readonly titleOptions: Title[] = ['Mr', 'Mme', 'Dct'];
  protected readonly genderOptions: Gender[] = ['MALE', 'FEMELE', 'UNKNOWN', 'NONE'];
  protected readonly languageOptions: Language[] = ['en', 'fr'];
  protected readonly positionOptions: Position[] = ['Individual', 'Manager', 'Member', 'Secretary'];

  // Computed derived signals
  protected readonly isLoading = computed(() => this.userStore.isLoading());
  protected readonly selectedUsers = computed(() => {
    const entities = this.userStore.userEntityMap();
    return this.userStore.selectedIds()
      .map((id: string) => entities[id as keyof typeof entities])
      .filter((user): user is User => user !== undefined);
  });
  protected readonly isFirst = computed(() => this.currentIndex() === 0);
  protected readonly isLast = computed(
    () => this.currentIndex() === this.selectedUsers().length - 1,
  );
  protected readonly hasPrevious = computed(() => this.currentIndex() > 0);
  protected readonly hasNext = computed(() => this.currentIndex() < this.selectedUsers().length - 1);
  protected readonly isAdmin = computed(() => true); // TODO: Get from auth service

  constructor() {
    // Load user from route params
    effect(() => {
      const params = this.route.snapshot.params;
      const id = params['id'];
      if (id) {
        this.userStore.loadUser(id);
      }
    });

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
        this.mode.set('view');

        // Find current index in selectedUsers
        const idx = this.selectedUsers().findIndex((u: User) => u.id === selectedUser.id);
        if (idx >= 0) {
          this.currentIndex.set(idx);
        }
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
    this.mode.set('edit');
    this.snackBar.open('Créez un nouvel utilisateur', 'OK', { duration: 3000 });
  }

  // Navigation between selected users
  protected first(): void {
    if (this.selectedUsers().length > 0) {
      const user = this.selectedUsers()[0];
      this.loadUserDetail(user.id);
    }
  }

  protected previous(): void {
    if (this.hasPrevious()) {
      const prevIndex = this.currentIndex() - 1;
      const user = this.selectedUsers()[prevIndex];
      this.loadUserDetail(user.id);
    }
  }

  protected next(): void {
    if (this.hasNext()) {
      const nextIndex = this.currentIndex() + 1;
      const user = this.selectedUsers()[nextIndex];
      this.loadUserDetail(user.id);
    }
  }

  protected last(): void {
    if (this.selectedUsers().length > 0) {
      const user = this.selectedUsers()[this.selectedUsers().length - 1];
      this.loadUserDetail(user.id);
    }
  }

  protected reload(): void {
    const userId = this.userForm().value().id;
    if (userId) {
      this.userStore.loadUser(userId);
    }
  }

  private loadUserDetail(userId: string): void {
    this.userStore.loadUser(userId);
  }

  protected goBack(): void {
    this.router.navigate(['/users']);
  }
}
