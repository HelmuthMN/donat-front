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
  selectedGender = '';
  genders = ['male','female'];

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      full_name: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      address: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      phone_number: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      gender: new FormControl('', Validators.compose([Validators.required, Validators.max(30)]))
    });
  }

  onSubmit(): void {
    this.authService.register(this.form.get('full_name')?.value,this.form.get('email')?.value , this.form.get('password')?.value, 
    this.form.get('address')?.value, this.form.get('phone_number')?.value, this.form.get('gender')?.value).subscribe(
      data =>  {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/login']);
      },
      err => {
         this.errorMessage = err.error.message;
         this.isSignUpFailed = true;
      }
    );
  }

  onGenderChange(newValue: any): void {
    console.log(newValue);
    console.log(this.form.get('gender'));
  }
}
