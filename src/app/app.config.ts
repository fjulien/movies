import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { TicketMasterService } from './services/ticket-master.service';
import { HttpClientModule } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: TicketMasterService, useClass: TicketMasterService },
    importProvidersFrom(HttpClientModule),
    provideStore(),
    provideEffects()
]
};
