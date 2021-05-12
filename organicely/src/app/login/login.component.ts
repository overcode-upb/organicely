import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

 constructor(private router: Router, private authService: AuthService) { 
  }

  error = false;
  @ViewChild('form',{static:true}) form : NgForm;
  email:string;
  password:string;

  // Use this url for Zoom Log In:
  // https://zoom.us/oauth/authorize?client_id=jN8GttxJRnOlIGnVsDyy0Q&response_type=code&redirect_uri=https%3A%2F%2Forganicely.web.app%2Fpages%2Fhome
  // Alternatively, use the Zoom console to regenerate the URL

  ngOnInit() {
    if(this.authService.verifyLogged()){
      this.router.navigate(['../pages/home']);
    }
  }

  onLogin(form : any){
    this.error = false;
    //console.log('Form',form.value);
    this.authService.login({
      email: form.value.email,
      password: form.value.password,
      returnSecureToken: true
    }).subscribe(
      res => {
        //console.log('LOGIN RESPONSE: ', res);
        this.router.navigate(['../pages/home']);
      },
      err => {
        this.error=true;
        //console.log('LOGIN ERROR: ');
      }
    ) 
  }

  onRegister(){
    this.router.navigate(['/login/register']);
  }
}