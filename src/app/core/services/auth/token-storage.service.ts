import { Injectable } from '@angular/core';

const TOKEN = 'access_token';
const USER =  'username';
const IS_ADMIN = 'is_admin';

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

  public saveUser(user: any, isAdmin: any): void {
    localStorage.removeItem(USER);
    localStorage.setItem(USER, user);
    localStorage.setItem(IS_ADMIN, isAdmin);
  }

  public getUser(): any {
    const user = localStorage.getItem(USER);
    if(user) {
      return user;
    }

    return null;
  }

  public getIsAdmin(): any {
    const isAdmin = localStorage.getItem(IS_ADMIN)
    if (isAdmin){
      return isAdmin
    }

    return false;
  }

  // public setEmail(email: string): any {
  //   localStorage.removeItem(EMAIL);
  //   localStorage.setItem(EMAIL, email);
  // }

  // public getEmail(): any {
  //   return localStorage.getItem(EMAIL);
  // }


 // Verificar de colocar jwt na API e dar decode no front 
  // public decodeToken(token: any): any {
  //   return jwt_decode(token);
  // }
}
