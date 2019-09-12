import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromStore from '../store';

import { Post } from './../models/post.interface';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  postDetails: Post;
  constructor(private store: Store<fromStore.BlogState>) { }

  ngOnInit() {
    this.store.select(fromStore.getSelectedPost).subscribe(data => {
      this.postDetails = data;
    });
    this.store.dispatch(new fromStore.LoadComments());
  }

}
