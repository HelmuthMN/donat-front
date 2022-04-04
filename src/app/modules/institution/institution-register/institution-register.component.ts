import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras } from '@angular/router';
import { faCropSimple } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';
import { InstitutionService } from 'src/app/core/services/institution/institution.service';

interface ITypes{
    name: string,
    value: string
}

@Component({
  selector: 'app-institution-register',
  templateUrl: './institution-register.component.html',
  styleUrls: ['./institution-register.component.scss']
})
export class InstitutionRegisterComponent implements OnInit {
  
  form!: FormGroup;
  types: ITypes[];
  selectedType?: string;
  file?: File;
  imgURL: any;
  uploadedFiles: any[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private institutionService: InstitutionService
  ) {
    this.types=[
      {name:'Igreja Católica', value:'catolica'},
      {name:'Ong', value:'ong'}, 
      {name:'Igreja Protestante', value:'protestante'}
    ]
   }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      address: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      cep: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      url: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      phone_number: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      institution_type: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      request_text: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
    });
  }

  onSubmit(): void{
    console.log(this.form?.value)
     this.institutionService.createRequestInstitution(this.form?.value, this.file).subscribe(
        data => alert("Instituição criada com sucesso"),
        err => console.log('HTTP Error', err.errorMessage)
      );
  }

  onFileSelected(event?: any) {
    this.file = event.currentFiles[0];
    let reader = new FileReader();
    if(this.file){
      reader.readAsDataURL(this.file); 
      reader.onload = (_event) => { 
        this.imgURL = reader.result;
      }
    }
  }
}
