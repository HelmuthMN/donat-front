import { Component, OnInit, SimpleChanges } from '@angular/core';
import { TokenStorageService } from 'src/app/core/services/auth/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  roles: string[] = [];

  constructor(
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void { }

  // checa se há algum token vinda daquela requisição
  // se tiver um token = logado
  // se não = false
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
}
