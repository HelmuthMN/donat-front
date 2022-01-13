import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(name: string, email: string, password: string, address: string, phone_number: string, gender: string): Observable<any> {
    return this.http.post(API_URL + '/register', {
      name,
      email,
      password,
      address,
      phone_number,
      gender
    });
  }

  // User routes
  logout(): Observable<any> {
    return this.http.post(API_URL + '/logout', {});
  }
}
