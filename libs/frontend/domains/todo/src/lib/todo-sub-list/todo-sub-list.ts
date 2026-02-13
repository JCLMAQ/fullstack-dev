import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { apply, form, FormField, min, required, schema } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TodoState, TodoWithRelations } from '@db/prisma/frontend';
import { ConfirmDialogService } from '@fe/messages';
import { baseTextSchema, baseTextSchemRequired, FieldError } from '@fe/signalform-utilities';
import { AppStore } from '@fe/stores';
import { TodoStore } from '../store/todo-store';

type SubTodoFormData = {
  title: string;
  content: string;
  todoState: TodoState;
  orderTodo: number;
};

const defaultSubTodoData: SubTodoFormData = {
  title: '',
  content: '',
  todoState: TodoState.CREATION,
  orderTodo: 0,
};

const subTodoSchema = schema<SubTodoFormData>((path) => {
  apply(path.title, baseTextSchemRequired);
  apply(path.content, baseTextSchema);
  required(path.todoState);
  min(path.orderTodo, 0);
});

@Component({
  selector: 'lib-todo-sub-list',
  imports: [
    FormField,
    FieldError,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatTooltipModule,
  ],
  templateUrl: './todo-sub-list.html',
  styleUrl: './todo-sub-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoSubList {
  readonly todo = input.required<TodoWithRelations>();

  private readonly store = inject(TodoStore);
  private readonly appStore = inject(AppStore);
  private readonly confirmDialog = inject(ConfirmDialogService);

  protected readonly todoStateOptions = Object.values(TodoState);
  protected readonly editingId = signal<string | null>(null);
  protected readonly addingNew = signal(false);

  protected readonly editState = signal<SubTodoFormData>({ ...defaultSubTodoData });
  protected readonly addState = signal<SubTodoFormData>({ ...defaultSubTodoData });

  protected readonly editForm = form(this.editState, subTodoSchema);
  protected readonly addForm = form(this.addState, subTodoSchema);

  protected readonly displayedColumns = ['orderTodo', 'title', 'content', 'todoState', 'actions'];

  protected readonly subTodos = computed(() => {
    const todo = this.todo();
    return this.store
      .todos()
      .filter((item) => item.mainTodoId === todo.id)
      .slice()
      .sort((a, b) => (a.orderTodo ?? 0) - (b.orderTodo ?? 0));
  });

  protected isEditing(subTodo: TodoWithRelations): boolean {
    return this.editingId() === subTodo.id;
  }

  protected startAdd(): void {
    const maxOrder = Math.max(0, ...this.subTodos().map((t) => t.orderTodo ?? 0));
    this.addState.set({
      ...defaultSubTodoData,
      orderTodo: maxOrder + 1,
    });
    this.addingNew.set(true);
  }

  protected cancelAdd(): void {
    this.addingNew.set(false);
    this.addState.set({ ...defaultSubTodoData });
  }

  protected saveAdd(): void {
    if (!this.addForm().valid()) {
      this.addForm().focusBoundControl();
      return;
    }

    const mainTodo = this.todo();
    const ownerId = this.appStore.user()?.id ?? '';
    const orgId = mainTodo.orgId ?? this.appStore.orgId()?.[0] ?? null;
    const formValue = this.addState();

    const payload = {
      title: formValue.title,
      content: formValue.content,
      todoState: formValue.todoState,
      orderTodo: Number(formValue.orderTodo ?? 0),
      ownerId,
      orgId,
      isPublic: mainTodo.isPublic ?? false,
      published: mainTodo.published ?? true,
      mainTodoId: mainTodo.id,
    } as TodoWithRelations;

    this.store.saveTodo(payload);
    this.cancelAdd();
  }

  protected startEdit(subTodo: TodoWithRelations): void {
    this.editingId.set(subTodo.id);
    this.editState.set({
      title: subTodo.title ?? '',
      content: subTodo.content ?? '',
      todoState: subTodo.todoState ?? TodoState.CREATION,
      orderTodo: Number(subTodo.orderTodo ?? 0),
    });
  }

  protected cancelEdit(): void {
    this.editingId.set(null);
    this.editState.set({ ...defaultSubTodoData });
  }

  protected saveEdit(subTodo: TodoWithRelations): void {
    if (!this.editForm().valid()) {
      this.editForm().focusBoundControl();
      return;
    }

    const formValue = this.editState();
    const payload = {
      id: subTodo.id,
      title: formValue.title,
      content: formValue.content,
      todoState: formValue.todoState,
      orderTodo: Number(formValue.orderTodo ?? 0),
      ownerId: subTodo.ownerId ?? this.appStore.user()?.id ?? '',
      orgId: subTodo.orgId ?? null,
      isPublic: subTodo.isPublic ?? false,
      published: subTodo.published ?? true,
      mainTodoId: subTodo.mainTodoId ?? this.todo().id,
    } as TodoWithRelations;

    this.store.saveTodo(payload);
    this.cancelEdit();
  }

  protected deleteSubTodo(id: string): void {
    this.confirmDialog.confirmDelete(false).subscribe((result) => {
      if (result) {
        this.store.softDeleteTodo({ id });
      }
    });
  }
}
