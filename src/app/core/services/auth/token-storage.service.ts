import { Injectable } from '@angular/core';

const TOKEN = 'access_token';
const USER =  'user';
const EMAIL = 'email';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }
  
  singOut(): void {
    localStorage.clear();
  }

  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN);
    localStorage.setItem(TOKEN, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN);
  }

  public saveUser(user: any): void {
    localStorage.removeItem(USER);
    localStorage.setItem(USER, JSON.stringify(user));
  }

  public getUser(): any {
    const user = localStorage.getItem(USER);
    if(user) {
      return JSON.parse(user);
    }

    return null;
  }

  public setEmail(email: string): any {
    localStorage.removeItem(EMAIL);
    localStorage.setItem(EMAIL, email);
  }

  public getEmail(): any {
    return localStorage.getItem(EMAIL);
  }


 // Verificar de colocar jwt na API e dar decode no front 
  // public decodeToken(token: any): any {
  //   return jwt_decode(token);
  // }
}
