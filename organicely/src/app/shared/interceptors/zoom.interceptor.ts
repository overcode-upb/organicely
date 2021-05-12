import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ZoomInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = '';
    if (token) {
    	request = request.clone({ 
    		url: request.url.indexOf('?') > -1 ? `${request.url}&auth=${token}` : `${request.url}?auth=${token}` 
    	});
    }

    return next.handle(request);
  }
}
