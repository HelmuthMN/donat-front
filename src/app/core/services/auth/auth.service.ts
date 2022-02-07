import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(username: string, email: string, password: string, address: string, phone_number: string, gender: string): Observable<any> {
    return this.http.post(`${API_URL}/register`, {
      username: username,
      email: email,
      password: password,
      address: address,
      phone_number: phone_number,
      gender: gender
    });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${API_URL}/login`, {email: email, password: password}, {withCredentials:true});
  }

  logout(): Observable<any> {
    return this.http.post(`${API_URL}/logout`, {});
  }
}
