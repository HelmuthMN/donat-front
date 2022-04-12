import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { InstitutionRequestService } from 'src/app/core/services/institution_request/institution-request.service';
import * as cep from 'cep-promise'
import { CepService } from 'src/app/core/services/cep/cep.service';

const CELLPHONE = '(99) 99999-9999';
const LANDLINE= '(99) 9999-9999';

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

  stateOptions: any[];
  mask!: string;
  addressNumber!: string;
  


  constructor(
    private formBuilder: FormBuilder,
    private institutionRequestService: InstitutionRequestService,
    private cepService: CepService,
    private messageService: MessageService,

  ) {
    this.types=[
      {name:'Igreja Católica', value:'catolica'},
      {name:'Ong', value:'ong'}, 
      {name:'Igreja Protestante', value:'protestante'}
    ],
    this.stateOptions = [{label: 'Telefone', value: 'telephone'}, {label: 'Celular', value: 'cellphone'}];
   }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email, Validators.max(30)])),
      address: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      cep: new FormControl('', Validators.compose([Validators.required])),
      url: new FormControl('', Validators.compose([Validators.required, Validators.pattern('([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')])),
      phone_number: new FormControl('', Validators.compose([Validators.required])),
      institution_type: new FormControl('ong', Validators.compose([Validators.required, Validators.max(30)])),
      request_text: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
    });
  }

  handleSelectButton(event: any) {
    event.value === 'cellphone' ? this.mask = 'cellphone' : this.mask = 'telephone'
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

  setAddressNumber(event: any) {
    this.addressNumber = event.target.value
  }

  onSubmit(): void {
    this.form.controls['url'].setValue('https://' + this.form.get('url')?.value)
    this.form.controls['address'].setValue(this.form.get('address')?.value + `, ${this.addressNumber}`)
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
      () => ''
    )
  }

  handleCep(input: string){
    this.cepService.retrieveCep(input).subscribe(
      data => {
        this.form.controls['address'].setValue(data.street)
      },
      err => {
        this.messageService.add({severity:'error', summary:'CEP inválido', detail:'Ocorreu um erro ao pesquisar o CEP!'}),
          console.log('HTTP Error', err.message)
      }
    )
  }
}
