import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../auth/token-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  jwtHelper = new JwtHelperService();
  constructor(private tokenStorage: TokenStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    {
        console.log(this.tokenStorage.getToken());
        return next.handle(request);

        // if (this.isTokenExpired()) {
        //     console.log("token is expired.");
        //     this.showSessionExpiredPopUp();
        // }
        // else {
        //     console.log("token is not expired.");
        // }
        // return next.handle(request);
    }
}

// tokenNotExpired() {
//     const token: string = localStorage.getItem('token');

//     return token != null && !this.jwtHelper.isTokenExpired(token);
//   }

isTokenExpired() {
        const helper = new JwtHelperService();
        console.log(this.tokenStorage.getToken())
        // if (helper.isTokenExpired(this.tokenStorage.getToken())) {
        //     return true;
        // }
        // return false;
    }

// showSessionExpiredPopUp() {
//         Swal.fire({
//             html: 'Your session expired!',
//         }).then((result) => {
//             this.token.singOut();
//             window.location.href = '';
//         });
//     }

}
