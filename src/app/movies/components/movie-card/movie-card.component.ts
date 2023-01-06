import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {MovieModel} from "../../models/movie.model";
import {GenreNamesType} from "../../../shared/models/genre.model";
import {UrlUtils} from "../../../shared/utils/url-utils";

@Component({
  selector: 'app-movie-card[movie][genreNames]',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MovieCardComponent {
  @Input() movie!: MovieModel;
  @Input() genreNames!: GenreNamesType;

  get posterImg(): string {
    return UrlUtils.imagesBaseUrl + this.movie.poster_path
  }

  get voteColor(): string {
    return `hsl(${(this.movie.vote_average ?? 0) * 10}, 100%, 50%)`
  }
}
