import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import * as fromStore from '../store'
import { Post } from '../models/post.interface';
import { PostsService } from '../services/posts.service';
import { PostDTO } from '../models/postDTO.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]>;

  private _addPostForm: FormGroup;
  public get addPostForm(): FormGroup {
    return this._addPostForm;
  }

  constructor(
    private store: Store<fromStore.BlogState>, private postsService: PostsService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.posts$ = this.store.select(fromStore.getAllPosts);
    this.store.dispatch(new fromStore.LoadPosts());
    this.setupForms();
  }

  addPost(event) {
    console.log('new add post action dispatched!');
    const postObj: PostDTO = { ...this._addPostForm.value, userId: null }
    this.store.dispatch(new fromStore.AddPost(postObj));
    console.log(postObj);
    // this.postsService.addPost().subscribe(data => {
    //   console.log(data);
    // });
  }

  deletePost(postId: number) {
    console.log(postId);
  }

  setupForms() {
    this._addPostForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

}
