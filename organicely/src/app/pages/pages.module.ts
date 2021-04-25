import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CreateEventComponent } from './create-event/create-event.component';
import { SeeEventComponent } from './see-event/see-event.component';
import { ListEventsComponent } from './list-events/list-events.component';


@NgModule({
  declarations: [CreateEventComponent, SeeEventComponent, ListEventsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
