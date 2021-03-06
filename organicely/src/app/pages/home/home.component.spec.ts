import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../shared/services/auth.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ FormsModule, RouterTestingModule, HttpClientTestingModule ],
      providers: [AuthService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente se crea correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('Revisar que todas las imagenes en "CREAR EVENTOS" se carguen correctamente', () => {
    const ele = fixture.debugElement.nativeElement.querySelectorAll('img');
        expect(ele[0]['src']).toContain('400.png'); 
        
  });

  it('Revisar que todas las imagenes en "SOBRE NOSOTROS" se carguen correctamente', () => {
    const ele = fixture.debugElement.nativeElement.querySelectorAll('img');
        expect(ele[1]['src']).toContain('wifi.png'); 
        expect(ele[2]['src']).toContain('time.png'); 
        expect(ele[3]['src']).toContain('money.png');

  });
});

