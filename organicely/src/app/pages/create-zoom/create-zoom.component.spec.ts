import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/shared/services/auth.service';

import { CreateZoomComponent } from './create-zoom.component';

describe('CreateZoomComponent', () => {
  let component: CreateZoomComponent;
  let fixture: ComponentFixture<CreateZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateZoomComponent ],
      imports: [ FormsModule, RouterTestingModule, HttpClientTestingModule ],
      providers: [AuthService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente se crea correctamente', () => {
    expect(component).toBeTruthy();
  });
});
