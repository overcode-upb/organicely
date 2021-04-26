import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ListEventsModule } from '../list-events/list-events.module';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    ListEventsModule
  ],
  exports: []
})
export class HomeModule { }
