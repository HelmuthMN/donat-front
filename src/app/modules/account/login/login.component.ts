import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

import { TokenStorageService } from 'src/app/core/services/auth/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  form!: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private authService: AuthService, 
    private tokenStorage: TokenStorageService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
    ) {}
  
  ngOnInit(): void {
    if (this.tokenStorage.getToken()){
      this.isLoggedIn = true;
      // this.roles = this.tokenStorage.getUser().roles;
    }

    this.form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.max(30)]))
    });
  }

  onSubmit(): void {
    this.authService.login(this.form.get('email')?.value, this.form.get('password')?.value).subscribe(
      data => {
        this.tokenStorage.saveToken(data.access_token);
        this.tokenStorage.saveUser(data.data.user_name, data.data.is_admin);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        // this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['/']);
      }, err => {
        console.log('Usuário ou senha incorretos');
        this.errorMessage = 'Usuário ou senha incorretos';
        this.isLoginFailed = true;
      }
    );
  }
  
  reloadPage(): void{
    window.location.reload();
  }

  handleSignUp() {
    this.router.navigate(['/account/register'])
  }

}
