import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  baseUrl = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public createEvent(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/event.json`, body)
  }

  public getEvents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/event.json`)
  }

  public getEventById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/event/${id}.json`)
  }

  public updateEvent(id: any, body: any): Observable<any>{
    return this.http.put(`${this.baseUrl}/event/${id}.json`, body)
  }

  public deleteEvent(id: any): Observable<any>{
    return this.http.delete(`${this.baseUrl}/event/${id}.json`)
  }

  public getEventByEmail(email:any) : Observable<any>{
	  //console.log(`${this.baseUrl}event.json?orderBy="owner_email"&equalTo="${email}"&print=pretty`);
    return this.http.get(`${this.baseUrl}event.json?orderBy="owner_email"&equalTo="${email}"&print=pretty`);
  }
}
