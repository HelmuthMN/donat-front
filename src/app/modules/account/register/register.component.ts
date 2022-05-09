import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  errorMessage = '';
  genders = ['Male','Female'];
  mask!: string;
  stateOptions: { label: string; value: string; }[];

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router
    ) {
        this.stateOptions = [{label: 'Telefone', value: 'telephone'}, {label: 'Celular', value: 'cellphone'}];
     }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      full_name: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email, Validators.max(30)])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      phone_number: new FormControl('', Validators.compose([Validators.required])),
    });
  }

   handleSelectButton(event: any) {
    event.value === 'cellphone' ? this.mask = 'cellphone' : this.mask = 'telephone'
  }

  onSubmit(): void {
    this.authService.register(this.form.get('full_name')?.value, this.form.get('email')?.value, this.form.get('password')?.value, 
    this.form.get('phone_number')?.value).subscribe(
      data =>  {
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Registrado com sucesso!'})
        setTimeout(
          () => { 
            this.router.navigate(['/conta/logar']);
          }, 4200)
      },
      err => {
        this.messageService.add({severity:'error', summary:'Service Message', detail:'Revise os dados inseridos!'}),
        console.log('HTTP Error', err.errorMessage)
      }
    );
  }
}
