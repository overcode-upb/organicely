import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import {ZoomService} from '../../shared/services/zoom.service';
import {Router} from '@angular/router';
import {log} from 'util';

@Component({
  selector: 'app-create-zoom',
  templateUrl: './create-zoom.component.html',
  styleUrls: ['./create-zoom.component.scss']
})

export class CreateZoomComponent implements OnInit {

  constructor( private router: Router,
               private authService: AuthService,
               private zoomService: ZoomService) { }

  selected = '1';

  ngOnInit(): void {
  }

  checkSession(){
    return this.authService.verifyLogged();
  }

  onCreateEvent(form: any) {
    let body = {
      topic: form.name,
      agenda: form.description,
      type: form.platform // por ahora
    }
  }

  createMeeting(form: any) : void {
    let body = {
      topic: form.name,
        type: this.selected,
        start_time: form.fdi + 'T' + form.hdi,
        password: form.password,
        agenda: form.agenda
    }
    this.zoomService.makeRequest({
      path: "https://api.zoom.us/v2/users/me/meetings",
      token: localStorage.getItem("acc"),
      body: body
    }).subscribe(
      res => {
        window.alert("La reunión fue creada con éxito.");
        this.router.navigate(['pages/profile'])
      },
      err => {
        console.log("Error retrieving meetings: ", err);
      });
    console.log(body)
  }




}
