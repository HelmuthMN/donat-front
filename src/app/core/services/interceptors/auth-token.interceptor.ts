import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { TokenStorageService } from '../auth/token-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  jwtHelper = new JwtHelperService();
  constructor(private tokenStorage: TokenStorageService,
     private router: Router,
     private authService: AuthService,

     ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      {  
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.showSessionExpiredPopUp()
            }
            const error = err.error.message || err.statusText;
            return throwError(() => new Error(error));
        }))
        // token = toString(this.tokenStorage.getToken())
        // console.log(localStorage.getItem('access_token') == 'string')
        // console.log('verificar token', this.jwtHelper.isTokenExpired(token));

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

// isTokenExpired() {
//     const helper = new JwtHelperService();
//     return this.tokenStorage.getToken() && helper.isTokenExpired(this.tokenStorage.getToken());
// }

// isTokenExpired() {
//         const helper = new JwtHelperService();
//         console.log('verificar token',this.tokenStorage.getToken())
//         // if (helper.isTokenExpired(this.tokenStorage.getToken())) {
//         //     return true;
//         // }
//         return false;
//     }

showSessionExpiredPopUp() {
        Swal.fire({
            title: 'Your session expired!',
            icon: 'warning'
        }).then((result) => {
            this.authService.logout()
            this.tokenStorage.singOut();
            this.router.navigate(['/login']);
        });
    }
}
