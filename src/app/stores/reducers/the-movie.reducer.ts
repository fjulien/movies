import { createFeature, createReducer, createSelector, on } from "@ngrx/store";
import { theMovieActions } from "../actions/the-movie.action";
import { MoviesEntity } from "src/app/models/the-movie.model";

interface TheMovieReducer {
  movies: any[]
}

const initialState: TheMovieReducer = {
  movies: []
}

export const theMovieReducer = createFeature({
  name: 'The movies',
  reducer: createReducer(
    initialState,
    on(theMovieActions.setMovies, (state, action) => ({
      ...state,
      movies: action.movies,
    })),

  ),
  extraSelectors: ({ selectMovies }) => ({
    selectsMoviesSplitedByRow: (size: number )=> createSelector(selectMovies, (movies) => {
      const chunk: MoviesEntity[][] = []
      for (let i = 0; i < movies.length; i += size) {
        chunk.push(movies.slice(i, i + size));
      }
      return chunk
    }),
  }),
})