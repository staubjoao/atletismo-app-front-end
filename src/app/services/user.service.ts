import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/user`;
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  createUser(user: User): Observable<any> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(email: string, user: User): Observable<any> {
    const url = `${this.apiUrl}/${email}`;
    return this.http.patch<User>(url, user);
  }

  login(user: { email: string; password: string }): Observable<any> {
    const url = `${environment.apiUrl}/auth/login`;
    return this.http.post<User>(url, user);
  }
}
