import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async,ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../shared/services/auth.service';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ FormsModule, RouterTestingModule, HttpClientTestingModule ],
      providers: [AuthService,  { provide: Router, useValue: routerSpy }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
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

  it('Login con un usuario registrado', async(() => {
    fixture.whenStable().then(() => {

        spyOn(component, 'onLogin');
        let button = fixture.debugElement.nativeElement.querySelector('button');
        let email = component.form.form.controls['email'];
        let password = component.form.form.controls['password'];
        
        email.setValue('angular@angular.com');
        password.setValue('123456');
        expect(component.form.valid).toBeTruthy();

        button.click();

        expect(component.onLogin).toHaveBeenCalled();
        expect(component.error).toBeFalsy();
        
      });
  }));
  
});