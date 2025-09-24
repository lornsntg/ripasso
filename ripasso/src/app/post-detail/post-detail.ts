import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService, Post } from '../services/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html'
})
export class PostDetailComponent {
  post?: Post;

  constructor(private route: ActivatedRoute, private postService: PostService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.postService.getPostById(id);
  }
}
