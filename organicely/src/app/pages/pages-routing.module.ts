import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import {CreateEventComponent} from './create-event/create-event.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: '', redirectTo:'home', pathMatch:'full'},
      {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
      {path: 'levent', loadChildren: () => import('./list-events/list-events.module').then(m => m.ListEventsModule)},
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
