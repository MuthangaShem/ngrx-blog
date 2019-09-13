import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromStore from '../store'
import { Post } from '../models/post.interface';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private store: Store<fromStore.BlogState>, private postsService: PostsService) { }

  ngOnInit() {
    this.posts$ = this.store.select(fromStore.getAllPosts);
    this.store.dispatch(new fromStore.LoadPosts());
  }

  addPost() {
    console.log('new add post action dispatched!');
    this.store.dispatch(new fromStore.AddPost());
    // this.postsService.addPost().subscribe(data => {
    //   console.log(data);
    // });
  }

}
