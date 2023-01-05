import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from "rxjs";
import { MovieDetailsModel } from "../../models/movie-details.model";
import { selectMovieDetails } from "../../store/movies.selectors";
import { Store } from "@ngrx/store";
import { MoviesApiActions } from "../../store/movies.actions";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsComponent {
  movieDetails$: Observable<MovieDetailsModel | null> = this._store.select(selectMovieDetails)

  constructor(private _store: Store) {
    this._store.dispatch(MoviesApiActions.fetchMovieDetails())
  }
}
