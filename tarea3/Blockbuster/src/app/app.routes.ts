import { Routes } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail';
import { FavoritesComponent } from './pages/favorites/favorites';

export const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movies/:id', component: MovieDetailComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: '**', redirectTo: '' },
];