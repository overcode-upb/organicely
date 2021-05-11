import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateZoomComponent } from './create-zoom.component';

describe('CreateZoomComponent', () => {
  let component: CreateZoomComponent;
  let fixture: ComponentFixture<CreateZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateZoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});