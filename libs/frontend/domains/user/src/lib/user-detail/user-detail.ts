import { DatePipe, JsonPipe } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { apply, disabled, Field, form } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { Address, Gender, Language, Position, Title } from '@db/prisma';
import { AddressForm, buildAddressSection, createAddressModel } from '@fe/address';
import { PreventReadonlyInteractionDirective } from '@fe/shared';
import { baseTextSchemaMax50, DebugPanel, emailSchema, emergencyContactSchema, FieldError, personNameSchema } from '@fe/signalform-utilities';
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
  emergencyContact: {
    hasEmergencyContact: boolean;
    emergencyContactName: string;
    emergencyContactPhone: string;
  };
  position: Position | null;
  jobTitle: string;
  isValidated: Date | null;
  isSuspended: Date | null;
  managerId: string;
  published: boolean | null;
  isPublic: boolean | null;
  address: Address;
  addresses: Address[];
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
    MatMenuModule,
    PreventReadonlyInteractionDirective,
    TranslateModule,
    JsonPipe,
    AddressForm,
    DebugPanel
],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss',
})
export class UserDetail {
  protected readonly store = inject(UserStore);
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
    emergencyContact: {
      hasEmergencyContact: false,
      emergencyContactName: '',
      emergencyContactPhone: '',
    },
    position: null,
    jobTitle: '',
    isValidated: null,
    isSuspended: null,
    managerId: '',
    published: null,
    isPublic: null,
    address: createAddressModel(),
    addresses: [],
  });

  // Form with Angular Signal Forms
  protected readonly userForm = form(this.userData, (path) => {
    apply(path.email, emailSchema);
    apply(path.firstName, personNameSchema);
    apply(path.lastName, personNameSchema);
    apply(path.nickName, baseTextSchemaMax50);
    buildAddressSection(path.address!);
    // Apply emergency contact schema to nested structure
    apply(path.emergencyContact, emergencyContactSchema);

    // Date of birth conditional validation
    disabled(path.dateOfBirth, ({ valueOf }) => valueOf(path.position) !== 'Individual');

    // Job title conditional validation
    disabled(path.jobTitle, ({ valueOf }) => valueOf(path.position) !== 'Manager');

    // désactivation globale en mode view
    const disableInView = () => this.mode() === 'view';
    (
      [
        path.email,
        path.firstName,
        path.lastName,
        path.title,
        path.nickName,
        path.Gender,
        path.Language,
        path.photoUrl,
        path.dateOfBirth,
        path.emergencyContact.hasEmergencyContact,
        path.position,
        // path.jobTitle,
        path.managerId,
        path.published,
        path.isPublic,
        path.isValidated,
        path.isSuspended,
        path.address,
      ] as const
    ).forEach((p) => disabled(p as any, disableInView));

  });

  // Options for selects // TODO : get from Enum within Prisma or from backend service
  protected readonly titleOptions: Title[] = ['Mr', 'Mme', 'Dct'];
  protected readonly genderOptions: Gender[] = ['MALE', 'FEMELE', 'UNKNOWN', 'NONE'];
  protected readonly languageOptions: Language[] = ['en', 'fr'];
  protected readonly positionOptions: Position[] = ['Individual', 'Manager', 'Member', 'Secretary'];

  protected readonly isAdmin = computed(() => true); // TODO: Get from auth service
  // protected readonly userId = computed(() => this.userForm().value()?.id ?? '');
  constructor() {
    // Récupère l'id utilisateur depuis les params de route
    const params = this.route.snapshot.params;
    this.userId.set(params['id'] ?? null);
    if ((this.userId() === undefined) || (this.userId() === null)) {
      this.userId.set(this.store.userEntities().at(0)?.id ?? null);
    }
    // Récupère le mode depuis la query string (?mode=view) ou matrix param (;mode=view)
    const queryMode = this.route.snapshot.queryParamMap.get('mode');
    const matrixMode = this.route.snapshot.paramMap.get('mode');
    if (queryMode) {
      this.mode.set(queryMode as 'view' | 'edit' | 'add');
    } else if (matrixMode) {
      this.mode.set(matrixMode as 'view' | 'edit' | 'add');
    } else {
      this.mode.set('view');
    }
    // Set selected user in store
    if (this.userId()) {
      this.store.setSelectedId(this.userId());
    }

    // Populate form when selectedItem changes
    effect(() => {
      const selectedItem = this.store.selectedItem();
      if (selectedItem) {
        // Réinitialiser la navigation avec l'utilisateur sélectionné
        this.store.initNavButton(selectedItem.id);

        this.userForm().reset({
          id: selectedItem.id,
          email: selectedItem.email,
          firstName: selectedItem.firstName ?? '',
          lastName: selectedItem.lastName ?? '',
          title: selectedItem.title,
          nickName: selectedItem.nickName ?? '',
          Gender: selectedItem.Gender,
          Language: selectedItem.Language,
          photoUrl: selectedItem.photoUrl ?? '',
          dateOfBirth: selectedItem.dateOfBirth,
          emergencyContact: {
            hasEmergencyContact: selectedItem.hasEmergencyContact ?? false,
            emergencyContactName: selectedItem.emergencyContactName ?? '',
            emergencyContactPhone: selectedItem.emergencyContactPhone ?? '',
          },
          position: selectedItem.position,
          jobTitle: selectedItem.jobTitle ?? '',
          address: createAddressModel(),
          addresses: selectedItem.addresses ?? [],
          isValidated: selectedItem.isValidated,
          isSuspended: selectedItem.isSuspended,
          managerId: selectedItem.managerId ?? '',
          published: selectedItem.published,
          isPublic: selectedItem.isPublic,
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

    this.store.updateUser(userId, formValue);
    this.snackBar.open('Utilisateur sauvegardé avec succès', 'OK', { duration: 3000 });
    this.mode.set('view');
  }

  protected cancel(): void {
    const selectedItem = this.store.selectedItem();
    if (selectedItem) {
      this.userForm().reset({
        id: selectedItem.id,
        email: selectedItem.email,
        firstName: selectedItem.firstName ?? '',
        lastName: selectedItem.lastName ?? '',
        title: selectedItem.title,
        nickName: selectedItem.nickName ?? '',
        Gender: selectedItem.Gender,
        Language: selectedItem.Language,
        photoUrl: selectedItem.photoUrl ?? '',
        dateOfBirth: selectedItem.dateOfBirth,
        emergencyContact: {
          hasEmergencyContact: selectedItem.hasEmergencyContact ?? false,
          emergencyContactName: selectedItem.emergencyContactName ?? '',
          emergencyContactPhone: selectedItem.emergencyContactPhone ?? '',
        },
        position: selectedItem.position,
        address: createAddressModel(),
        addresses: selectedItem.addresses ?? [],
        jobTitle: selectedItem.jobTitle ?? '',
        isValidated: selectedItem.isValidated,
        isSuspended: selectedItem.isSuspended,
        managerId: selectedItem.managerId ?? '',
        published: selectedItem.published,
        isPublic: selectedItem.isPublic,
      });
    }
    this.mode.set('view');
  }

  protected remove(): void {
    const userId = this.userForm().value().id;
    if (userId && confirm('Êtes-vous sûr de vouloir supprimer définitivement cet utilisateur ?')) {
      this.store.deleteUser(userId);
      this.snackBar.open('Utilisateur supprimé', 'OK', { duration: 3000 });
      this.router.navigate(['/users']);
    }
  }

  protected virtualRemove(): void {
    const userId = this.userForm().value().id;
    if (userId && confirm('Êtes-vous sûr de vouloir désactiver cet utilisateur ?')) {
      this.store.softDeleteUser(userId);
      this.snackBar.open('Utilisateur désactivé', 'OK', { duration: 3000 });
      this.router.navigate(['/users']);
    }
  }

  protected add(): void {
    // Set mode to add
    this.mode.set('add');
    // Clear form for new user
    this.userForm().reset({
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
      emergencyContact: {
        hasEmergencyContact: false,
        emergencyContactName: '',
        emergencyContactPhone: '',
      },
      position: null,
      address: createAddressModel(),
      addresses: [],
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
  protected first = () => this.store.first();
  protected previous = () => this.store.previous();
  protected next = () => this.store.next();
  protected last = () => this.store.last();

  /**
   * Apply selection order based on mode:
   * - 'selection': Order based on selection sequence
   * - 'store': Order based on store/database sequence
   * - 'sort': Order based on current sort if active
   */
  protected applySelectionOrder(mode: 'selection' | 'store' | 'sort'): void {
    const selectedIds = this.store.selectedIds();

    if (selectedIds.length === 0) {
      this.store.clearSortedSelection();
      return;
    }

    if (mode === 'selection') {
      this.store.setSortedSelection(selectedIds);
      this.snackBar.open('Ordre de sélection appliqué', 'OK', { duration: 2000 });
      return;
    }

    const currentSort = this.store.currentSort();
    const hasSort = currentSort?.active && currentSort?.direction;
    const sourceUsers = mode === 'sort' && hasSort ? this.getSortedUsers() : this.store.users();

    const ordered = sourceUsers
      .filter((user) => selectedIds.includes(user.id))
      .map((user) => user.id);

    this.store.setSortedSelection(ordered);

    const message = mode === 'sort'
      ? 'Ordre du tri appliqué'
      : 'Ordre des enregistrements appliqué';
    this.snackBar.open(message, 'OK', { duration: 2000 });
  }

  /**
   * Get sorted users based on current sort state
   */
  private getSortedUsers() {
    const users = [...this.store.users()];
    const currentSort = this.store.currentSort();

    if (!currentSort?.active || !currentSort?.direction) {
      return users;
    }

    return users.sort((a, b) => {
      const aValue = (a as Record<string, unknown>)[currentSort.active];
      const bValue = (b as Record<string, unknown>)[currentSort.active];
      if (aValue == null && bValue == null) return 0;
      if (aValue == null) return 1;
      if (bValue == null) return -1;
      const comparison = String(aValue).localeCompare(String(bValue), undefined, { sensitivity: 'base' });
      return currentSort.direction === 'asc' ? comparison : -comparison;
    });
  }

  protected readonly hasActiveSort = computed(() => {
    const currentSort = this.store.currentSort();
    return currentSort?.active && currentSort?.direction;
  });

  protected reload(): void {
    const userId = this.userForm().value().id;
    if (userId) {
      this.store.loadUser(userId);
    }
  }

  protected goBack(): void {
    this.router.navigate(['/users']);
  }
}
