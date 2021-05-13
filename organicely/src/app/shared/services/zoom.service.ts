import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ZoomService {

  constructor(private http : HttpClient, private router: Router) { }

  // User-related
  public getAccessToken(body: any) : Observable<any> {
  	return this.http.post(`https://us-central1-emprende-ya-2cd09.cloudfunctions.net/api/zoom/token`, body);
  }

  public makeRequest(body: any) : Observable<any> {
  	return this.http.post("https://us-central1-emprende-ya-2cd09.cloudfunctions.net/api/zoom/request", body);
  }

  public getRequest(body: any) : Observable<any> {
    return this.http.get("https://us-central1-emprende-ya-2cd09.cloudfunctions.net/api/zoom/request", body);
  }

  public setAccessToken(ac: any) {
  	localStorage.setItem("acc", ac);
  }

}
