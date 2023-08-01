import { inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { theMovieActions } from "../actions/the-movie.action";
import { theMovieReducer } from "../reducers/the-movie.reducer";
import { MoviesEntity } from "src/app/models/the-movie.model";

export function theMovieFeature() {
  const store = inject(Store);

  return {
    getMovies: () => store.dispatch(theMovieActions.getMovies()),
    setMovies: (movies: MoviesEntity[]) => store.dispatch(theMovieActions.setMovies({ movies })),
    getMovie: (movieId:number) => store.dispatch(theMovieActions.getMovie({movieId})),
    setMovie: (movie: MoviesEntity) => store.dispatch(theMovieActions.setMovie({ movie })),
    removeMovie: () => store.dispatch(theMovieActions.removeMovie()),
    selectsMoviesSplitedByRow: (size: number) => store.selectSignal(theMovieReducer.selectsMoviesSplitedByRow(size))(),
    selectsMovie: store.select(theMovieReducer.selectMovie),

  };
}