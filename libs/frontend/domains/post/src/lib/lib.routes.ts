import { Route } from '@angular/router';
import { PostDetail } from './post-detail/post-detail';
import { PostList } from './post-list/post-list';
import { Post } from './post/post';
import { PostStore } from './store/post-store';

export const postRoutes: Route[] = [
	{
		path: '',
		providers: [PostStore],
		children: [
			{ path: '', component: Post },
			{ path: 'list', component: PostList },
			{ path: 'detail/:id', component: PostDetail },
		],
	},
];
