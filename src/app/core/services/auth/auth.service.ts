import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from './token-storage.service';

const API_URL = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenStorageService
    ) { }

  register(full_name: string, email: string, password: string, phone_number: string): Observable<any> {
    return this.http.post(`${API_URL}/register`, {
      full_name: full_name,
      email: email,
      password: password,
      phone_number: phone_number
    });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${API_URL}/login`, {email: email, password: password}, {withCredentials:true});
  }

  isLoggedIn(): boolean {
    return this.tokenService.getToken() ? true : false
  }

  logout(): Observable<any> {
    return this.http.post(`${API_URL}/logout`, {});
  }
}
