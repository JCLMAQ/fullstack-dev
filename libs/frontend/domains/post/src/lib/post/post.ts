import { Component } from '@angular/core';
import { PostList } from '../post-list/post-list';

@Component({
  selector: 'lib-post',
  imports: [PostList],
  templateUrl: './post.html',
  styleUrl: './post.scss',
})
export class Post {}
