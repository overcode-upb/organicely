import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input () nombre:string;
  @Input () horario:string;
  @Input () urlImage:string;
  @Input () descripcion:string;
  @Input () urlInfo:string;

  ngOnInit(): void {
  }

}
