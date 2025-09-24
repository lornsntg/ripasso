import { Routes } from '@angular/router';
import { NewPostForm } from './new-post-form/new-post-form';
import { PostDetail } from './post-detail/post-detail';
import { PostList } from './post-list/post-list';

export const routes: Routes = [
  { path: '', component: PostList },           // Home → lista post
  { path: 'post/:id', component: PostDetail }, // Dettaglio post
  { path: 'new', component: NewPostForm }      // Form nuovo post
];
