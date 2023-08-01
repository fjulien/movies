import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
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
          return of()
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
      switchMap(({movieId}) => {
        return moviesServiceService.getMovie(movieId).pipe(
          map((movie) => theMovieActions.setMovie({ movie })),
          catchError((error) => {
            console.error(error);
            return of()
          })
        )
      })
    )
  },
    { functional: true })
