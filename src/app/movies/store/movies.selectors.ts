import {createSelector} from "@ngrx/store";
import {selectMovies, selectMoviesDetails, selectMoviesSortFn} from "./movies.reducer";
import {selectRouteParams} from "../../store/router.selectors";

export const selectMovieDetails = createSelector(
  selectMoviesDetails,
  selectRouteParams,
  (moviesDetails, {movieId}) => moviesDetails[+movieId] ?? null
);

export const selectSortedMovies = createSelector(
  selectMovies,
  selectMoviesSortFn,
  (movies, sortFn) => [...movies].sort(sortFn)
);
