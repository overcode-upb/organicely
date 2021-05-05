import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

	url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addUser(user: any) : Observable<any> {
  	return this.http.post(
  		`${this.url}/user.json`,
  		user
  	);
  }

  public getUserByEmail(email:any) : Observable<any>{
	  //console.log(`${this.url}user.json?orderBy="email"&equalTo="${email}"&print=pretty`);
    return this.http.get(`${this.url}user.json?orderBy="email"&equalTo="${email}"&print=pretty`);
  }
  


}
