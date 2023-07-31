import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MoviesServiceService } from './services/movies.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { TokenInterceptor } from './interceptors/token/token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: MoviesServiceService, useClass: MoviesServiceService },
    importProvidersFrom(HttpClientModule),
    provideStore(),
    provideEffects(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
]
};
