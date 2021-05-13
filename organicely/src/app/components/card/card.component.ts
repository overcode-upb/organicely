import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private router: Router) { }

  @Input () nombre:string = "";
  @Input () horario:string = "";
  @Input () urlImage:string= "";
  @Input () descripcion:string= "";
  @Input () urlInfo:string= "";
  @Input () masInfoUrl:string= "";

  ngOnInit(): void {
  }

  masInfoNavigate(){
    //console.log(this.masInfoUrl);
    this.router.navigate(['/pages/levent', this.masInfoUrl]);
  }

}
