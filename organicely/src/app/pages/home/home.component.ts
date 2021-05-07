import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  userl = false;
  ngOnInit(): void {
    this.userl = this.checkSession();
  }

  checkSession(){
    return this.authService.verifyLogged();
  }

}
