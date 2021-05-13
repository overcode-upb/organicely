import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import {ZoomService} from '../../shared/services/zoom.service';

@Component({
  selector: 'app-create-zoom',
  templateUrl: './create-zoom.component.html',
  styleUrls: ['./create-zoom.component.scss']
})

export class CreateZoomComponent implements OnInit {

  constructor( private authService: AuthService,
               private zoomService: ZoomService) { }

  selected = '1';

  ngOnInit(): void {
  }

  checkSession(){
    return this.authService.verifyLogged();
  }

  onCreateEvent(form: any) {
    let body = {
      topic: form.name,
      agenda: form.description,
      type: form.platform // por ahora
    }
  }

  

  
}
