import { Injectable } from '@angular/core';

export interface Post {
  id: number;
  titolo: string;
  contenuto: string;
  autore: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [
    { id: 1, titolo: 'Benvenuti nel Blog', contenuto: 'Questo è il primo post.', autore: 'Admin' },
    { id: 2, titolo: 'Secondo Post', contenuto: 'Un contenuto interessante...', autore: 'Mario' },
    { id: 3, titolo: 'Angular è forte', contenuto: 'Con Angular si fanno app moderne!', autore: 'Sofia' }
  ];

  getPosts(): Post[] {
    return this.posts;
  }

  getPostById(id: number): Post | undefined {
    return this.posts.find(p => p.id === id);
  }

  addPost(post: Post) {
    post.id = this.posts.length + 1;
    this.posts.push(post);
  }
}
