import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { take } from 'rxjs';
import { Institution } from 'src/app/core/model/institution.model';
import { InstitutionService } from 'src/app/core/services/institution/institution.service';

@Component({
  selector: 'app-institution-detail',
  templateUrl: './institution-detail.component.html',
  styleUrls: ['./institution-detail.component.scss']
})
export class InstitutionDetailComponent implements OnInit {
  institution!: Institution;

  constructor(
    private route: ActivatedRoute,
    private institutionService: InstitutionService
    ) {}

  ngOnInit(): void {
    this.handleLoad()
  }

  handleLoad() {
    const email = this.route.snapshot.paramMap.get("email")
    if(email != null){
      this.institutionService.getInstitution(email).pipe(take(1)).subscribe(
        response => {
          this.institution = response
      });
    }
  }

}
