import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/core/services/auth/token-storage.service';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { InstitutionGet, InstitutionHomeGet } from 'src/app/core/model/institution.model';
import { InstitutionService } from 'src/app/core/services/institution/institution.service';
import { take } from 'rxjs';
import { Router } from '@angular/router';

interface carouselItem {
  image: string,
  description: string
}

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.scss']
})
export class ViewpageComponent implements OnInit {

  faHandHoldingHeart = faHandHoldingHeart;
  faAppleWhole = faAppleWhole;
  faAddressCard = faAddressCard;
  username: any;
	responsiveOptions;
  carouselItems: carouselItem[] = [];
  randomInstitutions!: InstitutionHomeGet[];

  constructor(
    private tokenStorage: TokenStorageService,
    private institutionService: InstitutionService,
    private router: Router
  ) {
    this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
   }

  ngOnInit(): void {
    this.institutionService.getRandomInstitutions().pipe(take(1)).subscribe(res => this.randomInstitutions = res)

    this.username = this.tokenStorage.getUser()
    this.carouselItems = [
      {
        image:"https://cdn.pixabay.com/photo/2019/06/27/04/35/organ-donation-4301527__340.jpg",
        description:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
      },
      {
        image:"https://cdn.discordapp.com/attachments/746160159855738953/957770574208327720/doacao20de20sangue.png",
        description:"yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"
      },
      {
        image:"https://i.pinimg.com/736x/2e/6f/c3/2e6fc38b8adf29204eb098bc6f3fedc2.jpg",
        description:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      },
      {
        image:"https://static.vecteezy.com/ti/vetor-gratis/t2/1879882-conceito-de-doacao-e-caridade-gr%C3%A1tis-vetor.jpg",
        description:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      }
    ]
  }

  goToInstitution(id: string) {
    this.router.navigate(['/instituicoes/i/'], { queryParams: { _id: id } })
  }
}