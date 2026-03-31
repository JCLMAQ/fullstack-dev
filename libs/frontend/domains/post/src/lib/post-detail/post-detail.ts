import { DatePipe } from '@angular/common';
import type { HttpResourceRef } from '@angular/common/http';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { apply, disabled, form, FormField } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
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
import { PostWithRelations } from '@db/prisma/frontend';
import { ConfirmDialogService } from '@fe/messages';
import { baseTextSchema, baseTextSchemRequired, FieldError } from '@fe/signalform-utilities';
import { AppStore } from '@fe/stores';
import { UserStore } from '@fe/user';
import { TranslateModule } from '@ngx-translate/core';
import { PostService } from '../services/post-service';
import { PostStore } from '../store/post-store';

type PostFormData = {
  id: string;
  numSeq: number;
  title: string;
  content: string;
  orderPost: number | null;
  ownerId: string;
  orgId: string | null;
  isPublic: boolean;
  published: boolean;
  createdAt: Date | null;
  updatedAt: Date | null;
};

const defaultPostData: PostFormData = {
  id: '',
  numSeq: 0,
  title: '',
  content: '',
  orderPost: null,
  ownerId: '',
  orgId: null,
  isPublic: false,
  published: true,
  createdAt: null,
  updatedAt: null,
};

@Component({
  selector: 'lib-post-detail',
  imports: [
    DatePipe,
    FormField,
    FieldError,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    TranslateModule,
  ],
  providers: [UserStore],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.scss',
})
export class PostDetail {
  protected readonly store = inject(PostStore);
  private readonly appStore = inject(AppStore);
  private readonly userStore = inject(UserStore);
  private readonly postService = inject(PostService);
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
  protected readonly postId = signal<string | null>(null);
  private readonly loadedPost = signal<PostWithRelations | null>(null);
  private readonly postResourceRef = signal<HttpResourceRef<PostWithRelations | null> | null>(null);

  protected readonly postData = signal<PostFormData>(defaultPostData);

  protected readonly postForm = form(this.postData, (path) => {
    apply(path.title, baseTextSchemRequired);
    apply(path.content, baseTextSchema);

    const disableInView = () => this.mode() === 'view';
    disabled(path.title, disableInView);
    disabled(path.content, disableInView);
    disabled(path.orderPost, disableInView);
    disabled(path.orgId, disableInView);
    disabled(path.isPublic, disableInView);
    disabled(path.published, disableInView);
  });

  protected readonly orgIdOptions = computed(() => this.userStore.organizations());
  private readonly orgsRequested = signal(false);
  private readonly addInitRequested = signal(false);
  private readonly allowTabSync = signal(false);

  protected readonly currentPost = computed(() => {
    const id = this.postId();
    if (!id) return null;
    const storeItem = this.store.posts().find((p) => p.id === id);
    if (storeItem) return storeItem;
    return this.loadedPost();
  });

  protected readonly tagsCount = computed(() => this.currentPost()?.Tags?.length ?? 0);
  protected readonly categoriesCount = computed(() => this.currentPost()?.Categories?.length ?? 0);
  protected readonly commentsCount = computed(() => this.currentPost()?.Comments?.length ?? 0);
  protected readonly likesCount = computed(() => this.currentPost()?.LikedBys?.length ?? 0);
  protected readonly groupsCount = computed(() => this.currentPost()?.groups?.length ?? 0);
  protected readonly imagesCount = computed(() => this.currentPost()?.Images?.length ?? 0);
  protected readonly filesCount = computed(() => this.currentPost()?.Files?.length ?? 0);

  constructor() {
    effect(() => {
      const params = this.paramMap();
      const query = this.queryParamMap();
      const id = params.get('id');

      this.postId.set(id);

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
      } else if (this.mode() !== 'add' && this.store.posts().length > 0) {
        this.store.setSelectedId(this.store.posts()[0]?.id ?? null);
      }

      const tabParam = query.get('tab');
      const tabIndex = tabParam ? Number(tabParam) : Number.NaN;
      if (Number.isInteger(tabIndex) && tabIndex >= 0) {
        this.store.setSelectedTabIndex(tabIndex);
      }
    });

    effect(() => {
      const id = this.postId();
      if (!id) {
        this.loadedPost.set(null);
        return;
      }

      const existsInStore = this.store.posts().find((p) => p.id === id);
      if (existsInStore) {
        this.loadedPost.set(null);
        return;
      }

      this.postResourceRef.set(this.postService.getPostByIdResource(id));
    });

    effect(() => {
      const resourceRef = this.postResourceRef();
      if (!resourceRef) {
        this.loadedPost.set(null);
        return;
      }
      this.loadedPost.set(resourceRef.value());
    });

    effect(() => {
      const userId = this.appStore.user()?.id ?? null;
      if (userId && !this.orgsRequested()) {
        this.orgsRequested.set(true);
        this.userStore.organizations();
      }
    });

