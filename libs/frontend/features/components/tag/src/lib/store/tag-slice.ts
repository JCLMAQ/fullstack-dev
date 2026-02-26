export type TagState = {
	mainTagId: number | null;
	includeDeleted: boolean;
};

export const TAG_LIST_MAX_TAKE = 1000;

export const initialTagState: TagState = {
	mainTagId: null,
	includeDeleted: false,
};
