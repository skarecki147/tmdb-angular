import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {MovieModel} from "../../models/movie.model";
import {MatSelectChange} from "@angular/material/select";
import {SORT_DEFAULT_OPTION, SORT_OPTIONS} from "../../../shared/utils/sort-options";
import {MoviesActions} from "../../store/movies.actions";
import {selectSortedMovies} from "../../store/movies.selectors";
import {selectGenres} from "../../../store/app.reducer";
import {GenreNamesType} from "../../../shared/models/genre.model";
import {StorageKeys, StorageUtils} from "../../../shared/utils/storage-utils";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MoviesListComponent {
  movies$: Observable<Array<MovieModel>> = this._store.select(selectSortedMovies)
  genreNames$: Observable<GenreNamesType> = this._store.select(selectGenres)

  sortOptions = SORT_OPTIONS
  sortDefaultOption: string | number

  constructor(private _store: Store) {
    this.sortDefaultOption = StorageUtils.getKey(StorageKeys.SORT_OPTION);
  }

  sortOptionChange({value}: MatSelectChange) {
    const sortOption = this.sortOptions.find(option => option.value == value) ?? this.sortOptions[0]
    this._store.dispatch(MoviesActions.changeSortOption({compareFn: sortOption.compareFn}))
    StorageUtils.setKey(StorageKeys.SORT_OPTION, sortOption.value);

  }
}
