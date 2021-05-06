import { Injectable } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFireDatabase} from '@angular/fire/database';
import {finalize} from 'rxjs/operators';
import {Upload} from '../models/upload';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private basePath = '/uploads'
  private download: string

  constructor(private st: AngularFireStorage,
              private db: AngularFireDatabase) { }

  uploadFileToStorage(upload: Upload, event: boolean, eventId?: string): string{
    let email = localStorage.getItem('email');
    let filePath;
    const extension:string  = '.' + upload.file.name.split('.')[1]
    if(event){
      filePath = `/events/${email}${eventId}${extension}`;
    } else {
      filePath = `/icons/${email}/icon${extension}`;
    }

    const storageRef = this.st.ref(filePath);
    const uploadTask = this.st.upload(filePath, upload.file);


    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          return this.download = downloadURL;
        })
      })
    ).subscribe();

    if(event){
      return 'hola'
    } else {
      // @ts-ignore
      email = email.replace('@','%40')
      return `https://firebasestorage.googleapis.com/v0/b/organicely.appspot.com/o/icons%2F${email}%2Ficon${extension}?alt=media`;
    }
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
