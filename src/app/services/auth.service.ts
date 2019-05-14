import { Injectable } from '@angular/core';
import {HttpClient, } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http' ;
import {HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
//import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  authToken: any;
  user: any;

  constructor(private http:HttpClient) { }

  registerUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
     .map(res => res);
  }

  authenticateUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
     .map(res => res);
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken=token;
    this.user=user;
  }

  logout(){
    this.authToken = null;
    this.user =null;
    localStorage.clear();
  }
}
