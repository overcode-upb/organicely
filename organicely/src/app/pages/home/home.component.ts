import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import {ZoomService} from '../../shared/services/zoom.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(private authService: AuthService,
  						) { }

  ngOnInit(): void {

  }

  checkSession(){
    return this.authService.verifyLogged();
  }

}
