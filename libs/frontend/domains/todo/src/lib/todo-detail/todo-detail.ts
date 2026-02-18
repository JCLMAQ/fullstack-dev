import { DatePipe } from '@angular/common';
import type { HttpResourceRef } from '@angular/common/http';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
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
import { TodoService } from '../services/todo-service';
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
  private readonly todoService = inject(TodoService);
  private readonly confirmDialog = inject(ConfirmDialogService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);

  private readonly paramMap = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });
  private readonly queryParamMap = toSignal(this.route.queryParamMap, {
    initialValue: this.route.snapshot.queryParamMap,
  });

  protected readonly mode = signal<'view' | 'edit' | 'add'>('view');
  protected readonly todoId = signal<string | null>(null);
  private readonly loadedTodo = signal<TodoWithRelations | null>(null);
  private readonly todoResourceRef = signal<HttpResourceRef<TodoWithRelations | null> | null>(null);

  protected readonly todoData = signal<TodoFormData>(defaultTodoData);

  protected readonly todoForm = form(this.todoData, (path) => {
    apply(path.title, baseTextSchemRequired);
    apply(path.content, baseTextSchema);

    const disableInView = () => this.mode() === 'view';
    disabled(path.title, disableInView);
    disabled(path.content, disableInView);
    disabled(path.todoState, disableInView);
    disabled(path.orderTodo, disableInView);
    disabled(path.orgId, disableInView);
    disabled(path.isPublic, disableInView);
    disabled(path.published, disableInView);
  });

  protected readonly todoStateOptions = Object.values(TodoState);
  protected readonly orgIdOptions = computed(() => this.userStore.organizations());
  private readonly orgsRequested = signal(false);
  private readonly addInitRequested = signal(false);
  private readonly subTodosTabIndex = 3;
  private readonly allowTabSync = signal(false);

  protected readonly hasActiveSort = computed(() => {
    const currentSort = this.store.currentSort();
    return currentSort?.active && currentSort?.direction;
  });

  // Computed signals for related data
  protected readonly currentTodo = computed(() => {
    const id = this.todoId();
    if (!id) return null;

    // D'abord chercher dans le store
    const storeItem = this.store.todos().find(t => t.id === id);
    if (storeItem) return storeItem;

    // Fallback : todo chargé individuellement
    return this.loadedTodo();
  });

  protected readonly mainTodoData = computed(() => {
    const todo = this.currentTodo();
    if (!todo?.mainTodoId) return null;
    return this.store.todos().find(t => t.id === todo.mainTodoId) ?? null;
  });

  protected readonly subTodosData = computed(() => {
    const todo = this.currentTodo();
    if (!todo) return [];
    return this.store.todos().filter(t => t.mainTodoId === todo.id);
  });

  protected readonly linkedTasksData = computed(() => {
    const todo = this.currentTodo();
    return todo?.Tasks ?? [];
  });

  constructor() {
    effect(() => {
      const params = this.paramMap();
      const query = this.queryParamMap();
      const id = params.get('id');

      this.todoId.set(id);

      const queryMode = query.get('mode');
      const matrixMode = params.get('mode');
      const nextMode = (queryMode ?? matrixMode) as 'view' | 'edit' | 'add' | null;

      if (nextMode) {
        this.mode.set(nextMode);
      } else if (!id) {
        this.mode.set('add');
      } else {
        this.mode.set('view');
      }

      if (this.mode() === 'add') {
        this.addInitRequested.set(true);
      }

      if (id) {
        this.store.setSelectedId(id);
      } else if (this.mode() !== 'add' && this.store.todos().length > 0) {
        this.store.setSelectedId(this.store.todos()[0]?.id ?? null);
      }

      const tabParam = query.get('tab');
      const tabIndex = tabParam ? Number(tabParam) : Number.NaN;
      if (Number.isInteger(tabIndex) && tabIndex >= 0) {
        this.store.setSelectedTabIndex(tabIndex);
      }
    });

    // Charger le todo par ID si pas dans le store (ex: navigation directe vers un sub-todo)
    effect(() => {
      const id = this.todoId();
      if (!id) {
        this.loadedTodo.set(null);
        return;
      }

      // Vérifier si le todo est déjà dans le store
      const existsInStore = this.store.todos().find(t => t.id === id);
      if (existsInStore) {
        this.loadedTodo.set(null);
        return;
      }

      // Charger le todo par ID
      this.todoResourceRef.set(this.todoService.getTodoByIdResource(id));
    });

    effect(() => {
      const resourceRef = this.todoResourceRef();
      if (!resourceRef) {
        this.loadedTodo.set(null);
        return;
      }
      this.loadedTodo.set(resourceRef.value());
    });

    effect(() => {
      const userId = this.appStore.user()?.id ?? null;
      if (userId && !this.orgsRequested()) {
        this.orgsRequested.set(true);
        // this.userStore.loadOrganizations(userId);
        this.userStore.organizations(); // Trigger load
      }
    });

    effect(() => {
      const selectedTodo = this.currentTodo();
      if (selectedTodo && this.mode() !== 'add') {
        this.store.initNavButton(selectedTodo.id);
        this.todoForm().reset({
          id: selectedTodo.id,
          numSeq: selectedTodo.numSeq,
          title: selectedTodo.title ?? '',
          content: selectedTodo.content ?? '',
          todoState: selectedTodo.todoState ?? TodoState.CREATION,
          orderTodo: selectedTodo.orderTodo ?? 0,
          ownerId: selectedTodo.ownerId ?? '',
          orgId: selectedTodo.orgId ?? null,
          isPublic: selectedTodo.isPublic ?? false,
          published: selectedTodo.published ?? false,
          createdAt: selectedTodo.createdAt ?? null,
          updatedAt: selectedTodo.updatedAt ?? null,
        });
      } else if (this.mode() === 'add' && this.addInitRequested()) {
        const ownerId = this.appStore.user()?.id ?? '';
        const orgId = this.appStore.orgId()?.[0] ?? null;
        this.todoForm().reset({
          ...defaultTodoData,
          ownerId,
          orgId,
        });
        this.addInitRequested.set(false);
      }
    });

    queueMicrotask(() => this.allowTabSync.set(true));

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

    const wasInAddMode = this.mode() === 'add';

    this.store.saveTodo(payload);
    this.snackBar.open('Todo saved', 'OK', { duration: 3000 });
    this.setMode('view');

    // Retourner à la liste si on était en mode création
    if (wasInAddMode) {
      this.router.navigate(['/todos']);
      return;
    }

    // Retourner au todo principal si on est sur un sub-todo
    const mainTodo = this.mainTodoData();
    if (mainTodo) {
      this.returnToMainTodo();
    }
  }

  protected cancel(): void {
    const wasInAddMode = this.mode() === 'add';

    // Retourner à la liste si on était en mode création
    if (wasInAddMode) {
      this.router.navigate(['/todos']);
      return;
    }

    const selectedTodo = this.currentTodo();
    if (selectedTodo) {
      this.todoForm().reset({
        id: selectedTodo.id,
        numSeq: selectedTodo.numSeq,
        title: selectedTodo.title ?? '',
        content: selectedTodo.content ?? '',
        todoState: selectedTodo.todoState ?? TodoState.CREATION,
        orderTodo: selectedTodo.orderTodo ?? 0,
        ownerId: selectedTodo.ownerId ?? '',
        orgId: selectedTodo.orgId ?? null,
        isPublic: selectedTodo.isPublic ?? false,
        published: selectedTodo.published ?? false,
        createdAt: selectedTodo.createdAt ?? null,
        updatedAt: selectedTodo.updatedAt ?? null,
      });
    }
    this.setMode('view');

    // Retourner au todo principal si on est sur un sub-todo
    const mainTodo = this.mainTodoData();
    if (mainTodo) {
      this.returnToMainTodo();
    }
  }

  protected add(): void {
    this.setMode('add');
    this.todoForm().reset({
      ...defaultTodoData,
      ownerId: this.appStore.user()?.id ?? '',
      orgId: this.appStore.orgId()?.[0] ?? null,
    });
    this.snackBar.open('Create a new todo', 'OK', { duration: 3000 });
  }

  protected duplicate(): void {
    const source = this.todoForm().value();
    const ownerId = source.ownerId || this.appStore.user()?.id || '';
    const orgId = source.orgId ?? this.appStore.orgId()?.[0] ?? null;

    this.addInitRequested.set(false);
    this.setMode('add');
    this.todoForm().reset({
      ...defaultTodoData,
      title: source.title ?? '',
      content: source.content ?? '',
      todoState: source.todoState ?? TodoState.CREATION,
      orderTodo: Number(source.orderTodo ?? 0),
      ownerId,
      orgId,
      isPublic: !!source.isPublic,
      published: !!source.published,
    });

    this.snackBar.open('Todo duplicated', 'OK', { duration: 3000 });
  }

  protected setMode(nextMode: 'view' | 'edit' | 'add'): void {
    this.mode.set(nextMode);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { mode: nextMode === 'view' ? null : nextMode },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
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

  protected first = () => {
    this.store.first();
    const newId = this.store.selectedItemId();
    if (newId) {
      this.router.navigate(['/todos/detail', newId]);
    }
  };

  protected previous = () => {
    this.store.previous();
    const newId = this.store.selectedItemId();
    if (newId) {
      this.router.navigate(['/todos/detail', newId]);
    }
  };

  protected next = () => {
    this.store.next();
    const newId = this.store.selectedItemId();
    if (newId) {
      this.router.navigate(['/todos/detail', newId]);
    }
  };

  protected last = () => {
    this.store.last();
    const newId = this.store.selectedItemId();
    if (newId) {
      this.router.navigate(['/todos/detail', newId]);
    }
  };

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

  // Sub-todos management
  protected addSubTodo(): void {
    const currentTodo = this.currentTodo();
    if (!currentTodo) {
      this.snackBar.open('No current todo to add sub-todo', 'OK', { duration: 3000 });
      return;
    }

    const ownerId = this.appStore.user()?.id ?? '';
    const orgId = currentTodo.orgId ?? this.appStore.orgId()?.[0] ?? null;
    const maxOrder = Math.max(0, ...this.subTodosData().map(t => t.orderTodo));

    const newSubTodo: TodoWithRelations = {
      title: 'New Sub-Todo',
      content: '',
      todoState: TodoState.CREATION,
      orderTodo: maxOrder + 1,
      ownerId,
      orgId,
      isPublic: currentTodo.isPublic,
      published: currentTodo.published,
      mainTodoId: currentTodo.id,
    } as TodoWithRelations;

    this.store.saveTodo(newSubTodo);
    this.snackBar.open('Sub-todo created', 'OK', { duration: 3000 });
    this.setTabIndex(this.subTodosTabIndex);
  }

  protected onSelectedTabIndexChange(index: number): void {
    if (!this.allowTabSync()) {
      return;
    }
    this.setTabIndex(index);
  }

  private setTabIndex(index: number): void {
    this.store.setSelectedTabIndex(index);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { tab: index },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  protected returnToMainTodo(): void {
    const mainTodo = this.mainTodoData();
    if (mainTodo) {
      this.router.navigate(['/todos/detail', mainTodo.id], {
        queryParams: { tab: this.subTodosTabIndex }
      });
    }
  }

  protected editSubTodo(subTodo: TodoWithRelations): void {
    this.router.navigate(['/todos/detail', subTodo.id], {
      queryParams: { mode: 'edit', tab: 0 }
    });
  }

  protected deleteSubTodo(id: string): void {
    if (!id) {
      this.snackBar.open('Sub-todo ID is required for deletion', 'OK', { duration: 3000 });
      return;
    }
    this.confirmDialog.confirmDelete(false).subscribe((result) => {
      if (result) {
        this.store.softDeleteTodo({ id });
        this.snackBar.open('Sub-todo deleted', 'OK', { duration: 3000 });
      }
    });
  }

  // Linked tasks management
  protected navigateToTask(taskId: string): void {
    this.router.navigate(['/tasks/detail', taskId]);
  }
}
