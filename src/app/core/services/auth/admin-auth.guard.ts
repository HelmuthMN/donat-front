import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _tokenService: TokenStorageService
    ) {}

    canActivate(): boolean {
        if (this._tokenService.isAdmin()) {
            return true;
        } else {
            this._router.navigate(['/'])
            return false
        }
    }
}