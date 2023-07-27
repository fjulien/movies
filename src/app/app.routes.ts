import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { ticketMasterReducer } from './stores/reducers/ticket-master.reducer';
import { ticketMasterEffect } from './stores/effects/ticket-master.effect';

export const routes: Routes = [
  {
  path: '',
  component: HomeComponent,
  providers: [provideState(ticketMasterReducer), provideEffects({ticketMasterEffect})],
},
];
