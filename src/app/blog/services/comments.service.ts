import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Comment } from '../models/comment.interface';
import { Store } from '@ngrx/store';
import { BlogState } from '../store';

import * as commentsActions from '../store/actions/comments.actions';

import { CommentDTO } from '../models/commentDTO.interface';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  BASE_URL = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient, private store: Store<BlogState>) {}

  getComments(postId: number): Observable<Comment[]> {
    console.log('getComments called!!');
    return this.http
      .get<Comment[]>(`${this.BASE_URL}comments?postId=${postId}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  addComment(comment: CommentDTO) {
    this.store.dispatch(new commentsActions.AddCommentSuccess([comment]));
  }
}
