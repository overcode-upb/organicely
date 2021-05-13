import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { EventService } from 'src/app/shared/services/event.service';
import { UsersService } from 'src/app/shared/services/users.service';
import {environment} from '../../../environments/environment';
import {ZoomService} from '../../shared/services/zoom.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  
  public chartOptions: Partial<ChartOptions>;
  code: string;

  constructor(private router: Router,
              private authService: AuthService,
              private userService: UsersService,
              private eventService: EventService,
              private activatedRoute: ActivatedRoute,
              private zoomService: ZoomService) {

    this.chartOptions = {
      series: [
        {
          name: "Asistentes",
          data: [10, 41, 35, 51, 49]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Asistencia en eventos recientes",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo"
        ]
      }
    };
  }

    userInfo: any = [];
    userEmail: string;
    eventsByUser: any = [];

    showSpinner: boolean = true;

    nombre = '';
    apellido = '';
    bio = '';
    imageUrl = '';

    zoomMeetings = [];

  ngOnInit(): void {
    if(this.checkSession()) {
      this.userInfo = [];

      this.userService.getUserByEmail(localStorage.getItem('email')).subscribe(
          res => {
            this.showSpinner = false;
            Object.entries(res).map((p: any) => this.userInfo.push({id: p[0], ...p[1]}));
            this.apellido = this.userInfo[0].apellido;
            this.nombre = this.userInfo[0].nombre;
            this.bio = this.userInfo[0].bio;
            this.imageUrl = this.userInfo[0].imagen;
          }
      );

      this.eventService.getEventByEmail(localStorage.getItem('email')).subscribe(
        res => {
          Object.entries(res).map((p: any) => this.eventsByUser.push({id: p[0], ...p[1]}));
        });
      }
      console.log(this.eventsByUser);

    this.activatedRoute.queryParams.subscribe(
      params => {
        if (params.code) {
          this.code = params.code;
          this.zoomService.getAccessToken({
            code: this.code,
            redirectUri: "https://organicely.web.app/pages/profile",
            username: "jN8GttxJRnOlIGnVsDyy0Q",
            password: "OJw0TuSOrQ5SLD5VxagzXyyozEzrfx21"
          }).subscribe(
            res => {
              console.log("Access Response: ", res);
              this.zoomService.setAccessToken(res.access_token);
            },
            err => {
               console.log("Access Token Failure: ", err);
          });
        }
      }
    );
  }

  checkSession(){
    return this.authService.verifyLogged();
  }

  getMeetings(form: any) : void {
    this.zoomMeetings = [];
    this.zoomService.makeRequest({
      path: "https://api.zoom.us/v2/users/me/meetings",
      token: localStorage.getItem("ac"),
      body: {
        topic: form.name,
        type: form.selected, 
        start_time: form.fdi + form.hdi,
        password: form.password,
        agenda: form.agenda
      }
    }).subscribe(
      res => {
        console.log("Meetings received! ", res);
        console.log("Meetings: ", res.meetings);
        this.zoomMeetings = res.meetings;
      },
      err => {
        console.log("Error retrieving meetings: ", err);
      });
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
