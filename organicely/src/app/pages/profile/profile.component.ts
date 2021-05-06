import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { EventService } from 'src/app/shared/services/event.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, 
    private authService: AuthService,
    private userService: UsersService,
    private eventService: EventService) { }

    userInfo:any=[];
    userEmail:string;
    userl = false;
    eventsByUser:any=[];

    nombre ='';
    apellido = '';
    bio='';
    
  ngOnInit(): void {
    this.userl = this.checkSession();
    if(this.userl) {
      this.userInfo=[];

      this.userService.getUserByEmail(localStorage.getItem('email')).subscribe(
          res => {
            Object.entries(res).map((p: any) => this.userInfo.push({id: p[0], ...p[1]}));
            this.apellido = this.userInfo[0].apellido;
            this.nombre = this.userInfo[0].nombre;
            this.bio = this.userInfo[0].bio;
          }
      );

      this.eventService.getEventByEmail(localStorage.getItem('email')).subscribe(
        res => {
          Object.entries(res).map((p: any) => this.eventsByUser.push({id: p[0], ...p[1]}));
        });
      }   
      console.log(this.eventsByUser);
      
  }

  checkSession(){
    return this.authService.verifyLogged();
  }

  events =  [
      {
        "nombre": "Concierto",
        "horario": "12:00",
        "urlImage": "https://www.weddingsutra.com/images/Vendor_Images/Wedding_Planners/Version-Events-and-Weddings/version-events-weddings-01.jpg",
        "descripcion": "The best football team in the world!",
        "urlInfo": "lol"
      },
      {
        "nombre": "Fiesta",
        "horario": "17:00",
        "urlImage": "https://www.parishrenewal.com.au/wp-content/uploads/2019/04/Events.jpg",
        "descripcion": "The best football team in the world!",
        "urlInfo": "lol"
      }
    ];

  pastevents =  [
      {
        "nombre": "Concierto",
        "horario": "12:00",
        "urlImage": "https://miro.medium.com/max/720/0*SkLaMDVqEL3WLtAl",
        "descripcion": "The best football team in the world!",
        "urlInfo": "lol"
      },
    ]

  

}
