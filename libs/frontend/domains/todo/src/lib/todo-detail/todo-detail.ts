import { DatePipe } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { apply, disabled, form, FormField } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
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
import { TodoState, TodoWithRelations } from '@db/prisma/frontend';
import { ConfirmDialogService } from '@fe/messages';
import { baseTextSchema, baseTextSchemRequired, FieldError } from '@fe/signalform-utilities';
import { AppStore } from '@fe/stores';
import { UserStore } from '@fe/user';
import { TranslateModule } from '@ngx-translate/core';
import { TodoStore } from '../store/todo-store';

type TodoFormData = {
  id: string;
  numSeq: number;
  title: string;
  content: string;
  todoState: TodoState;
  orderTodo: number;
  ownerId: string;
  orgId: string | null;
  isPublic: boolean;
  published: boolean;
  createdAt: Date | null;
  updatedAt: Date | null;
};

const defaultTodoData: TodoFormData = {
  id: '',
  numSeq: 0,
  title: '',
  content: '',
  todoState: TodoState.CREATION,
  orderTodo: 0,
  ownerId: '',
  orgId: null,
  isPublic: false,
  published: true,
  createdAt: null,
  updatedAt: null,
};

@Component({
  selector: 'lib-todo-detail',
  imports: [
    DatePipe,
    FormField,
    FieldError,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    TranslateModule,
  ],
  providers: [UserStore],
  templateUrl: './todo-detail.html',
  styleUrl: './todo-detail.scss',
})
export class TodoDetail {
  protected readonly store = inject(TodoStore);
  private readonly appStore = inject(AppStore);
  private readonly userStore = inject(UserStore);
  private readonly confirmDialog = inject(ConfirmDialogService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);

  protected readonly mode = signal<'view' | 'edit' | 'add'>('view');
  protected readonly todoId = signal<string | null>(null);

  protected readonly todoData = signal<TodoFormData>(defaultTodoData);

  protected readonly todoForm = form(this.todoData, (path) => {
    apply(path.title, baseTextSchemRequired);
    apply(path.content, baseTextSchema);

    const disableInView = () => this.mode() === 'view';
    (
      [
        path.title,
        path.content,
        path.todoState,
        path.orderTodo,
        path.orgId,
        path.isPublic,
        path.published,
      ] as const
    ).forEach((p) => disabled(p as any, disableInView));
  });

  protected readonly todoStateOptions = Object.values(TodoState);
  protected readonly orgIdOptions = computed(() => this.userStore.organizations());
  private readonly orgsRequested = signal(false);

  protected readonly hasActiveSort = computed(() => {
    const currentSort = this.store.currentSort();
    return currentSort?.active && currentSort?.direction;
  });

  constructor() {
    const params = this.route.snapshot.params;
    this.todoId.set(params['id'] ?? null);

    const queryMode = this.route.snapshot.queryParamMap.get('mode');
    const matrixMode = this.route.snapshot.paramMap.get('mode');
    if (queryMode) {
      this.mode.set(queryMode as 'view' | 'edit' | 'add');
    } else if (matrixMode) {
      this.mode.set(matrixMode as 'view' | 'edit' | 'add');
    } else if (!this.todoId()) {
      this.mode.set('add');
    } else {
      this.mode.set('view');
    }

    if (this.todoId()) {
      this.store.setSelectedId(this.todoId());
    } else if (this.mode() !== 'add' && this.store.todos().length > 0) {
      this.store.setSelectedId(this.store.todos()[0]?.id ?? null);
    }

    effect(() => {
      const userId = this.appStore.user()?.id ?? null;
      if (userId && !this.orgsRequested()) {
        this.orgsRequested.set(true);
        this.userStore.loadOrganizations(userId);
      }
    });

    effect(() => {
      const selectedItem = this.store.selectedItem() as TodoWithRelations | null;
      if (selectedItem && this.mode() !== 'add') {
        this.store.initNavButton(selectedItem.id);
        this.todoForm().reset({
          id: selectedItem.id,
          numSeq: selectedItem.numSeq,
          title: selectedItem.title ?? '',
          content: selectedItem.content ?? '',
          todoState: selectedItem.todoState ?? TodoState.CREATION,
          orderTodo: selectedItem.orderTodo ?? 0,
          ownerId: selectedItem.ownerId ?? '',
          orgId: selectedItem.orgId ?? null,
          isPublic: selectedItem.isPublic ?? false,
          published: selectedItem.published ?? false,
          createdAt: selectedItem.createdAt ?? null,
          updatedAt: selectedItem.updatedAt ?? null,
        });
      } else if (this.mode() === 'add') {
        const ownerId = this.appStore.user()?.id ?? '';
        const orgId = this.appStore.orgId()?.[0] ?? null;
        this.todoForm().reset({
          ...defaultTodoData,
          ownerId,
          orgId,
        });
      }
    });
  }

  protected orgDisplayName(orgId: string | null): string {
    if (!orgId) {
      return '';
    }
    return this.userStore.organizations().find((org) => org.id === orgId)?.name ?? orgId;
  }

