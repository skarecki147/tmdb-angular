import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from "rxjs";
import { MovieDetailsModel } from "../../models/movie-details.model";
import { selectMovieDetails } from "../../store/movies.selectors";
import { Store } from "@ngrx/store";
import { MoviesApiActions } from "../../store/movies.actions";
import { UrlUtils } from "../../../shared/utils/url-utils";
import { Router } from "@angular/router";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MovieDetailsComponent implements OnInit {
  movieDetails$: Observable<MovieDetailsModel | null> = this._store.select(selectMovieDetails)

  constructor(private _store: Store, private _router: Router) {
  }

  ngOnInit() {
    this._store.dispatch(MoviesApiActions.fetchMovieDetails())
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  getImageUrl(path: string): string {
    return UrlUtils.imagesBaseUrl + path
  }

  getVoteColor(voteAvg = 0): string {
    return `hsl(${(voteAvg) * 10}, 100%, 50%)`
  }
}
