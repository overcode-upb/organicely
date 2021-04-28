import { Component, OnInit, Output } from '@angular/core';
import { EventService } from '../../shared/services/event.service';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

	eventSub: Subscription;
	userSub: Subscription;
	userEmail = "";
	time = '';

  constructor(private router: Router, 
  						private eventService: EventService,
  						private authService: AuthService) { }

  
  ngOnInit(): void {
  	/*this.authService.getLoggedInEmail({ idToken: localStorage.getItem("auth")}).subscribe(
  		res => {
  			this.userEmail = res.users.email
  		}
  	)*/
  }

  timeData(time:string){
	this.time = time;
  }

  onCreateEvent(form: any) {
	  
  	// Crear un TIMESTAMP usando form.value.date y time
  	// date: form.value.date localizarlo a dd-mm-yyyy
  	// time: sale del ngx-timepicker, @Output: timeChanged
  	// combinando los dos a un new Date() a un TIMESTAMP
  	// se pone el TIMESTAMP en el campo date_time y listo.
  	this.eventService.createEvent({
  		date_time: form.value.date.concat("-",this.time),
  		description: form.value.description,
  		event_id: form.value.event_id,
  		event_url: form.value.event_url,
  		image_url: "",
  		// ^ to be implemented
  		name: form.value.name,
  		owner_email: localStorage.getItem('email'),
  		password: form.value.password,
  		platform: form.value.platform
  	}).subscribe(
  		res => {
  			this.router.navigate(['pages/home'])
  		},
  		err => {
  			console.log("Error...: ", err)
  		}
  	);
  }

  /*
		date_time
		description
		event_id
		event_url
		image_url
		name
		owner_email
		password
		platform
  */

}
