import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { MoviesEntity } from "src/app/models/the-movie.model";

export const theMovieActions = createActionGroup({
  source:'The movie',
  events:{
    getMovies: emptyProps(),
    setMovies: props<{movies:MoviesEntity[]}>(),
  }
})