import { MovieCompareFnType } from "../store/movies.reducer";

export interface SortOptionModel {
  value: string | number,
  name: string,
  compareFn: MovieCompareFnType
}
