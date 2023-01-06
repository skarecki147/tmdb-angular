import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MoviesRoutingModule } from "./movies-routing.module";
import { CoreModule } from "../core/core.module";
import { MaterialModule } from "../material/material.module";
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { moviesFeature } from "./store/movies.reducer";
import { MoviesEffects } from "./store/movies.effects";


@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailsComponent,
    MoviesListComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    CoreModule,
    MaterialModule,
    StoreModule.forFeature(moviesFeature),
    EffectsModule.forFeature([MoviesEffects]),
  ]
})
export default class MoviesModule {
}
