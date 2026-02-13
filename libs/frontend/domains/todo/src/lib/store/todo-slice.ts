export interface TodoState {
  filter: {
    ownerId: string | null;
    orgId: string[] | null;
  };
  mode: 'Edit' | 'View' | 'add' | undefined;
  selectedTabIndex: number;
}
export const initialTodoState: TodoState = {
  filter: {
    ownerId: null,
    orgId: null,
  },
  mode: 'View',
  selectedTabIndex: 0,
};
