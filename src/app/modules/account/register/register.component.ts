import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  genders = ['Male','Female'];

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      address: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      phone_number: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      gender: new FormControl('', Validators.compose([Validators.required, Validators.max(30)]))
    });
  }

  onSubmit(): void {
    const gender = this.form.get('gender')?.value.toLowerCase();
    this.authService.register(this.form.get('username')?.value, this.form.get('email')?.value, this.form.get('password')?.value, 
    this.form.get('address')?.value, this.form.get('phone_number')?.value, gender).subscribe(
      data =>  {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/conta/logar']);
      },
      err => {
         this.errorMessage = err.error.message;
         this.isSignUpFailed = true;
      }
    );
  }
}
