import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstitutionService } from 'src/app/core/services/institution/institution.service';
import { Institution, InstitutionGet } from 'src/app/core/model/institution.model';
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
  
  allInstitutions!: InstitutionGet[];
  filteredInstitution!: InstitutionGet[];
  errorMessage = '';

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

  handleDropdown() {
    document.getElementById("myDropdown")?.classList.toggle("show");
  }
}
