import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-create-zoom',
  templateUrl: './create-zoom.component.html',
  styleUrls: ['./create-zoom.component.scss']
})
export class CreateZoomComponent implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit(): void {
  }

  checkSession(){
    return this.authService.verifyLogged();
  }

}
