import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { take } from 'rxjs';
import { Institution } from 'src/app/core/model/institution.model';
import { TokenStorageService } from 'src/app/core/services/auth/token-storage.service';
import { BoletoService } from 'src/app/core/services/boleto/boleto.service';
import { InstitutionService } from 'src/app/core/services/institution/institution.service';

@Component({
  selector: 'app-institution-detail',
  templateUrl: './institution-detail.component.html',
  styleUrls: ['./institution-detail.component.scss']
})
export class InstitutionDetailComponent implements OnInit {
  institution!: Institution;

  latitude: number = 0;
  longitude: number = 0;
  institutionImage: any;
  display: boolean = false;
  boletoValue!: number;

  constructor(
    private route: ActivatedRoute,
    private institutionService: InstitutionService,
    private sanitizer: DomSanitizer,
    private boletoService: BoletoService,
    private tokenStorage: TokenStorageService
    ) {}

  ngOnInit(): void {
    this.handleLoad()
  }

  handleLoad() {
    const id = this.route.snapshot.queryParams['_id'];
    
    if(id!= null){
      this.institutionService.getInstitutionByID(id).pipe(take(1)).subscribe(
        response => {
          this.institution = response
          this.loadImage(id)
      });
    }
  }

  loadImage(id: string): any{
    this.institutionService.retrieveImage(id).subscribe(
      (response: any) => {
        let objectURL = URL.createObjectURL(response);
        this.institutionImage = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    });
  }

  handleBoleto(){
    const userName = this.tokenStorage.getUser()
    this.boletoService.getBoleto(userName, this.institution.name, this.boletoValue).pipe(take(1)).subscribe( 
      res => {
        const file = new Blob([res], {type: 'application/pdf'})
        const fileURL = URL.createObjectURL(file)
        window.open(fileURL, '_blank')
        this.display = false
      },
      err => console.log('err: ', err)
    )
  }
}
