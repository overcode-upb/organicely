import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import {CreateEventComponent} from './create-event/create-event.component';
import { HomeComponent } from './home/home.component';
import { ListEventsComponent } from './list-events/list-events.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: '', redirectTo:'home', pathMatch:'full'},
      {path: 'home', component: HomeComponent},
      {path: 'levent/:id', component: ListEventsComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'crevent', component: CreateEventComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
