import { Component, OnInit, SimpleChanges } from '@angular/core';
import { AuthGuard } from 'src/app/core/services/auth/auth.guard';
import { TokenStorageService } from 'src/app/core/services/auth/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  isAdmin!: boolean;
  roles: string[] = [];

  constructor(
    private tokenStorage: TokenStorageService,
  ) { }

  ngOnInit(): void {
   }

  handleLoggedIn() {
    if (this.tokenStorage.getToken()){
      this.isLoggedIn = true;
      return this.isLoggedIn;
    }
    return this.isLoggedIn = false;
  }

  handleIsAdmin(): boolean{
    return this.tokenStorage.isAdmin();
  }
}
