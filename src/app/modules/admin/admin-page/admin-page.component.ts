import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InstitutionService } from 'src/app/core/services/institution/institution.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private institutionService: InstitutionService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      address: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      url: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      cep: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      image: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      phone_number: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
    });
  }

  onSubmit(){
     this.institutionService.createInstitution(this.form.get('name')?.value,this.form.get('email')?.value , this.form.get('address')?.value, 
      this.form.get('url')?.value, this.form.get('cep')?.value, this.form.get('image')?.value, this.form.get('phone_number')?.value).subscribe(
        () =>  {
          alert('salvo no banco')
        }
      );
  }

}
