import { Component, OnChanges, OnInit } from '@angular/core';
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

  ngOnInit(): void { }

  checkSession(){
    return this.authService.verifyLogged();
  }

  logOut(){
    this.authService.logout();
    this.router.navigate(['/pages/home']);
  }

}
