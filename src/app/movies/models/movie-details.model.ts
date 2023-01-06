import { SpokenLanguageModel } from "../../shared/models/spoken-language.model";
import { ProductionCompanyModel } from "../../shared/models/production-company.model";
import { ProductionCountryModel } from "../../shared/models/production-country.model";
import { GenreModel } from "../../shared/models/genre.model";
import { CollectionModel } from "./collection.model";
import { MovieModel } from "./movie.model";

export interface MovieDetailsModel {
  adult: boolean,
  backdrop_path: string,
  belongs_to_collection: CollectionModel[],
  budget: number,
  genres: GenreModel[],
  homepage: string | null,
  id: number,
  imdb_id: string | null,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string | null,
  production_companies: ProductionCompanyModel[],
  production_countries: ProductionCountryModel[],
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: SpokenLanguageModel[],
  status: string,
  tagline: string | null,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
  related_movies?: MovieModel[]
}
