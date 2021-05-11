import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	code: string;

  constructor(private authService: AuthService,
  						private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  	this.activatedRoute.queryParams.subscribe(
  		params => {
    		this.code = params.orderby;
    	}
    );  
  }

  checkSession(){
    return this.authService.verifyLogged();
  }

}
