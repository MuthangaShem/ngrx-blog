import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Post } from '../models/post.interface';
import { PostDTO } from '../models/postDTO.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {


  headers = new HttpHeaders({
    "Content-type": "application/json; charset=UTF-8"
  });
  options = { headers: this.headers };

  URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(this.URL)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  addPost(body: PostDTO): Observable<Post> {
    console.log('add post request!!');
    console.log('body of request: ', body);
    console.log('url of request: ', this.URL);
    return this.http
      .post<Post>(this.URL, body, this.options)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  deletePost(id: number): Observable<any> {
    return this.http
      .delete(`${this.URL}/${id}`, this.options)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

}
