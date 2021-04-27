import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

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

  ngOnInit(): void {
  }

}
