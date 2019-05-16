import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';


import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { post } from 'selenium-webdriver/http';
import Post from '../models/post';

@Injectable({
  providedIn: 'root'
})


export class PostService {
  private _getUrl = "http://localhost:3000/posts/posts";
  private _postUrl = "http://localhost:3000/posts/insert";
  private _deleteUrl = "http://localhost:3000/posts/posts/";

  constructor(private http: HttpClient) { }



  getPosts() {
    return this.http.get(this._getUrl)
      .map((res => res));
  }

  addPost(post: Post) {
    
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this._postUrl, post, { headers: headers })
      .map(res => res);
  }



}
