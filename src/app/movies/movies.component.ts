import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { MoviesApiActions } from "./store/movies.actions";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesComponent {
  constructor(private _store: Store) {
    this._store.dispatch(MoviesApiActions.fetchMovies({}));
  }
}
