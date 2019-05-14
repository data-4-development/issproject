import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class PostService {
 

   obj = {
    title: String,
     body: String
   };

  uri = 'http://localhost:3000/dashboard/addpost';
  static uri: any;
  static http: any;

  constructor( http: HttpClient) { }
 
  static addPost(obj) {
   
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }


}
