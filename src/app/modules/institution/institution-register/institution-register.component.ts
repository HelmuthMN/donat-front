import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { InstitutionRequestService } from 'src/app/core/services/institution_request/institution-request.service';

interface ITypes{
    name: string,
    value: string
}

@Component({
  selector: 'app-institution-register',
  templateUrl: './institution-register.component.html',
  styleUrls: ['./institution-register.component.scss'],
  providers: [MessageService]
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
    private institutionRequestService: InstitutionRequestService,
    private messageService: MessageService,

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

  onSubmit(): void {
    console.log(this.form?.value)
     this.institutionRequestService.createRequestInstitution(this.form?.value).subscribe(
        data => this.messageService.add({severity:'success', summary:'Service Message', detail:'Pedido realizado!'}),
        err => {
          this.messageService.add({severity:'error', summary:'Service Message', detail:'Ocorreu um erro!'}),
          console.log('HTTP Error', err.errorMessage)
        },
        () => this.handleImage() 
      );
  }

  handleImage() {
    this.institutionRequestService.createImageRequestInstitution(this.file, this.form.get('email')?.value).subscribe(
      () => console.log('enviou a imagem com sucesso')
    )
  }
}
