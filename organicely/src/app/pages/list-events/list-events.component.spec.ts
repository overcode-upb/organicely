import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEventsComponent } from './list-events.component';

describe('PruebaComponent', () => {
  let component: ListEventsComponent;
  let fixture: ComponentFixture<ListEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEventsComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
