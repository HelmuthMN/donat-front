import { Component, OnInit, SimpleChanges } from '@angular/core';
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
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {
      this.isAdmin = this.tokenStorage.getIsAdmin()
   }

  handleLoggedIn() {
    if (this.tokenStorage.getToken()){
      this.isLoggedIn = true;
      return this.isLoggedIn;
    }
    return this.isLoggedIn = false;
  }

  goToBottom(){
    window.scrollTo(0,document.body.scrollHeight);
  }

  handleIsAdmin(): boolean{
    if(this.isAdmin){return true} return false;
  }
}
