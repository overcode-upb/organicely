import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service'
import { UsersService } from '../../shared/services/users.service';
import { Subscription } from 'rxjs';
import {Upload} from '../../shared/models/upload';
import {UploadService} from '../../shared/services/upload.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	userSub: Subscription;

	selectedFiles?: FileList
  currentFileUpload: Upload;
  percentage: number;

  constructor(private router: Router,
  		 				private authService: AuthService,
  		 				private usersService: UsersService,
              private uploadService: UploadService) { }

  ngOnInit(): void {
  	if(this.authService.verifyLogged()){
      this.router.navigate(['../../pages/home']);
    }
  }

  onRegister(form: any) {
  	this.authService.register({
  		email: form.value.email,
  		password: form.value.password,
  		returnSecureToken: true
  	}).subscribe(
  		res => {
  			console.log('SignUp Response: ', res);
  			this.onCreate(form);
  			this.router.navigate(['../../pages/home']);
  		},
  		err => {
  			console.log('SignUp Error: ', err);
  		}
  	)
  }

  onCreate(form: any): void {
    form.value.imagen = this.upload()
    this.userSub = this.usersService.addUser({
      ...form.value
    }).subscribe(
      res => {
        console.log('POST Response: ', res);
      },
      err => {
        console.log("SERVER ERROR: ", err);
      }
    );
  }

  ngOnDestroy(): void {
    this.userSub ? this.userSub.unsubscribe() : '';
  }

  /*
	email
	password
	name
	last_name
	image
	bio
  */

  selectFile(event: any):void {
    this.selectedFiles = event.target.files;
  }

  upload(): string {
    const file = this.selectedFiles?.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new Upload(<File> file);
    return this.uploadService.uploadFileToStorage(this.currentFileUpload, false);
  }

  openInput(){
    document.getElementById("fileInput")?.click();
  }
}
