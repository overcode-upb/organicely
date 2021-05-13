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
  displayedColumns: string[] = ['nombre', 'tipo','horariofecha', 'URL'];
  zoomMeeting:any=[]
  
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

  ngOnInit(): void {
    this.zoomMeetingAdd();
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

  zoomMeetingAdd(){
    this.zoomMeeting.push(
      {topic:'xd', type:'xd',join_url:'xd', start_time:'nao'},
      {topic:'xe', type:'xd',join_url:'xd', start_time:'nao'},
      {topic:'xr', type:'xd',join_url:'xd', start_time:'nao'},
      {topic:'xt', type:'xd',join_url:'xd', start_time:'nao'},
      {topic:'xg', type:'xd',join_url:'xd', start_time:'nao'}
    );
  }

  
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];