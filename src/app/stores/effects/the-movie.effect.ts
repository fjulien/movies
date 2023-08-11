import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, catchError, map, switchMap, tap } from "rxjs";
import { MoviesServiceService } from "src/app/services/movies.service";
import { theMovieActions } from "../actions/the-movie.action";

export const loadMovies = createEffect((actions$ = inject(Actions)) => {
  const moviesServiceService = inject(MoviesServiceService);
  return actions$.pipe(
    ofType(theMovieActions.getMovies),
    switchMap(() => {
      return moviesServiceService.getListUpcoming().pipe(
        map(({ results }) => theMovieActions.setMovies({ movies: results || [] })),
        catchError((error) => {
          console.error(error);
          return EMPTY;
        })
      )
    })
  )
},
  { functional: true });

export const loadMovie = createEffect((actions$ = inject(Actions)) => {
  const moviesServiceService = inject(MoviesServiceService);
  return actions$.pipe(
    ofType(theMovieActions.getMovie),
    switchMap(({ movieId }) => {
      return moviesServiceService.getMovie(movieId).pipe(
        map((movie) => theMovieActions.setMovie({ movie })),
        catchError((error) => {
          console.error(error);
          return EMPTY;
        })
      )
    })
  )
},
  { functional: true })

export const postToWatchlist = createEffect((actions$ = inject(Actions)) => {
  const moviesServiceService = inject(MoviesServiceService);
  return actions$.pipe(
    ofType(theMovieActions.postToWatchlist),
    switchMap(({ movieId }) => {
      return moviesServiceService.postToWatchlist({ media_id: movieId, media_type: 'movie', watchlist: true }).pipe(
        tap((res)=> alert(res.status_message)),
        catchError((error) => {
          console.error(error);
          return EMPTY;
        })
      )
    })
  )
},
  { functional: true, dispatch: false })

