import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/user`;

  constructor(private http: HttpClient) {}

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      return true;
    } else {
      return false;
    }
  }

  createUser(user: User): Observable<any> {
    return this.http.post<User>(this.apiUrl, user);
  }

  login(user: any): Observable<any> {
    const url = `${environment.apiUrl}/auth/login`;
    return this.http.post<User>(url, user);
  }
  getUserByEmail(email: string): Observable<any> {
    if (email === '') {
      return new Observable();
    }
    const url = `${this.apiUrl}/findByEmail/${email}`;
    console.log('aa');
    return this.http.get<any>(url);
  }
}
