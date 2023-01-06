import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {GenreModel} from "../shared/models/genre.model";
import {ApiErrorModel} from "../shared/models/api-error.model";

export const AppActions = createActionGroup({
  source: 'App', events: {
    'Fetch Genres': emptyProps(),
    'Fetch Genres Success': props<{ genres: GenreModel[] }>(),
    'Fetch Genres Failure': props<{ error: ApiErrorModel }>(),
  }
})
