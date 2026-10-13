import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Movie } from '../../shared/models/movie';
import { MoviesService } from '../../shared/services/movies';
import { FavoritesService } from '../../shared/services/favorites';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-detail.html',
  styleUrls: ['./movie-detail.scss']
})
export class MovieDetailComponent {
  movie?: Movie;
  isFavorite$!: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    public favorites: FavoritesService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.moviesService.getById(id);
    this.isFavorite$ = this.favorites.isFavorite$(id);
  }
}