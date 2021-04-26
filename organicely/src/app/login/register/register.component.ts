import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service'
import { UsersService } from '../../shared/services/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	userSub: Subscription;

  constructor(private router: Router,
  		 				private authService: AuthService,
  		 				private usersService: UsersService ) { }

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

}
