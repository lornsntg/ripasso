import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService, Post } from '../services/post';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html'
})
export class NewPostFormComponent {
  nuovoPost: Post = { id: 0, titolo: '', contenuto: '', autore: '' };

  constructor(private postService: PostService, private router: Router) {}

  onSubmit() {
    this.postService.addPost(this.nuovoPost);
    this.router.navigate(['/']);
  }
}
