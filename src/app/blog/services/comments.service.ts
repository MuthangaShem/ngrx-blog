import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Comment } from '../models/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  BASE_URL = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  getComments(postId: number): Observable<Comment[]> {
    console.log('getComments called!!');
    return this.http
      .get<Comment[]>(`${this.BASE_URL}comments?postId=${postId}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
