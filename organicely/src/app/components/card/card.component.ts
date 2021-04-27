import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input () name:string;
  @Input () size:string;
  @Input () urlImage:string;
  @Input () stock:number;
  @Input () type:string;
  
  @Input () product:any;

  ngOnInit(): void {
  }

}
