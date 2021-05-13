import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ZoomService } from './zoom.service';

describe('ZoomService', () => {
  let service: ZoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
    });
    service = TestBed.inject(ZoomService);
  });

  it('El Servicio se crea correctamente', () => {
    expect(service).toBeTruthy();
  });
});
