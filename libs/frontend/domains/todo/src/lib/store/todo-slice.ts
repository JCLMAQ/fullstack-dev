import { TodoWithRelations } from "@db/prisma";

export interface TodoState {
  filter: {
    ownerId: string | null
    orgId: string []| null,
  },
  mode: 'Edit' | 'View' | 'add' | undefined,
  selectedIds: string[],
  effectiveSelectedIds: string[],
  selectedItemId: string | null,
  selectedItem: TodoWithRelations | null;
  loading: boolean;
	error: string | null;
  // filterValue: string,
  // filteredItems: TodoWithRelations[],
  // currentSort: Sort | null,
  // sortState: {
  //   active: string;
  //   direction: 'asc' | 'desc' | '';
  // } | null;
}
export const initialTodoState: TodoState = {
  filter: {
    ownerId: null,
    orgId: null,
  },
  mode: 'View',
  selectedIds: [],
  effectiveSelectedIds: [],
  selectedItemId: null,
  selectedItem: null,
  loading: false,
	error: null,
  // filteredItems: [],
  // filterValue: '',
  // currentSort: null,
  // sortState: { active: '', direction: '' },
};
