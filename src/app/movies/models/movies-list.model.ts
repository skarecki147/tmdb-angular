import { MovieModel } from "./movie.model";
import { PageResponseModel } from "../../shared/models/page-response.model";

export interface MoviesListModel extends PageResponseModel {
  results: MovieModel[]
}
