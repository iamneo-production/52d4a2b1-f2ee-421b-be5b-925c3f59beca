import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['user/login']);
  }
  login({ email, password }: any): Observable<any> {
    if (email === 'admin@gmail.com' && password === 'Examly2022@') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of(this.getToken());
    }
    return throwError(new Error('Failed to login'));
  }
}