import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/shared/services/event.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
            private eventService: EventService) { }

  id: string;
  eventInfo:any=[];
  private sub: any;
  showSpinner:boolean = true;
  datetime:string;
  description:string;
  event_id:string;
  event_url:string;
  image_url:string;
  name:string;
  owner_email:string;
  password:string;


  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
   });

   this.eventService.getEventById(this.id).subscribe(
      res => {
        this.showSpinner = false;
        this.datetime=res['date_time'];
        this.description=res['description'];
        this.event_id=res['event_id'];
        this.event_url=res['event_url'];
        this.image_url=res['image_url'];
        this.name=res['name'];
        this.owner_email=res['owner_email'];
        this.password=res['password'];
      }
      
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
