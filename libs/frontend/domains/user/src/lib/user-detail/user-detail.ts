import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
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
import { User } from '@db/prisma';
import { UserStore } from '../store/user-store';

interface UserFormModel {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'lib-user-detail',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
  private readonly fb = inject(FormBuilder);

  // Form mode: 'view' | 'edit'
  protected readonly mode = signal<'view' | 'edit'>('view');

  // Current user index in selectedUsers
  protected readonly currentIndex = signal<number>(-1);

  // Form group with validation
  protected readonly userForm = this.fb.group({
    id: [{ value: '', disabled: true }, [Validators.required]],
    firstName: ['', [Validators.required, Validators.maxLength(100)]],
    lastName: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email]],
  });

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
        this.userForm.patchValue({
          id: selectedUser.id,
          firstName: selectedUser.firstName ?? '',
          lastName: selectedUser.lastName ?? '',
          email: selectedUser.email ?? '',
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
    if (this.userForm.invalid) {
      this.snackBar.open('Veuillez corriger les erreurs du formulaire', 'OK', { duration: 3000 });
      return;
    }

    const formValue = this.userForm.getRawValue() as UserFormModel;
    const userId = formValue.id;

    this.userStore.updateUser(userId, formValue);
    this.snackBar.open('Utilisateur sauvegardé avec succès', 'OK', { duration: 3000 });
    this.mode.set('view');
  }

  protected cancel(): void {
    const selectedUser = this.userStore.selectedUser();
    if (selectedUser) {
      this.userForm.patchValue({
        id: selectedUser.id,
        firstName: selectedUser.firstName ?? '',
        lastName: selectedUser.lastName ?? '',
        email: selectedUser.email ?? '',
      });
    }
    this.mode.set('view');
  }

  protected remove(): void {
    const userId = this.userForm.get('id')?.value;
    if (userId && confirm('Êtes-vous sûr de vouloir supprimer définitivement cet utilisateur ?')) {
      this.userStore.deleteUser(userId);
      this.snackBar.open('Utilisateur supprimé', 'OK', { duration: 3000 });
      this.router.navigate(['/users']);
    }
  }

  protected virtualRemove(): void {
    const userId = this.userForm.get('id')?.value;
    if (userId && confirm('Êtes-vous sûr de vouloir désactiver cet utilisateur ?')) {
      this.userStore.softDeleteUser(userId);
      this.snackBar.open('Utilisateur désactivé', 'OK', { duration: 3000 });
      this.router.navigate(['/users']);
    }
  }

  protected add(): void {
    // Clear form for new user
    this.userForm.reset();
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
    const userId = this.userForm.get('id')?.value;
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
