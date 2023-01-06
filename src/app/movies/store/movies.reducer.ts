import {createFeature, createReducer, on} from '@ngrx/store';
import {MoviesActions, MoviesApiActions} from "./movies.actions";
import {MovieModel} from "../models/movie.model";
import {MovieDetailsModel} from "../models/movie-details.model";
import {SORT_DEFAULT_OPTION, SORT_OPTIONS} from "../../shared/utils/sort-options";

export const moviesFeatureKey = 'movies';

export type MovieCompareFnType = ((a: MovieModel, b: MovieModel) => number)

export interface MoviesState {
  loading: boolean,
  movies: Array<MovieModel>,
  moviesSortFn: MovieCompareFnType
  moviesDetails: { [key: number]: MovieDetailsModel },
}

const initialState: MoviesState = {
  loading: false,
  movies: [],
  moviesSortFn: SORT_OPTIONS.find(opt => opt.value === SORT_DEFAULT_OPTION)?.compareFn ?? SORT_OPTIONS[0].compareFn,
  moviesDetails: {},
};

export const moviesFeature = createFeature({
  name: moviesFeatureKey, reducer: createReducer(initialState, // Movies API
    on(MoviesApiActions.fetchMovies, (_state) => ({
      ..._state, loading: true
    })), on(MoviesApiActions.fetchMoviesSuccess, (_state, {movies}) => ({
      ..._state, movies: movies, loading: false
    })), on(MoviesApiActions.fetchMoviesFailure, (_state) => ({..._state, loading: false})),

    // Movie Details API
    on(MoviesApiActions.fetchMovieDetails, (_state) => ({..._state})), on(MoviesApiActions.fetchMovieDetailsSuccess, (_state, {movie}) => ({
      ..._state, moviesDetails: {
        ..._state.moviesDetails, [movie.id]: movie
      }
    })), on(MoviesApiActions.fetchMovieDetailsFailure, (_state) => _state),

    // Movies
    on(MoviesActions.changeSortOption, (_state, {compareFn}) => ({
      ..._state, moviesSortFn: compareFn
    })))
});

export const {
  name: moviesFeatureName,
  reducer: moviesReducer,
  selectMoviesState,
  selectLoading,
  selectMovies,
  selectMoviesSortFn,
  selectMoviesDetails,
} = moviesFeature;
