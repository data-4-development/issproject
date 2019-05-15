import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import {HttpClientModule} from '@angular/common/http' ;
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})


export class PostService {

  constructor(private http: HttpClient) { }
  obj = {
    title: String,
    body: String
  };


post: any;
  registerPost(post) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/posts/addpost', post, { headers: headers })
      .map(res => res);
  }



}
