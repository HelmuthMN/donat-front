import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InstitutionService } from 'src/app/core/services/institution/institution.service';

@Component({
  selector: 'app-institution-register',
  templateUrl: './institution-register.component.html',
  styleUrls: ['./institution-register.component.scss']
})
export class InstitutionRegisterComponent implements OnInit {
  
  form!: FormGroup;
  types = ['Igreja Católica','Ong', 'Igreja Protestante', 'Sla'];


  constructor(
    private formBuilder: FormBuilder,
    private institutionService: InstitutionService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      address: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      cep: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      url: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      image: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      phone_number: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      instituition_type: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
    });
  }

  onSubmit(): void{
     this.institutionService.createInstitution(this.form.get('name')?.value,this.form.get('email')?.value , this.form.get('address')?.value, 
      this.form.get('cep')?.value, this.form.get('url')?.value, this.form.get('image')?.value, this.form.get('phone_number')?.value, this.form.get('institution_type')?.value).subscribe(
        data => alert("Instituição criada com sucesso"),
        err => console.log('HTTP Error', err.errorMessage)
        // () =>  {
        //   alert('salvo no banco')
        // }
      );
  }
}
