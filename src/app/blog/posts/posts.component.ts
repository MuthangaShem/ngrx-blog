import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromStore from '../store'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private store: Store<fromStore.BlogState>) { }

  ngOnInit() {
    this.store.select(fromStore.getAllPosts).subscribe(state => {
      console.log(state);
    });
    this.store.dispatch(new fromStore.LoadPosts());
  }

}
