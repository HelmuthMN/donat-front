import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/model/user/user.model';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {


  currentIcon: any;
  file?: File;
  imgURL: any;
  loading?: boolean;
  form!: FormGroup;
  isSuccessful = false;
  user: any;

  fileName = '';

  constructor(
    private userService: UserService,
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    ) {}
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      address: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      phone_number: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      gender: new FormControl('', Validators.compose([Validators.required, Validators.max(30)]))
    });
    this.getUser();
    this.loadImage();
  }


  onFileSelected(event?: any) {
    this.file = event.target.files[0];
    let reader = new FileReader();
      // this.imagePath = files;
    if(this.file){
      reader.readAsDataURL(this.file); 
      reader.onload = (_event) => { 
        this.imgURL = reader.result; 
      }
    }
  }
  
  onUpload() {
    this.loading = !this.loading;
        this.userService.upload(this.file).subscribe(
            (event: any) => {
                if (typeof (event) === 'object') {  
                    this.loading = false; // Flag variable 
                    window.location.reload();
                }
            }
        );
  }

  getUser(){
    this.userService.getLoggedUser().subscribe(
      response => {
        this.user = response.data
      }
    );
  }

  loadImage(): any{
    this.userService.retrieveImage().subscribe(
      (response: any) => {
        let objectURL = URL.createObjectURL(response);
        this.currentIcon = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    });
  }

  onSubmit(): void{
    console.log('tnc')

  }
}
