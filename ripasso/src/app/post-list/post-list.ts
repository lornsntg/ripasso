import { Component } from '@angular/core';
import { PostService, Post } from '../services/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent {
  posts: Post[];

  constructor(private postService: PostService) {
    this.posts = this.postService.getPosts();
  }
}
