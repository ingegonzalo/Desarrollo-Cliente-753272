import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Movie } from '../../shared/models/movie';
import { MoviesService } from '../../shared/services/movies';
import { FavoritesService } from '../../shared/services/favorites';
import { MovieCardComponent } from '../../shared/components/movie-card/movie-card';
import { MovieFilterComponent, MovieFilters } from '../../shared/components/movie-filter/movie-filter';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, MovieCardComponent, MovieFilterComponent],
  templateUrl: './movies.html',
  styleUrls: ['./movies.scss']
})
export class MoviesComponent {
  private all: Movie[];
  filtered: Movie[] = [];
  favorites$: Observable<Movie[]>;

  constructor(private moviesService: MoviesService, public favoritesService: FavoritesService) {
    this.all = this.moviesService.getAll();
    this.filtered = this.all;
    this.favorites$ = this.favoritesService.favorites$;
  }

  isFav(id: number, favs: Movie[]): boolean {
    return favs.some(m => m.id === id);
  }

  applyFilters(f: MovieFilters): void {
    const has = (value: string, term: string) =>
      value.toLowerCase().includes((term ?? '').trim().toLowerCase());

    this.filtered = this.all.filter(m =>
      has(m.title, f.title) &&
      has(m.director, f.director) &&
      has(m.producer, f.producer) &&
      has(m.genre, f.genre) &&
      has(String(m.year), f.year)
    );
  }
}