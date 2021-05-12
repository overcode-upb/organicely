import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { RouterTestingModule } from '@angular/router/testing'
import { AuthService } from '../../shared/services/auth.service'
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersService } from 'src/app/shared/services/users.service';
import { UploadService } from 'src/app/shared/services/upload.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import {environment} from '../../../environments/environment';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [ FormsModule, RouterTestingModule, HttpClientTestingModule,  AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule ],
      providers: [AuthService, UsersService, UploadService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente se crea correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('Revisar que el email sea valido', async(() => {
    fixture.whenStable().then(() => {
        let email = component.form.form.controls['email'];
        expect(email.valid).toBeFalsy;
        expect(component.form.valid).toBeFalsy();
        email.setValue('novalido');
        expect(email.errors).toBeTruthy();
    });
  }));

  it('Revisar que la pwd tenga 6 caracteres min', async(() => {
    fixture.whenStable().then(() => {
        let password = component.form.form.controls['password'];
        expect(password.valid).toBeFalsy;
        expect(component.form.valid).toBeFalsy();
        password.setValue('12');
        expect(password.errors).toBeTruthy();
    });
  }));
});