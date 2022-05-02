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

  isLoggedIn(): boolean {
    return this.tokenService.getToken() ? true : false
  }

  logout(): Observable<any> {
    return this.http.post(`${API_URL}/logout`, {});
  }
}
