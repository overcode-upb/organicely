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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';



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
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaterialTimepickerModule
  ]
})
export class PagesModule { }
