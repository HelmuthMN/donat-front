import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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

  latitude: number = 0;
  longitude: number = 0;
  institutionImage: any;

  constructor(
    private route: ActivatedRoute,
    private institutionService: InstitutionService,
    private sanitizer: DomSanitizer
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
}
