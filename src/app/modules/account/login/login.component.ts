import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { TokenStorageService } from 'src/app/core/services/auth/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  
  form!: FormGroup;

  constructor(
    private authService: AuthService, 
    private tokenStorage: TokenStorageService,
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService
    ) {}
  
  ngOnInit(): void {
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
        this.router.navigate(['/']);
      }, err => {
          this.messageService.add({severity:'error', summary:'Service Message', detail:'Revise os campos e tente novamente!'}),
          console.log('HTTP Error', err.errorMessage)
      }
    );
  }
  
  reloadPage(): void{
    window.location.reload();
  }

  handleSignUp() {
    this.router.navigate(['/conta/registrar'])
  }
}
