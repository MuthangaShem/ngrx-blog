import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromStore from '../store';

import { Post } from './../models/post.interface';
import { Comment } from './../models/comment.interface';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  postDetails: Post;
  comments: Comment[];
  constructor(private store: Store<fromStore.BlogState>) { }

  ngOnInit() {
    this.store.select(fromStore.getSelectedPost).subscribe(postDetails => {
      this.postDetails = postDetails;
    });
    this.store.dispatch(new fromStore.LoadComments());
    this.store.select(fromStore.getAllComments).subscribe(comments => {
      this.comments = comments
    })
  }

}
