import { Component, OnInit } from '@angular/core';
import {EventService} from '../../shared/services/event.service';
import {Upload} from './upload';
import {UploadService} from '../../shared/services/upload.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  name: string;
  description: string;
  image_url: string;

  selectedFiles: FileList;
  currentFileUpload: Upload;
  percentage: number;

  constructor(private eventService: EventService,
              private uploadService: UploadService) { }

  ngOnInit(): void {
  }

  createEvent(){
    this.eventService.createEvent({
      name: this.name,
      description: this.description,
      image_url: this.image_url,
      email: localStorage.getItem("userEmail")
    })
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
    this.formularioForm.value.image_Url = localStorage.getItem('imageURL');

    this.currentFileUpload = new Upload(file);
    this.uploadService.uploadFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      }, err => {
        console.log(err);
      }
    );
  }
}
