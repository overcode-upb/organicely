import { TestBed } from '@angular/core/testing';

import { ZoomInterceptor } from './zoom.interceptor';

describe('ZoomInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ZoomInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ZoomInterceptor = TestBed.inject(ZoomInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
