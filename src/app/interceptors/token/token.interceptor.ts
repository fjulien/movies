import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs';
import { MovieEntity } from 'src/app/models/the-movie.model';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<MovieEntity>, next: HttpHandler): Observable<HttpEvent<MovieEntity>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${environment.theMovie.bearer}`
      }
    });
    return next.handle(request);
  }
}
