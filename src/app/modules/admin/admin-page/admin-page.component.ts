import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
interface Institution {
    name: string,
    email: string,
	  address: string,
    cep: string,
    url: string,
	  phone_number: string,
    institution_type: string,
}

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
  providers: [ConfirmationService]
})
export class AdminPageComponent implements OnInit {

  items: Institution[] = [];

  displayModal: boolean = false;


  constructor(
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit() {
    this.getData()
    this.items = [
      {
        name: "teste",
        email: "instituicao@gmail.com",
        address: "rua fasjfasfujashfg",
        cep: "11123152",
        url: "www.fuiashf.com",
        phone_number: "999642513148",
        institution_type: "igreja catolica",
      },
      {
        name: "xxxxxx",
        email: "xxxxxxx@gmail.com",
        address: "rua xxxx",
        cep: "1243125135",
        url: "www.dddddddddd.com",
        phone_number: "123565512231",
        institution_type: "igreja evamgenial",
      },

  ]
  }

  handleAccept(item: Institution) {
    console.log(item)
  }

  showModalDialog() {
        this.displayModal = true;
  }

  GetConfirm() {
        this.confirmationService.confirm({
            message: 'Angular PrimeNG ConfirmDialog Component',
            header: 'GeeksforGeeks',
        });
    }

    getData() {
      // let formValue = JSON.parse(localStorage.getItem('form-data'))
      // console.log(formValue) 
    }
 
}
