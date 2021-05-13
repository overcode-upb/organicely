import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async,ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import {environment} from '../../../environments/environment';

import { CreateEventComponent } from './create-event.component';

describe('CreateEventComponent', () => {
  let component: CreateEventComponent;
  let navbar: NavbarComponent;
  let fixture: ComponentFixture<CreateEventComponent>;
  let fixture2: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEventComponent ],
      imports: [ FormsModule, RouterTestingModule, HttpClientTestingModule,  AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule],
      providers: [NavbarComponent,AuthService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventComponent);
    component = fixture.componentInstance;
    fixture2 = TestBed.createComponent(NavbarComponent);
    navbar=fixture2.componentInstance;
    fixture.detectChanges();
    fixture2.detectChanges();
  });

  it('El componente se crea correctamente', () => {
    expect(component).toBeTruthy();
  });
});