  protected save(): void {
    if (!this.todoForm().valid()) {
      this.snackBar.open('Please fix the form errors', 'OK', { duration: 3000 });
      this.todoForm().focusBoundControl();
      return;
    }

    const formValue = this.todoForm().value();
    const ownerId = formValue.ownerId || this.appStore.user()?.id || '';
    if (!ownerId) {
      this.snackBar.open('Owner is required', 'OK', { duration: 3000 });
      return;
    }

    const payload = {
      id: formValue.id || undefined,
      title: formValue.title,
      content: formValue.content,
      todoState: formValue.todoState,
      orderTodo: Number(formValue.orderTodo ?? 0),
      ownerId,
      orgId: formValue.orgId ?? this.appStore.orgId()?.[0] ?? null,
      isPublic: formValue.isPublic,
      published: formValue.published,
    } as unknown as TodoWithRelations;

    this.store.saveTodo(payload);
    this.snackBar.open('Todo saved', 'OK', { duration: 3000 });
    this.mode.set('view');
  }

  protected cancel(): void {
    const selectedItem = this.store.selectedItem() as TodoWithRelations | null;
    if (selectedItem) {
      this.todoForm().reset({
        id: selectedItem.id,
        numSeq: selectedItem.numSeq,
        title: selectedItem.title ?? '',
        content: selectedItem.content ?? '',
        todoState: selectedItem.todoState ?? TodoState.CREATION,
        orderTodo: selectedItem.orderTodo ?? 0,
        ownerId: selectedItem.ownerId ?? '',
        orgId: selectedItem.orgId ?? null,
        isPublic: selectedItem.isPublic ?? false,
        published: selectedItem.published ?? false,
        createdAt: selectedItem.createdAt ?? null,
        updatedAt: selectedItem.updatedAt ?? null,
      });
    }
    this.mode.set('view');
  }

  protected add(): void {
    this.mode.set('add');
    this.todoForm().reset({
      ...defaultTodoData,
      ownerId: this.appStore.user()?.id ?? '',
      orgId: this.appStore.orgId()?.[0] ?? null,
    });
    this.snackBar.open('Create a new todo', 'OK', { duration: 3000 });
  }

  protected softDelete(id: string): void {
    if (!id) {
      this.snackBar.open('Todo ID is required for deletion', 'OK', { duration: 3000 });
      return;
    }
    this.confirmDialog.confirmDelete(false).subscribe((result) => {
      if (result) {
        this.store.softDeleteTodo({ id });
        this.snackBar.open('Todo soft deleted', 'OK', { duration: 3000 });
      }
    });
  }

  protected hardDelete(id: string): void {
    if (!id) {
      this.snackBar.open('Todo ID is required for permanent deletion', 'OK', { duration: 3000 });
      return;
    }
    this.confirmDialog.confirmDelete(true).subscribe((result) => {
      if (result) {
        this.store.hardDeleteTodo({ id });
        this.snackBar.open('Todo permanently deleted', 'OK', { duration: 3000 });
      }
    });
  }

  protected reset() {
    this.todoData.set({
      id: '',
      numSeq: 0,
      title: '',
      content: '',
      todoState: TodoState.CREATION,
      orderTodo: 0,
      ownerId: '',
      orgId: null,
      isPublic: false,
      published: true,
      createdAt: null,
      updatedAt: null,
    });
    this.todoForm().reset();
    this.todoForm().focusBoundControl();
  }

  protected nextInvalidField() {
    const nextInvalidField = this.todoForm().errorSummary()[0];
    if (nextInvalidField) {
      nextInvalidField.fieldTree().focusBoundControl();
    }
  }

  protected first = () => this.store.first();
  protected previous = () => this.store.previous();
  protected next = () => this.store.next();
  protected last = () => this.store.last();

  protected applySelectionOrder(mode: 'selection' | 'store' | 'sort'): void {
    const selectedIds = this.store.selectedIds();

    if (selectedIds.length === 0) {
      this.store.clearSortedSelection();
      return;
    }

    if (mode === 'selection') {
      this.store.setSortedSelection(selectedIds);
      this.snackBar.open('Selection order applied', 'OK', { duration: 2000 });
      return;
    }

    const currentSort = this.store.currentSort();
    const hasSort = currentSort?.active && currentSort?.direction;
    const sourceTodos = mode === 'sort' && hasSort ? this.getSortedTodos() : this.store.todos();

    const ordered = sourceTodos
      .filter((todo) => selectedIds.includes(todo.id))
      .map((todo) => todo.id);

    this.store.setSortedSelection(ordered);

    const message = mode === 'sort' ? 'Sort order applied' : 'Store order applied';
    this.snackBar.open(message, 'OK', { duration: 2000 });
  }

  private getSortedTodos() {
    const todos = [...this.store.todos()];
    const currentSort = this.store.currentSort();

    if (!currentSort?.active || !currentSort?.direction) {
      return todos;
    }

    return todos.sort((a, b) => {
      const aValue = (a as Record<string, unknown>)[currentSort.active];
      const bValue = (b as Record<string, unknown>)[currentSort.active];
      if (aValue == null && bValue == null) return 0;
      if (aValue == null) return 1;
      if (bValue == null) return -1;
      const comparison = String(aValue).localeCompare(String(bValue), undefined, { sensitivity: 'base' });
      return currentSort.direction === 'asc' ? comparison : -comparison;
    });
  }

  protected goBack(): void {
    this.router.navigate(['/todos/list']);
  }
}
