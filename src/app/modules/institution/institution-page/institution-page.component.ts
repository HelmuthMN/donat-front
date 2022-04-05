import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstitutionService } from 'src/app/core/services/institution/institution.service';
import { Institution, InstitutionGet } from 'src/app/core/model/institution.model';
import { map, take } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

interface InstitutionType {
  name: string;
  value: string;
}
@Component({
  selector: 'app-institution-page',
  templateUrl: './institution-page.component.html',
  styleUrls: ['./institution-page.component.scss']
})
export class InstitutionPageComponent implements OnInit {

  allInstitutions!: InstitutionGet[];
  filteredInstitution!: InstitutionGet[];
  errorMessage = '';
  institutionType: InstitutionType[] = [];
  selectedType!: InstitutionType;

  constructor(
    private institutionService: InstitutionService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
     this.institutionType = [
      {name: "Ong", value: "ong"},
      {name: "Católica", value: "catolica"}, 
      {name: "Protestante", value: "protestante"}
    ]
   }
  

  ngOnInit(): void {
    this.institutionService.getAllInstitutions().pipe(take(1)).subscribe(res => this.allInstitutions = res);
  }
  
  handleInstitution(id: string) {
    this.router.navigate(['/instituicoes/i/'], { queryParams: { _id: id } })
  }

  handleInput(value: string){ 
     this.filteredInstitution = this.allInstitutions.filter(
        (p) =>
          p.name
            .toLowerCase()
            .includes(value.toLowerCase())
      );
  }

  handleDropdown(event: any) {
    if(event == null) {
      this.filteredInstitution = this.allInstitutions;
    }else{
      this.filteredInstitution ? this.filteredInstitution = this.filteredInstitution.filter(
        (p) =>
          p.institution_type
            .toLowerCase()
            .includes(event['value'].toLowerCase())
      ) 
      : this.filteredInstitution = this.allInstitutions.filter(
       (p) => 
         p.institution_type
           .toLowerCase()
           .includes(event['value'].toLowerCase()))
    }
  }

  handleImage(image: any): any {
    console.log(image)
    let objectURL = URL.createObjectURL(image);
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }
}
