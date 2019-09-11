import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Comment } from '../models/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  ALL_COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }

  getComments(): Observable<Comment[]> {
    return this.http
      .get<Comment[]>(this.ALL_COMMENTS_URL)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
