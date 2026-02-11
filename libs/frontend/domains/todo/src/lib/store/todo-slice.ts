export interface TodoState {
  filter: {
    ownerId: string | null;
    orgId: string[] | null;
  };
  mode: 'Edit' | 'View' | 'add' | undefined;
  loading: boolean;
  error: string | null;
}
export const initialTodoState: TodoState = {
  filter: {
    ownerId: null,
    orgId: null,
  },
  mode: 'View',
  loading: false,
  error: null,
};
