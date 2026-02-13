import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoWithRelations } from '@db/prisma/frontend';
import { ConfirmDialogService } from '@fe/messages';
import { AppStore } from '@fe/stores';
import { of } from 'rxjs';
import { TodoStore } from '../store/todo-store';
import { TodoSubList } from './todo-sub-list';

describe('TodoSubList', () => {
  let component: TodoSubList;
  let fixture: ComponentFixture<TodoSubList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoSubList],
      providers: [
        {
          provide: TodoStore,
          useValue: {
            todos: () => [],
            saveTodo: () => undefined,
            softDeleteTodo: () => undefined,
          },
        },
        {
          provide: AppStore,
          useValue: {
            user: () => ({ id: 'user-1' }),
            orgId: () => null,
          },
        },
        {
          provide: ConfirmDialogService,
          useValue: {
            confirmDelete: () => of(true),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoSubList);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('todo', {
      id: 'todo-1',
      orgId: null,
      isPublic: false,
      published: true,
    } as TodoWithRelations);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
