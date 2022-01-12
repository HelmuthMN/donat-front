import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = 'https://donat-api.herokuapp.com/api/'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'aplication/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(API + '/login', {
      email,
      password,
    }, httpOptions);
  }

  register(name: string, email: string, password: string, address: string, phone_number: string, gender: string): Observable<any> {
    return this.http.post(API + '/register', {
      name,
      email,
      password,
      address,
      phone_number,
      gender
    }, httpOptions);
  }

  logout(): Observable<any> {
    return this.http.post(API + '/logout', httpOptions);
  }

  // ToDo -> rotas instituições e rota do google news
}
