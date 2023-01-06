import {createFeature, createReducer, on} from '@ngrx/store';
import {AppActions} from "./app.actions";
import {GenreNamesType} from "../shared/models/genre.model";

export const appFeatureKey = 'app';

export interface AppState {
  genres: GenreNamesType
}

const initialState: AppState = {
  genres: {}
}

export const appFeature = createFeature({
  name: appFeatureKey,
  reducer: createReducer(
    initialState,
    on(AppActions.fetchGenres, (_state) => (_state)),
    on(AppActions.fetchGenresSuccess, (_state, {genres}) => ({
      ..._state, genres: Object.assign({}, ...genres.map(genre => ({[genre.id]: genre.name})))
    })))
})

export const {
  name: appFeatureName, reducer: appReducer, selectAppState, selectGenres,
} = appFeature;

