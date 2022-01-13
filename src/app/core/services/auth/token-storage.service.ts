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
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN);
    window.sessionStorage.setItem(TOKEN, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER);
    window.sessionStorage.setItem(USER, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER);
    if(user) {
      return JSON.parse(user);
    }

    return null;
  }

  public setEmail(email: string): any {
    window.sessionStorage.removeItem(EMAIL);
    window.sessionStorage.setItem(EMAIL, email);
  }

  public getEmail(): any {
    return window.sessionStorage.getItem(EMAIL);
  }


 // Verificar de colocar jwt na API e dar decode no front 
  // public decodeToken(token: any): any {
  //   return jwt_decode(token);
  // }
}
