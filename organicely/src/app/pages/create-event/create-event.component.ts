import { Component, OnInit, Output } from '@angular/core';
import { EventService } from '../../shared/services/event.service';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Upload} from '../../shared/models/upload';
import {UploadService} from '../../shared/services/upload.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

	eventSub: Subscription;
	userSub: Subscription;
	hour: string;
	userEmail = "";
	time = '';
	eventobj: any = { eventDate: "" };
	datePipe = new DatePipe('es-bo');
	dateobj = this.eventobj.eventDate;
  selectedFiles?: FileList
  currentFileUpload: Upload;


	constructor(private router: Router,
  						private eventService: EventService,
  						private authService: AuthService,
              private uploadService: UploadService) {}


  ngOnInit(): void {
  	if(this.checkSession()) {
  		this.authService.getLoggedInInfo({ idToken: localStorage.getItem("auth") }).subscribe(
  			res => {
  				this.userEmail = res.users[0].email
  		});
  	}
  }

  timeData(time: string){
	  this.time = time;
  }

  checkSession(){
    return this.authService.verifyLogged();
  }

  onCreateEvent(form: any) {
  	this.eventService.createEvent({
  		date_time: this.datePipe.transform(this.eventobj.eventDate, 'dd/MM/yyyy') + " - " + this.time,
  		description: form.value.description,
  		event_id: form.value.event_id,
  		event_url: form.value.event_url,
  		image_url: this.upload(form.value.name),
  		name: form.value.name,
  		owner_email: this.userEmail,
  		password: form.value.password,
  		platform: form.value.platform
  	}).subscribe(
  		res => {
        window.alert("El evento fue creado con éxito.");
  			this.router.navigate(['pages/home'])
  		},
  		err => {
  			//console.log("Error...: ", err)
  		});
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

  openInput(){
    document.getElementById("fileInput")?.click();
  }

  selectFile(event: any):void {
    this.selectedFiles = event.target.files;
  }

  upload(name: any): string {
    const file = this.selectedFiles?.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new Upload(<File> file);
    return this.uploadService.uploadFileToStorage(this.currentFileUpload, true, name);
  }
}
