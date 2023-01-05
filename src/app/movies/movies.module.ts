import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MoviesRoutingModule } from "./movies-routing.module";
import { CoreModule } from "../core/core.module";
import { MaterialModule } from "../material/material.module";



@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailsComponent,
    MoviesListComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    CoreModule,
    MaterialModule
  ]
})
export default class MoviesModule { }
