import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { EventService } from 'src/app/shared/services/event.service';

@Component({
  selector: 'my-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, 
    private eventService: EventService,
    private authService: AuthService) { }

    userEmail ="";
    userl = false;

  ngOnInit(): void {
    this.userl = this.checkSession();
  }


  checkSession(){
    return this.authService.verifyLogged();
  }

  logOut(){
    console.log('Aqui');
    this.authService.logout();
  }

}
