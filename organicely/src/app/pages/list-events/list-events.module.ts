import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEventsComponent } from './list-events.component';
import { CardModule } from './card/card.module';

@NgModule({
  declarations: [ListEventsComponent],
  imports: [
    CommonModule,
    CardModule
  ]
})
export class ListEventsModule { }
