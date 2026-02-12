export interface TodoState {
  filter: {
    ownerId: string | null;
    orgId: string[] | null;
  };
  mode: 'Edit' | 'View' | 'add' | undefined;
}
export const initialTodoState: TodoState = {
  filter: {
    ownerId: null,
    orgId: null,
  },
  mode: 'View',
};
