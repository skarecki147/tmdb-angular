import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { MovieModel } from "../../models/movie.model";
import { GenreNamesType } from "../../../shared/models/genre.model";

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

}
