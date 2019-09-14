import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromStore from '../store';

import { Post } from './../models/post.interface';
import { Comment } from './../models/comment.interface';
import { CommentDTO } from '../models/commentDTO.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  postDetails: Post;
  comments: Comment[];

  private _addCommentForm: FormGroup;
  public get addCommentForm(): FormGroup {
    return this._addCommentForm;
  }

  constructor(
    private store: Store<fromStore.BlogState>,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.setupForms();
    this.store.select(fromStore.getSelectedPost).subscribe(postDetails => {
      this.postDetails = postDetails;
    });
    this.store.dispatch(new fromStore.LoadComments());
    this.store.select(fromStore.getAllComments).subscribe(comments => {
      this.comments = comments
    })
  }

  addComment() {
    console.log('new add post action dispatched!');
    const postObj: CommentDTO = { ...this._addCommentForm.value, userId: null, postId: 100 }
    console.log(postObj);
    this.store.dispatch(new fromStore.AddComment(postObj));
  }

  setupForms() {
    this._addCommentForm = this.fb.group({
      name: ['', Validators.required],
      body: ['', Validators.required],
    });
  }


}
