import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  ALL_POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Post[]> {
    return this.http
      .get<Post[]>(this.ALL_POSTS_URL)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

}
