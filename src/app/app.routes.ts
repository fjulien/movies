import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { theMovieReducer } from './stores/reducers/the-movie.reducer';
import { theMovieEffect } from './stores/effects/the-movie.effect';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    providers: [
      provideState(theMovieReducer),
      provideEffects({ theMovieEffect })],
  },
];
