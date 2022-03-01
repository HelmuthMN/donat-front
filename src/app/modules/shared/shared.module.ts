import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { UserDropdownComponent } from './buttons/user-dropdown/user-dropdown.component';
import { MapComponent } from './map/map.component';

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
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MapComponent
  ]
})
export class SharedModule { }
