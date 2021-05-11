import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ZoomService {

	tokenURL = "https://zoom.us/oauth/token";

  constructor(private http : HttpClient, private router: Router) { }

  // User-related
  public getAccessToken(body: any) {
  	return this.http.post(`${this.tokenURL}`, body);	
  }

  // Events


}
