import { Component, OnInit } from '@angular/core';
import { InstitutionHomeGet } from 'src/app/core/model/institution.model';
import { InstitutionService } from 'src/app/core/services/institution/institution.service';
import { take } from 'rxjs';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/core/services/auth/auth.guard';

interface carouselItem {
  image: string,
  title: string,
  description: string,
  link: string
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
    private authGuard: AuthGuard
  ) { }

  ngOnInit(): void {
    this.institutionService.getRandomInstitutions().pipe(take(1)).subscribe(res => this.randomInstitutions = res)

    this.carouselItems = [
      {
        image:"https://cdn.pixabay.com/photo/2019/06/27/04/35/organ-donation-4301527__340.jpg",
        title: "Evento Benecifente no Lar dos Y em Santos, SP",
        description:"O 4º evento beneficente no Lar dos Y está chegando. Este ano, como de costume, o evento ocorrerá na Rua Bahia, 44.",
        link: "https://www.diariodolitoral.com.br/cultura/jantar-por-uma-boa-causa-volta-ao-formato-presencial-e-promete-noite/156013/"
      },
      {
        image:"https://s2.glbimg.com/0dalJeIvrTd598bvyDcQ_NQ0mds=/0x0:2048x1365/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/e/E/WoTyEmS4upylBoHoBMCw/48806312816-214599fda3-k.jpg",
        title: "Evento da banda UAYFJ em Santos, SP",
        description:"A banda UAYFJ no Lar dos Y está chegando. Eles farão um show no Mendes Convention Center, com entrada franca.",
        link: "https://github.com/HelmuthMN/donat-front"
      },
      {
        image:"https://www.turismosantos.com.br/static/files_turismosantos/styles/lateral/public/loj%C3%A3o%20v%C3%B3%20benedita.jpg?itok=Y6MdD8-w",
        title: "Lojão Beneficente Casa Vó Benedita",
        description:"Entre os dias 1 e 3 de abril a Casa Vó Benedita promove um Lojão Beneficente no Salão de Mármore do Santos Futebol Clube, das 9h às 19h. Estarão a venda roupas, calçados e acessórios novos e seminovos.",
        link: "https://www.turismosantos.com.br/?q=pt-br/content/loj%C3%A3o-beneficente-casa-v%C3%B3-benedita"
      },
    ]
  }

  goToInstitution(id: string) {
    this.authGuard.canActivate() ? this.router.navigate(['/instituicoes/i/'], { queryParams: { _id: id } }) : false
  }

  handleCarouselClick(url: string) {
    // const url = 'https://github.com/HelmuthMN/donat-front';
    window.open(url, '_blank');
  }
}