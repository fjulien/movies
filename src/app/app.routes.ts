import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { theMovieReducer } from './stores/reducers/the-movie.reducer';
import { loadMovie, loadMovies } from './stores/effects/the-movie.effect';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    providers: [
      provideState(theMovieReducer),
      provideEffects({  loadMovies })
    ],
  },
  {
    path: 'movie/:id',
    providers: [
      provideState(theMovieReducer),
      provideEffects({  loadMovie })
    ],
    loadComponent: () => import('./pages/movie-detail/movie-detail.component').then((c) => c.MovieDetailComponent)
  }
];
