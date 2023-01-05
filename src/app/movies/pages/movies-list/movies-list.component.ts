import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { MovieModel } from "../../models/movie.model";
import { MatSelectChange } from "@angular/material/select";
import { SORT_OPTIONS } from "../../../shared/utils/sort-options";
import { MoviesActions } from "../../store/movies.actions";
import { selectSortedMovies } from "../../store/movies.selectors";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent {
  movies$: Observable<Array<MovieModel>> = this._store.select(selectSortedMovies)

  sortOptions = SORT_OPTIONS

  constructor(private _store: Store) {
  }

  sortOptionChange({value}: MatSelectChange) {
    const compareFn = this.sortOptions.find(option => option.value == value)!.compareFn
    console.log('DISPATCH')
    this._store.dispatch(MoviesActions.changeSortOption({compareFn}))
  }
}
