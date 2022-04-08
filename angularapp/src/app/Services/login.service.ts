import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { User } from '../shared/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'http://localhost:8081/user';

  private currentUserSource = new ReplaySubject<User>(1);
  currentUser = this.currentUserSource.asObservable();

  constructor(private http: HttpClient,private router:Router) { }

  getToken(): string | null {
    return localStorage.getItem('user');
  }

  registerUser(model : any)
  {
      return this.http.post(this.baseUrl + '/signup',model);
  }

  loginUser(model : any)
  {
    return this.http.post<User>(this.baseUrl + '/login',model).pipe(
      map((response : User) =>{
        const user = response;
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout()
  {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/auth/login');
  }

}
