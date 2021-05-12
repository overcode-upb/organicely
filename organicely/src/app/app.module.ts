import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from './shared/services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadService } from './shared/services/upload.service';
import { EventService } from './shared/services/event.service';
import { UsersService } from './shared/services/users.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { registerLocaleData } from '@angular/common';
import {
  AngularFireFunctionsModule,
  REGION,
} from '@angular/fire/functions';

import { ZoomInterceptor } from './shared/interceptors/zoom.interceptor';

import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);


//import{MatDateFormats, MAT_DATE_FORMATS, NativeDateAdapter, DateAdapter} from '@angular/material';

/*const MY_DATE_FORMATS = {
  parse: {
    dateInput: { day: 'numeric', month: 'numeric', year: 'numeric' }
  },
  display: {
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  }
};
*/
/*export class AppDateAdapter extends NativeDateAdapter {

  format(date: Date, displayFormat: Object): string {
    if (displayFormat === 'input') {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    } else {
      return date.toDateString();
    }
  }
}
 */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
  ],
  providers: [
    AuthService,
    { provide: REGION, useValue: 'us-central1' },
    { provide: LOCALE_ID, useValue: 'es-bo'},
    //{provide: DateAdapter, useClass: AppDateAdapter},
    //{provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS},
    UploadService,
    EventService,
    UsersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ZoomInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  exports: [

  ],
})
export class AppModule { }
