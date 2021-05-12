import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import {ZoomService} from '../../shared/services/zoom.service';
import {HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	code: string;

  constructor(private authService: AuthService,
  						private activatedRoute: ActivatedRoute,
              private zoomService: ZoomService) { }

  ngOnInit(): void {
  	this.activatedRoute.queryParams.subscribe(
  		params => {
    		this.code = params.code;
    		let header = new HttpHeaders();
    		header.set('Authorization',`Basic ${environment.zoomAuth}`)
    		console.log(this.zoomService.getAccessToken(this.code, header));
    	}
    );
  }

  checkSession(){
    return this.authService.verifyLogged();
  }

}
