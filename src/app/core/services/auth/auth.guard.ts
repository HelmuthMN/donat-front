import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private _authService: AuthService,
    private _router: Router
    ) {}

    canActivate(): boolean {
        if (this._authService.isLoggedIn()) {
            return true;
        } else {
          Swal.fire({
            title: 'Não é possível acessar essa página, logue-se primeiro!',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          }).then((result) => {
              this._router.navigate(['/conta/logar'])
          })
            return false
        }
    }
}