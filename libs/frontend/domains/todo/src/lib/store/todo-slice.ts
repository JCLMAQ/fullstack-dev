
export interface TodoState {
  filter: {
    ownerId: string | null
    orgId: string []| null,
  },
}
export const initialTodoState: TodoState = {
  filter: {
    ownerId: null,
    orgId: null,
  },
};
