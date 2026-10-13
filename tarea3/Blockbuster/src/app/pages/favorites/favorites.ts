import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Movie } from '../../shared/models/movie';
import { FavoritesService } from '../../shared/services/favorites';
import { MovieCardComponent } from '../../shared/components/movie-card/movie-card';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './favorites.html',
  styleUrls: ['./favorites.scss']
})
export class FavoritesComponent {
  favorites$: Observable<Movie[]>;

  constructor(public favoritesService: FavoritesService) {
    this.favorites$ = this.favoritesService.favorites$;
  }
}