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
                this.showSessionExpiredPopUp()
            }
            const error = err.error.message || err.statusText;
            return throwError(() => new Error(error));
        }))
       
    }
}

showSessionExpiredPopUp() {
        Swal.fire({
            title: 'Your session expired!',
            icon: 'warning'
        }).then((result) => {
            this.authService.logout()
            this.tokenStorage.singOut();
            this.router.navigate(['/conta/logar']);
        });
    }
}
