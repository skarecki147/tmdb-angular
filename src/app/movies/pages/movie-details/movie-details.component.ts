import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from "rxjs";
import { MovieDetailsModel } from "../../models/movie-details.model";
import { selectMovieDetails } from "../../store/movies.selectors";
import { Store } from "@ngrx/store";
import { MoviesApiActions } from "../../store/movies.actions";
import { UrlUtils } from "../../../shared/utils/url-utils";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MovieDetailsComponent {
  movieDetails$: Observable<MovieDetailsModel | null> = this._store.select(selectMovieDetails)

  constructor(private _store: Store) {
    this._store.dispatch(MoviesApiActions.fetchMovieDetails())
  }

  getImageUrl(path: string): string {
    return UrlUtils.imagesBaseUrl + path
  }

  getVoteColor(voteAvg = 0): string {
    return `hsl(${(voteAvg) * 10}, 100%, 50%)`
  }
}
