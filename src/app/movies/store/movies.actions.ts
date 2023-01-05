import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { ApiErrorModel } from "../../shared/models/api-error.model";
import { MovieModel } from "../models/movie.model";
import { MovieDetailsModel } from "../models/movie-details.model";
import { MovieCompareFnType } from "./movies.reducer";

export const MoviesActions = createActionGroup({
  source: 'Movies',
  events: {
    'Change Sort Option': props<{compareFn: MovieCompareFnType}>(),
  }
})

export const MoviesApiActions = createActionGroup({
  source: 'Movies API',
  events: {
    'Fetch Movies': props<{ page?: number }>(),
    'Fetch Movies Success': props<{ movies: Array<MovieModel> }>(),
    'Fetch Movies Failure': props<{ error: ApiErrorModel }>(),

    'Fetch Movie Details': emptyProps(),
    'Fetch Movie Details Success': props<{ movie: MovieDetailsModel }>(),
    'Fetch Movie Details Failure': props<{ error: ApiErrorModel }>(),
  }
})
