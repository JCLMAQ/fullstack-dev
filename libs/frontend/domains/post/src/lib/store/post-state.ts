export interface PostState {
	filter: {
		ownerId: string | null;
		orgId: string[] | null;
	};
	mode: 'Edit' | 'View' | 'add' | undefined;
	selectedTabIndex: number;
}

export const initialPostState: PostState = {
	filter: {
		ownerId: null,
		orgId: null,
	},
	mode: 'View',
	selectedTabIndex: 0,
};

