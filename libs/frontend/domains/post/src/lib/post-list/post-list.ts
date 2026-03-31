import { Component, computed, effect, HostListener, inject, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { PostWithRelations } from '@db/prisma/frontend';
import { DictionaryPaginatorIntl, MATERIAL } from '@fe/material';
import { ConfirmDialogService } from '@fe/messages';
import { TranslateModule } from '@ngx-translate/core';
import { PostStore } from '../store/post-store';

@Component({
  selector: 'lib-post-list',
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatDialogModule,
    TranslateModule,
    ...MATERIAL,
  ],
  templateUrl: './post-list.html',
  styleUrl: './post-list.scss',
  providers: [{ provide: MatPaginatorIntl, useClass: DictionaryPaginatorIntl }],
})
export class PostList {
  protected readonly _store = inject(PostStore);
  private readonly _router = inject(Router);
  private readonly confirmDialog = inject(ConfirmDialogService);

  constructor() {
    this._store.syncSortToMatSort(this.sort);
    effect(() => {
      this._store.syncSortedSelection(this.paginatedItems());
    });
  }

  routeToDetail = '/posts/detail';

  protected readonly sort = viewChild(MatSort);
  protected readonly paginator = viewChild(MatPaginator);
  protected readonly sortState = computed(() => this._store.currentSort() || { active: '', direction: '' });

  protected readonly displayedColumns: string[] = [
    'select',
    'numSeq',
    'title',
    'owner',
    'published',
    'isPublic',
    'comments',
    'likes',
  ];
  protected readonly columnsToDisplayWithExpand = [...this.displayedColumns, 'tools'];
  protected expandedElement: PostWithRelations | null = null;

  protected readonly filterValue = this._store.filterValue;
  protected readonly paginatedItems = this._store.paginatedItems;
  protected readonly totalVisibleItems = this._store.totalCount;

  protected readonly pageIndex = this._store.pageIndex;
  protected readonly pageSize = this._store.pageSize;

  navigateToDetail(id: string, mode: string): void {
    this._store.setSelectedId(id);
    this._store.initNavButton(id);
    this._router.navigate([this.routeToDetail, id], { queryParams: { mode } });
  }

  protected addOne(): void {
    this._router.navigate([this.routeToDetail, ''], { queryParams: { mode: 'add' } });
  }

  protected softDelete(id: string): void {
    this.confirmDialog.confirmDelete(false).subscribe((result) => {
      if (result) {
        this._store.softDeletePost({ id });
      }
    });
  }

  protected hardDelete(id: string): void {
    this.confirmDialog.confirmDelete(true).subscribe((result) => {
      if (result) {
        this._store.hardDeletePost({ id });
      }
    });
  }

  protected refreshOrReload(): void {
    this._store.reload();
  }

  protected onPageChange(event: { pageIndex: number; pageSize: number }): void {
    this._store.setPagination(event.pageIndex, event.pageSize);
  }

  private isShiftPressed = false;

  @HostListener('window:keydown.shift')
  onKeyDown(): void {
    this.isShiftPressed = true;
  }

  @HostListener('window:keyup.shift')
  onKeyUp(): void {
    this.isShiftPressed = false;
  }

  protected applyFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this._store.updateFilter(value.trim());
    this._store.setPage(0);
  }

  protected onSortChange(sort: Sort): void {
    if (this.isShiftPressed) {
      this._store.addSort(sort);
    } else {
      this._store.setCurrentSort(sort);
    }
    this._store.setPage(0);
  }

  readonly isAllPaginatedSelected = computed(() => {
    const paginated = this.paginatedItems();
    return paginated.length > 0 && paginated.every((item) => this._store.selection().isSelected(item));
  });

  readonly isSomePaginatedSelected = computed(() => {
    const paginated = this.paginatedItems();
    const numSelected = paginated.filter((item) => this._store.selection().isSelected(item)).length;
    return numSelected > 0 && numSelected < paginated.length;
  });

  protected isSelected(id: string): boolean {
    return this._store.selectedIds().includes(id);
  }

  protected selectedSize(): number {
    return this._store.selectedIds().length;
  }

  protected masterToggle(): void {
    const paginatedItems = this.paginatedItems();
    const allSelected = paginatedItems.length > 0 && paginatedItems.every((item) => this._store.selection().isSelected(item));
    if (allSelected) {
      paginatedItems.forEach((item) => {
        if (this._store.selection().isSelected(item)) {
          this._store.toggleSelection(item.id);
        }
      });
    } else {
      paginatedItems.forEach((item) => {
        if (!this._store.selection().isSelected(item)) {
          this._store.toggleSelection(item.id);
        }
      });
    }
  }

  protected ownerName(post: PostWithRelations): string {
    const owner = (post as any).owner;
    if (!owner) return post.ownerId ?? '';
    const name = `${owner.firstName ?? ''} ${owner.lastName ?? ''}`.trim();
    return name || owner.email || (post.ownerId ?? '');
  }
}
