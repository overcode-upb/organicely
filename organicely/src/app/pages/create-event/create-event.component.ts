import { Component, OnInit, Output } from '@angular/core';
import { EventService } from '../../shared/services/event.service';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';

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
	eventobj: any = { eventDate: "" };
  datePipe = new DatePipe('es-bo');
  dateobj = this.eventobj.eventDate;
	
	
  constructor(private router: Router, 
  						private eventService: EventService,
  						private authService: AuthService) { }

  
  ngOnInit(): void {
  	this.authService.getLoggedInEmail({ idToken: localStorage.getItem("auth") }).subscribe(
  		res => {
  			this.userEmail = res.users[0].email
  		}
  	)
  }

  timeData(time:string){
	  this.time = time;
  }

  onDateChange(){

  }

  onCreateEvent(form: any) {
  	this.eventService.createEvent({
  		date_time: this.datePipe.transform(this.eventobj.eventDate, 'dd/MM/yyyy') + " - " + this.time,
  		description: form.value.description,
  		event_id: form.value.event_id,
  		event_url: form.value.event_url,
  		image_url: "",
  		// ^ to be implemented
  		name: form.value.name,
  		owner_email: this.userEmail,
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
