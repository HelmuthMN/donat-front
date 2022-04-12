import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { UserDropdownComponent } from './buttons/user-dropdown/user-dropdown.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MapComponent } from './map/map.component';
import {DividerModule} from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { TieredMenuModule } from 'primeng/tieredmenu';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    UserDropdownComponent,
    MapComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    DividerModule,
    ButtonModule,
    TieredMenuModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MapComponent
  ]
})
export class SharedModule { }
