import { Component, OnInit } from '@angular/core';
import {EventService} from '../../shared/services/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  name: string;
  description: string;
  image_url: string;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  createEvent(){
    this.eventService.createEvent({
      name: this.name,
      description: this.description,
      image_url: this.image_url,
      email: localStorage.getItem("userEmail")
    })
  }
}