    effect(() => {
      const selectedPost = this.currentPost();
      if (selectedPost && this.mode() !== 'add') {
        this.store.initNavButton(selectedPost.id);
        this.postForm().reset({
          id: selectedPost.id,
          numSeq: selectedPost.numSeq,
          title: selectedPost.title ?? '',
          content: selectedPost.content ?? '',
          orderPost: selectedPost.orderPost ?? null,
          ownerId: selectedPost.ownerId ?? '',
          orgId: selectedPost.orgId ?? null,
          isPublic: selectedPost.isPublic ?? false,
          published: selectedPost.published ?? false,
          createdAt: selectedPost.createdAt ?? null,
          updatedAt: selectedPost.updatedAt ?? null,
        });
      } else if (this.mode() === 'add' && this.addInitRequested()) {
        const ownerId = this.appStore.user()?.id ?? '';
        const orgId = this.appStore.orgId()?.[0] ?? null;
        this.postForm().reset({
          ...defaultPostData,
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

  protected ownerDisplayName(post: PostWithRelations | null): string {
    if (!post) return '';
    const owner = (post as any).owner;
    if (!owner) return post.ownerId ?? '';
    const name = `${owner.firstName ?? ''} ${owner.lastName ?? ''}`.trim();
    return name || owner.email || post.ownerId ?? '';
  }

  protected save(): void {
    if (!this.postForm().valid()) {
      this.snackBar.open('Please fix the form errors', 'OK', { duration: 3000 });
      this.postForm().focusBoundControl();
      return;
    }

    const formValue = this.postForm().value();
    const ownerId = formValue.ownerId || this.appStore.user()?.id || '';
    if (!ownerId) {
      this.snackBar.open('Owner is required', 'OK', { duration: 3000 });
      return;
    }

    const orderPost = formValue.orderPost == null ? null : Number(formValue.orderPost);

    const payload = {
      id: formValue.id || undefined,
      title: formValue.title,
      content: formValue.content,
      orderPost,
      ownerId,
      orgId: formValue.orgId ?? this.appStore.orgId()?.[0] ?? null,
      isPublic: formValue.isPublic,
      published: formValue.published,
    } as unknown as PostWithRelations;

    const wasInAddMode = this.mode() === 'add';

    this.store.savePost(payload);
    this.snackBar.open('Post saved', 'OK', { duration: 3000 });
    this.setMode('view');

    if (wasInAddMode) {
      this.router.navigate(['/posts']);
    }
  }

  protected cancel(): void {
    const wasInAddMode = this.mode() === 'add';
    if (wasInAddMode) {
      this.router.navigate(['/posts']);
      return;
    }

    const selectedPost = this.currentPost();
    if (selectedPost) {
      this.postForm().reset({
        id: selectedPost.id,
        numSeq: selectedPost.numSeq,
        title: selectedPost.title ?? '',
        content: selectedPost.content ?? '',
        orderPost: selectedPost.orderPost ?? null,
        ownerId: selectedPost.ownerId ?? '',
        orgId: selectedPost.orgId ?? null,
        isPublic: selectedPost.isPublic ?? false,
        published: selectedPost.published ?? false,
        createdAt: selectedPost.createdAt ?? null,
        updatedAt: selectedPost.updatedAt ?? null,
      });
    }
    this.setMode('view');
  }

  protected add(): void {
    this.setMode('add');
    this.postForm().reset({
      ...defaultPostData,
      ownerId: this.appStore.user()?.id ?? '',
      orgId: this.appStore.orgId()?.[0] ?? null,
    });
    this.snackBar.open('Create a new post', 'OK', { duration: 3000 });
  }

  protected duplicate(): void {
    const source = this.postForm().value();
    const ownerId = source.ownerId || this.appStore.user()?.id || '';
    const orgId = source.orgId ?? this.appStore.orgId()?.[0] ?? null;

    this.addInitRequested.set(false);
    this.setMode('add');
    this.postForm().reset({
      ...defaultPostData,
      title: source.title ?? '',
      content: source.content ?? '',
      orderPost: source.orderPost ?? null,
      ownerId,
      orgId,
      isPublic: !!source.isPublic,
      published: !!source.published,
    });

    this.snackBar.open('Post duplicated', 'OK', { duration: 3000 });
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
      this.snackBar.open('Post ID is required for deletion', 'OK', { duration: 3000 });
      return;
    }
    this.confirmDialog.confirmDelete(false).subscribe((result) => {
      if (result) {
        this.store.softDeletePost({ id });
        this.snackBar.open('Post deleted', 'OK', { duration: 3000 });
      }
    });
  }

  protected hardDelete(id: string): void {
    if (!id) {
      this.snackBar.open('Post ID is required for permanent deletion', 'OK', { duration: 3000 });
      return;
    }
    this.confirmDialog.confirmDelete(true).subscribe((result) => {
      if (result) {
        this.store.hardDeletePost({ id });
        this.snackBar.open('Post permanently deleted', 'OK', { duration: 3000 });
      }
    });
  }

  protected reset(): void {
    this.postData.set({
      ...defaultPostData,
    });
    this.postForm().reset();
    this.postForm().focusBoundControl();
  }

  protected nextInvalidField(): void {
    const nextInvalidField = this.postForm().errorSummary()[0];
    if (nextInvalidField) {
      nextInvalidField.fieldTree().focusBoundControl();
    }
  }

  protected first = () => {
    this.store.first();
    const newId = this.store.selectedItemId();
    if (newId) {
      this.router.navigate(['/posts/detail', newId]);
    }
  };

  protected previous = () => {
    this.store.previous();
    const newId = this.store.selectedItemId();
    if (newId) {
      this.router.navigate(['/posts/detail', newId]);
    }
  };

  protected next = () => {
    this.store.next();
    const newId = this.store.selectedItemId();
    if (newId) {
      this.router.navigate(['/posts/detail', newId]);
    }
  };

  protected last = () => {
    this.store.last();
    const newId = this.store.selectedItemId();
    if (newId) {
      this.router.navigate(['/posts/detail', newId]);
    }
  };

  protected onSelectedTabIndexChange(index: number): void {
    if (!this.allowTabSync()) {
      return;
    }
    this.store.setSelectedTabIndex(index);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { tab: index },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  protected goBack(): void {
    this.router.navigate(['/posts/list']);
  }
}
