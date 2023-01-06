import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ApiService} from "../core/services/api.service";
import {AppActions} from "./app.actions";
import {catchError, map, mergeMap, of} from "rxjs";
import {MoviesApiActions} from "../movies/store/movies.actions";


@Injectable()
export class AppEffects {
  fetchGenres$ = createEffect(() => this._actions$.pipe(
    ofType(AppActions.fetchGenres),
    mergeMap(() => this._api.getGenreList().pipe(
      map(genres => AppActions.fetchGenresSuccess({genres})),
      catchError(err => of(MoviesApiActions.fetchMoviesFailure({error: err})))
    ))
  ))

  constructor(private _actions$: Actions, private _api: ApiService) {
  }
}
