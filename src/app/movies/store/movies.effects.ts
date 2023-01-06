import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from "../../core/services/api.service";
import { MoviesApiActions } from "./movies.actions";
import { catchError, map, mergeMap, of, switchMap, tap } from "rxjs";
import { Store } from "@ngrx/store";
import { selectRouteParams } from "../../store/router.selectors";
import { MatSnackBar } from "@angular/material/snack-bar";


@Injectable()
export class MoviesEffects {
  fetchMovies$ = createEffect(() => this._actions$.pipe(
    ofType(MoviesApiActions.fetchMovies),
    mergeMap(({page}) => this._api.getPopularMovies(page).pipe(
      map(moviesList => MoviesApiActions.fetchMoviesSuccess({movies: moviesList.results})),
      catchError(err => of(MoviesApiActions.fetchMoviesFailure({error: err})))
    )))
  )

  fetchMovieDetails$ = createEffect(() => this._actions$.pipe(
    ofType(MoviesApiActions.fetchMovieDetails),
    concatLatestFrom(() => this._store.select(selectRouteParams)),
    switchMap(([, {movieId}]) => this._api.getMovieDetails(movieId).pipe(
      map(movieDetails => MoviesApiActions.fetchMovieDetailsSuccess({movie: movieDetails})),
      catchError(err => of(MoviesApiActions.fetchMovieDetailsFailure({error: err})))
    )))
  )

  moviesFailure$ = createEffect(() => this._actions$.pipe(
    ofType(MoviesApiActions.fetchMoviesFailure, MoviesApiActions.fetchMovieDetailsFailure),
    tap(() => this._snackBar.open(
      'Something gone wrong :(', 'OK', {
        panelClass: 'error-snackbar'
      }))
  ), {dispatch: false});

  constructor(private _actions$: Actions,
              private _api: ApiService,
              private _store: Store,
              private _snackBar: MatSnackBar
  ) {
  }
}
