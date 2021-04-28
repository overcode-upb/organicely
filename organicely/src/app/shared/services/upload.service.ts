import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {finalize} from 'rxjs/operators';
import {Upload} from '../models/upload';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private basePath = '/uploads'

  constructor(private st: AngularFireStorage,
              private db: AngularFireDatabase) { }

  uploadFileToStorage(upload: Upload, event: boolean, eventId?: string): Observable<number | undefined>{
    const email = localStorage.getItem('email');
    let filePath;
    const extension:string  = '.' + upload.file.name.split('.')[1]
    if(event){
      filePath = `${this.basePath}/${email}/events/${eventId}${extension}`;
    } else {
      filePath = `${this.basePath}/${email}/icon${extension}`;
    }

    const storageRef = this.st.ref(filePath);
    const uploadTask = this.st.upload(filePath, upload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          upload.url = downloadURL;
          upload.name = upload.file.name;
          this.saveFileData(upload);
        })
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }

  private saveFileData(upload: Upload): void {
    this.db.list(this.basePath).push(upload);
  }

  deleteFile(upload: Upload): void {
    this.deleteFileDatabase(upload.key)
      .then(() => {
        this.deleteFileStorage(upload.name);
      })
      .catch(err => console.log(err));
  }

  private deleteFileDatabase(key: string): Promise<void> {
    return this.db.list(this.basePath).remove(key);
  }

  private deleteFileStorage(name: string): void {
    const storageRef = this.st.ref(this.basePath);
    storageRef.child(name).delete();
  }
}
