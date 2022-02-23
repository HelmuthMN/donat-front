import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/core/services/auth/token-storage.service';


@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.scss']
})
export class ViewpageComponent implements OnInit {

  username: any;

  constructor(
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.username = this.tokenStorage.getUser()
  }

}
