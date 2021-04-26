import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {CreateEventComponent} from './create-event/create-event.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { CardComponent } from '../components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    PagesComponent,
    CreateEventComponent,
    NavbarComponent,
    CardComponent,
    HomeComponent,
    CreateEventComponent,
    ListEventsComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class PagesModule { }
