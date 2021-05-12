import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ZoomService {

	tokenURL = "https://zoom.us/oauth/token";

  constructor(private http : HttpClient, private router: Router) { }

  // User-related
  public getAccessToken(code: any, header: HttpHeaders) {
  	return this.http.post(`${this.tokenURL}?grant_type=authorization_code&code=${code}&redirect_uri=https://organicely.web.app/`, '', {headers: header , });
  }

  // Events


}
