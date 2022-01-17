import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstitutionService } from 'src/app/core/services/institution/institution.service';

@Component({
  selector: 'app-institution-page',
  templateUrl: './institution-page.component.html',
  styleUrls: ['./institution-page.component.scss']
})
export class InstitutionPageComponent implements OnInit {

  allInstitutions = {};
  institutionByName = {};
  errorMessage = '';

  constructor(
    private institutionService: InstitutionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.allInstitutions = this.institutionService.getAllInstitutions();
  }

  searchByName(name: string) {
    return this.institutionByName = this.institutionService.getInstitution(name);
  }
}
