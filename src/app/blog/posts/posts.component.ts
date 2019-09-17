import { Observable } from 'rxjs';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import { Post } from '../models/post.interface';
import { PostDTO } from '../models/postDTO.interface';

const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        stagger('300ms', animate('600ms ease-out', style({ opacity: 1 }))),
        transition(':leave', [
          style({ opacity: 1 }),
          animate('300ms', style({ opacity: 0 })),
        ]),
      ],
      { optional: true },
    ),
  ]),
]);

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations: [listAnimation],
})
export class PostsComponent implements OnInit {
  show: boolean = true;
  isLoading: boolean;
  posts$: Observable<Post[]>;
  adminIsLoggedIn: boolean;

  private _addPostForm: FormGroup;
  public get addPostForm(): FormGroup {
    return this._addPostForm;
  }

  constructor(
    private store: Store<fromStore.BlogState>,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.store.select(fromStore.getLoginStatus).subscribe(isLoggedIn => {
      console.log('Is Logged in? ', isLoggedIn);
      this.adminIsLoggedIn = isLoggedIn;
    });
    this.store.select(fromStore.getPostsLoading).subscribe(loading => {
      this.isLoading = loading;
    });
    this.posts$ = this.store.select(fromStore.getAllPosts);
    this.store.dispatch(new fromStore.LoadPosts());
    this.setupForms();
  }

  addPost() {
    console.log('new add post action dispatched!');
    const postObj: PostDTO = { ...this._addPostForm.value, userId: null };
    this.store.dispatch(new fromStore.AddPost(postObj));
    this.store.select(fromStore.getPostsLoading).subscribe(loading => {
      this.isLoading = loading;
      this._addPostForm.reset();
    });
    this.show = !this.show;

    console.log(postObj);
    // this.postsService.addPost().subscribe(data => {
    //   console.log(data);
    // });
  }

  editPost() {
    alert('Edit feature will be ready soon. Stay tuned.');
  }

  deletePost(postId: number) {
    if (confirm('Are you sure you want to delete this post?')) {
      console.log(postId);
      this.store.dispatch(new fromStore.DeletePost(postId));
    }
  }

  toggleShow() {
    this.show = !this.show;
    console.log(this.show);
  }

  setupForms() {
    this._addPostForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }
}
