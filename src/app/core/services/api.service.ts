import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environment";
import { UrlUtils } from "../../shared/utils/url-utils";
import { MoviesListModel } from "../../movies/models/movies-list.model";
import { map, Observable } from "rxjs";
import { MovieDetailsModel } from "../../movies/models/movie-details.model";
import { GenreModel } from "../../shared/models/genre.model";

@Injectable()
export class ApiService {
  private readonly _baseUrl: string;
  private readonly _apiKey: string;
  private readonly _httpParams: HttpParams;

  constructor(private _http: HttpClient) {
    this._baseUrl = UrlUtils.apiBaseUrl
    this._apiKey = environment.API_KEY

    this._httpParams = new HttpParams().set('api_key', this._apiKey)
  }

  getPopularMovies(page = 1): Observable<MoviesListModel> {
    return this._http.get<MoviesListModel>(
      `${this._baseUrl}/movie/popular`,
      {
        params: this._httpParams.append('page', page)
      })
  }

  getMovieDetails(id: number): Observable<MovieDetailsModel> {
    return this._http.get<MovieDetailsModel>(
      `${this._baseUrl}/movie/${id}`,
      {
        params: this._httpParams
      })
  }

  getSimilarMovies(id: number): Observable<MoviesListModel> {
    return this._http.get<MoviesListModel>(
      `${this._baseUrl}/movie/${id}/recommendations`,
      {
        params: this._httpParams
      })
  }

  getGenreList(): Observable<Array<GenreModel>> {
    return this._http.get<{ genres: Array<GenreModel> }>(
      `${this._baseUrl}/genre/movie/list`,
      {
        params: this._httpParams
      }).pipe(
      map(res => res.genres)
    )
  }
}
