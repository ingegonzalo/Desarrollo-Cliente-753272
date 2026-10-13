import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private readonly _favorites$ = new BehaviorSubject<Movie[]>([]);
  readonly favorites$: Observable<Movie[]> = this._favorites$.asObservable();

  getFavorites(): Movie[] {
    return this._favorites$.value;
  }

  add(movie: Movie): void {
    if (!this.isFavorite(movie.id)) {
      this._favorites$.next([...this._favorites$.value, movie]);
    }
  }

  remove(id: number): void {
    this._favorites$.next(this._favorites$.value.filter(m => m.id !== id));
  }

  toggle(movie: Movie): void {
    this.isFavorite(movie.id) ? this.remove(movie.id) : this.add(movie);
  }

  isFavorite(id: number): boolean {
    return this._favorites$.value.some(m => m.id === id);
  }

  isFavorite$(id: number): Observable<boolean> {
    return this.favorites$.pipe(map(list => list.some(m => m.id === id)));
  }
}