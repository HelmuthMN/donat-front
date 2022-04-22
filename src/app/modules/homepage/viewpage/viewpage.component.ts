import { Component, OnInit } from '@angular/core';
import { InstitutionHomeGet } from 'src/app/core/model/institution.model';
import { InstitutionService } from 'src/app/core/services/institution/institution.service';
import { take } from 'rxjs';
import { Router } from '@angular/router';

interface carouselItem {
  image: string,
  title: string,
  description: string
}

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.scss']
})
export class ViewpageComponent implements OnInit {

  carouselItems: carouselItem[] = [];
  randomInstitutions!: InstitutionHomeGet[];

  constructor(
    private institutionService: InstitutionService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.institutionService.getRandomInstitutions().pipe(take(1)).subscribe(res => this.randomInstitutions = res)

    this.carouselItems = [
      {
        image:"https://cdn.pixabay.com/photo/2019/06/27/04/35/organ-donation-4301527__340.jpg",
        title: "Evento Benecifente no Lar dos Y em Santos, SP",
        description:"O 4º evento beneficente no Lar dos Y está chegando. Este ano, como de costume, o evento ocorrerá na Rua Bahia, 44."
      },
      {
        image:"https://s2.glbimg.com/0dalJeIvrTd598bvyDcQ_NQ0mds=/0x0:2048x1365/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/e/E/WoTyEmS4upylBoHoBMCw/48806312816-214599fda3-k.jpg",
        title: "Evento da banda UAYFJ em Santos, SP",
        description:"A banda UAYFJ no Lar dos Y está chegando. Eles farão um show no Mendes Convention Center, com entrada franca."
      },
      {
        image:"https://i.pinimg.com/736x/2e/6f/c3/2e6fc38b8adf29204eb098bc6f3fedc2.jpg",
        title: "Evento da Congregação dos JJAU em Santos, SP",
        description:"O primeiro evento da Congregação dos JJAU. Ocorrerá na Avenida Senador Feijó, 168, dia 16/06 a partir das 19hrs."
      },
    ]
  }

  goToInstitution(id: string) {
    this.router.navigate(['/instituicoes/i/'], { queryParams: { _id: id } })
  }

  handleCarouselClick() {
    const url = 'https://github.com/HelmuthMN/donat-front';
    window.open(url, '_blank');
  }
}