import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { TokenStorageService } from 'src/app/core/services/auth/token-storage.service';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.scss']
})
export class UserDropdownComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  toggleMenu(){
    const toogleMenu = document.querySelector('.menu');
    toogleMenu?.classList.toggle('active')
  }

   submitLogout(): void{
    //logout da api
    this.authService.logout();
    //retira os tokens do storage
    this.tokenStorage.singOut();
    this.handleNavigation();
  }  

  handleNavigation(): void{
      this.router.navigate(['/home']);
      window.location.reload();
    }
}
