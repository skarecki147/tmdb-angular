import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { MoviesComponent } from "./movies.component";
import { MoviesListComponent } from "./pages/movies-list/movies-list.component";
import { MovieDetailsComponent } from "./pages/movie-details/movie-details.component";

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    children: [
      {
        path: '',
        component: MoviesListComponent,
        title: 'Movie list'
      },
      {
        path: ':movieId',
        component: MovieDetailsComponent,
        title: 'Movie details'
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {
}
