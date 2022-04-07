import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';
import { take } from 'rxjs';
import { RequestInstitutionGet } from 'src/app/core/model/institution.model';
import { InstitutionService } from 'src/app/core/services/institution/institution.service';
import { InstitutionRequestService } from 'src/app/core/services/institution_request/institution-request.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class AdminPageComponent implements OnInit {

  items: RequestInstitutionGet[] = [];
  image: any;

  display: boolean = false;


  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private institutionRequestService: InstitutionRequestService,
    private institutionService: InstitutionService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
    return false;
  };
  }

  ngOnInit() {
    this.institutionRequestService.getAllRequestInstitutions().pipe(take(1)).subscribe(res => this.items = res);
  }

  handleAccept(item: RequestInstitutionGet) {
    this.confirmationService.confirm({
            message: 'Aceita o registro desta instituição?',
            header: 'Verificação',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.institutionRequestService.retrieveRequestInstitutitonImage(item._id).subscribe(
                  () => {
                    this.institutionService.createInstitution(item.email).subscribe(
                      data => this.messageService.add({severity:'info', summary:'Confirmed', detail:'You have accepted'}),
                      err => console.log('HTTP Error', err.errorMessage),
                      () => {
                        this.institutionRequestService.deleteRequestInstitution(item._id);
                        this.reloadCurrentRoute()
                      }
                  )
                }
                )
            },
             reject: () => {
                this.institutionRequestService.deleteRequestInstitution(item._id);
                this.messageService.add({severity:'info', summary:'Rejected', detail:'You have rejected'});
                this.reloadCurrentRoute()
            }
        });
  }

  reloadCurrentRoute() {
    setTimeout(
      () => { 
        location.reload(); 
      }, 4200)
  }

  handleRefreshButton() {
    this.institutionRequestService.getAllRequestInstitutions().pipe(take(1)).subscribe(res => this.items = res);
  }

  showDialog() {
    this.display= true;
  }
}