import { Injectable } from '@angular/core';
import {Upload} from '../../pages/create-event/upload';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private basePath = '/uploads'

  constructor(private st: AngularFireStorage, private db: AngularFireDatabase) { }

  uploadFileToStorage(upload: Upload): Observable<number | undefined>{
    const user = JSON.parse(<string> localStorage.getItem('user'));
    const filePath = `${this.basePath}/${user.email}/${upload.file.name}`;
    const storageRef = this.st.ref(filePath);
    const uploadTask = this.st.upload(filePath, upload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          localStorage.setItem('imageURL',downloadURL)
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

  getFiles(numberItems): AngularFireList<Upload> {
    return this.db.list(this.basePath, ref => ref.limitToLast(numberItems))
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
