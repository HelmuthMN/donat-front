import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstitutionService } from 'src/app/core/services/institution/institution.service';
import { Institution } from 'src/app/core/model/institution.model';
import { map, take } from 'rxjs';
@Component({
  selector: 'app-institution-page',
  templateUrl: './institution-page.component.html',
  styleUrls: ['./institution-page.component.scss']
})
export class InstitutionPageComponent implements OnInit {
 
  constructor(
    private institutionService: InstitutionService,
    private router: Router
  ) { }
  
  allInstitutions!: Institution[];
  filteredInstitution!: Institution[];
  choosedInstitution = '';
  institutionByName = {};
  errorMessage = '';

  ngOnInit(): void {
   this.institutionService.getAllInstitutions().pipe(take(1)).subscribe(res => this.allInstitutions = res);
  //  this.filteredInstitution = this.allInstitutions;
  }
  
  searchByName(name: string) {
    return this.institutionByName = this.institutionService.getInstitution(name);
  }

  // searchFunction(){
  //     let dataFiltered = this.allInstitutions.filter(
  //       (p) =>
  //         p.name
  //           .toLowerCase()
  //           .includes(this.choosedInstitution.toLowerCase())
  //     );
  //     this.filteredInstitution = dataFiltered;
  //     console.log('filtrado',this.filteredInstitution)
  //     console.log('data', dataFiltered)
  //     console.log('dado selecionado', this.choosedInstitution)
  // }

  onEnter(value: string){ 
     this.filteredInstitution = this.allInstitutions.filter(
        (p) =>
          p.name
            .toLowerCase()
            .includes(value.toLowerCase())
      );
      // this.filteredInstitution = dataFiltered;
      // console.log('filtrado',this.filteredInstitution)
      // console.log('data', dataFiltered)
      // console.log('dado selecionado', this.choosedInstitution)
  }
}
