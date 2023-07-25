import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { TicketMasterService } from './services/ticket-master.service';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {provide:TicketMasterService,useClass:TicketMasterService},
    importProvidersFrom(HttpClientModule) ]
};
