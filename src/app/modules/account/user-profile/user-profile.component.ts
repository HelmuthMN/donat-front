import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
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
  isLoggedIn = false;
  fileName = '';

  constructor(
    private userService: UserService,
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router
    ) {}
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      full_name: new FormControl({value: '', disabled: true}, Validators.compose([Validators.required, Validators.max(30)])),
      email: new FormControl({value: '', disabled: true}, Validators.compose([Validators.required, Validators.max(30)])),
      // password: new FormControl({value: '', disabled: true}, Validators.compose([Validators.required, Validators.max(30)])),
      phone_number: new FormControl({value: '', disabled: true}, Validators.compose([Validators.required, Validators.max(30)])),
    });
    this.getUser();
    this.loadImage();
  }


  onFileSelected(event?: any) {
    this.file = event.target.files[0];
    let reader = new FileReader();
    if(this.file){
      reader.readAsDataURL(this.file); 
      reader.onload = (_event) => { 
        this.imgURL = reader.result; 
      }
    }
  }
  
  onSubmit() {
    this.loading = !this.loading;
        this.userService.upload(this.file).subscribe(
            (event: any) => {
                if (typeof (event) === 'object') {  
                    this.loading = false;
                    this.router.navigate(['/home'])
                }
            }
        );
  }

  getUser(){
    this.userService.getLoggedUser().subscribe(
      response => {
        this.user = response.data
        this.isLoggedIn = true;
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

  onCancel(): void{
    this.location.back()
  }
}
