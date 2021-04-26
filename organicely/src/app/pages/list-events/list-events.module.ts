import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEventsComponent } from './list-events.component';
import { CardModule } from './card/card.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ListEventsComponent],
  exports: [
    ListEventsComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ]
})
export class ListEventsModule { }
