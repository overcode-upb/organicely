import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeModule } from './home/home.module';
import { ProfileComponent } from './profile/profile.component';
import { CardComponent } from './list-events/card/card.component';


@NgModule({
  declarations: [PagesComponent, ProfileComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HomeModule
  ]
})
export class PagesModule { }