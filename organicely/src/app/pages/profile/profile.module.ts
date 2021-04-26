import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import {ListEventsModule} from '../list-events/list-events.module';
import {HomeModule} from '../home/home.module';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    ListEventsModule,
    HomeModule
  ],
  exports: []
})
export class ProfileModule { }
