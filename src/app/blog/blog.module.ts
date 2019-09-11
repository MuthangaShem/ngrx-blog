import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { reducers, effects } from './store';
import { PostsComponent } from './posts/posts.component'
import { Routes, RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { BlogService } from './services/blog.service';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:postId', component: PostDetailsComponent },
];

@NgModule({
  declarations: [PostsComponent, PostDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('blog', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [BlogService]
})
export class BlogModule { }
