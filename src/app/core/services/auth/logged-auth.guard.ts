import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedAuthGuard implements CanActivate {
  constructor(
    private _authService: AuthService,
    private _router: Router
    ) {}

    canActivate(): boolean {
      if (this._authService.isLoggedIn()) {
          Swal.fire({
            title: 'Você já está logado!',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          }).then(() => {
            this._router.navigate(['/'])
          })
          return false
        } else {
            return true
        }
    }
}