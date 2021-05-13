import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CardComponent } from './card.component';


describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente se crea correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('Todos los inputs deben estar definidos', () => { 
     expect(component.nombre).toBeDefined();
     expect(component.horario).toBeDefined();
     expect(component.urlImage).toBeDefined();
     expect(component.urlInfo).toBeDefined();
     expect(component.masInfoUrl).toBeDefined();
  }); 

  it('Revisar que los inputs lleguen correctamente', async(() => {
    fixture.whenStable().then(() => {
      expect(component.nombre).toBeDefined();
      expect(component.horario).toBeDefined();
      expect(component.urlImage).toBeDefined();
      expect(component.urlInfo).toBeDefined();
      expect(component.masInfoUrl).toBeDefined();
    });
  }));
});