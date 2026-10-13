import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  private readonly movies: Movie[] = [
    { id: 1, title: 'Pacific Rim', director: 'Guillermo del Toro', producer: 'Laurence Fishburne', genre: 'Ciencia ficción', year: 2013,
      description: 'Hace mucho tiempo, legiones de criaturas monstruosas llamados Kaiju surgen del mar, llevando consigo una guerra. Para pelear contra los Kaiju, la humanidad desarrolla robots gigantes llamados Jaegers.',
      poster: 'https://i.pinimg.com/736x/26/ba/05/26ba0588a862fc9d9eed5ede1b42292c.jpg' },
    { id: 2, title: 'Jurassic Park', director: 'Steven Spielberg', producer: 'Amblin Entertainment', genre: 'Aventura', year: 1993,
      description: 'Un parque temático de dinosaurios se convierte en un infierno cuando los animales logran escapar.',
      poster: 'https://i.pinimg.com/736x/52/ce/b2/52ceb26df1db8d773625a6c93ba877e3.jpg' },
    { id: 3, title: 'Shin Godzilla', director: 'Hideaki Anno', producer: 'Toei Animation', genre: 'Thriller', year: 2016,
      description: 'Un monstruo misterioso emerge de la bahía de Tokio y causa estragos en Japón.',
      poster: 'https://i.pinimg.com/1200x/e7/b1/14/e7b114098aff15366cbff2c84f8a577a.jpg' },
    { id: 4, title: 'John Wick', director: 'Bryan Singer', producer: 'Lionsgate', genre: 'Acción', year: 2012,
      description: 'Un exasesino se venga de los que mataron a su perro.',
      poster: 'https://i.pinimg.com/1200x/c4/db/52/c4db52b98d2650b1de3c0fd302aa75f5.jpg' },
    { id: 5, title: 'Interestellar', director: 'Christopher Nolan', producer: 'Paramount Pictures', genre: 'Ciencia ficción', year: 2014,
      description: 'Un grupo de astronautas viaja a través de un agujero de gusano para salvar a la humanidad.',
      poster: 'https://i.pinimg.com/1200x/f5/0d/7c/f50d7cd2bd573c3d1be063f4eb8daf5f.jpg' },
    { id: 6, title: 'Back to the Future', director: 'Robert Zemeckis', producer: 'Universal Pictures', genre: 'Ciencia ficción', year: 1985,
      description: 'Un adolescente es transportado a los años 50 por un experimento fallido.',
      poster: 'https://i.pinimg.com/736x/77/dc/dd/77dcdd7dc0875d1daa1c0c88b8b6c0e7.jpg' },
    { id: 7, title: 'BloodBorne', director: 'Hidetaka Miyazaki', producer: 'FromSoftware', genre: 'Thriller', year: 2015,
      description: 'Un cazador de monstruos se adentra en un mundo misterioso y peligroso.',
      poster: 'https://i.pinimg.com/1200x/b1/25/4e/b1254e14dea0b7660bebc94d554de629.jpg' },
    { id: 8, title: 'IDK', director: 'Un Gato', producer: 'Gatos Rotos', genre: 'Drama Gatuna', year: 2026,
      description: 'Una historia de un gato que se encuentra en una situación desconocida.',
      poster: 'https://i.pinimg.com/1200x/e0/fe/c5/e0fec54241c9046e230b0acb378844ae.jpg' },
    { id: 9, title: 'Guardians of the Galaxy Vol. 3', director: 'James Gunn', producer: 'Marvel Studios', genre: 'Ciencia ficción', year: 2023,
      description: 'Los Guardianes de la Galaxia se enfrentan a un enemigo poderoso.',
      poster: 'https://i.pinimg.com/1200x/88/40/67/88406749ab3dbf4edef912189812346c.jpg' },
    { id: 10, title: 'STAR WARS', director: 'George Lucas', producer: 'Lucasfilm', genre: 'Ciencia ficción', year: 1977,
      description: 'La saga épica de Star Wars continúa con nuevas aventuras y desafíos.',
      poster: 'https://i.pinimg.com/1200x/e6/c2/98/e6c298fa0568a0f4849883d0d4c50317.jpg' },
    { id: 11, title: 'Guardians of the Galaxy Vol. 2', director: 'James Gunn', producer: 'Marvel Studios', genre: 'Ciencia ficción', year: 2017,
      description: 'Los Guardianes de la Galaxia se enfrentan a un enemigo poderoso.',
      poster: 'https://i.pinimg.com/736x/5b/68/ca/5b68ca917a3fd39900e94266afdd8cae.jpg' },
    { id: 12, title: 'Guardians of the Galaxy', director: 'James Gunn', producer: 'Marvel Studios', genre: 'Ciencia ficción', year: 2014,
      description: 'Los Guardianes de la Galaxia se enfrentan a un enemigo poderoso.',
      poster: 'https://i.pinimg.com/736x/e3/0b/48/e30b4831a31b9dc3e4467cd338f6c4eb.jpg' },
    { id: 13, title: 'Scott Pilgrim vs. the World', director: 'Bryan Singer', producer: '20th Century Fox', genre: 'Comedia', year: 2010,
      description: 'Scott Pilgrim se enfrenta a los ex-novios malvados de la chica de sus sueños.',
      poster: 'https://i.pinimg.com/736x/76/47/68/7647684c1f6a9057395f6ba8127b168f.jpg' },
    { id: 14, title: 'DanDaDan', director: 'Yukinobu Tatsu', producer: 'Studio Ghibli', genre: 'Comedia', year: 2023,
      description: 'Una historia de alienigenas y fantasmas.',
      poster: 'https://i.pinimg.com/1200x/ff/d1/e0/ffd1e0f5f8640815e9bed30b08e23e85.jpg' },
    { id: 15, title: 'Cyberpunk 2077', director: 'Keanu Reeves', producer: 'CD Projekt RED', genre: 'Acción', year: 2020,
      description: 'Un juego de rol de acción en un futuro distópico.',
      poster: 'https://i.pinimg.com/736x/af/be/ff/afbeff05d2547914457bacfb61ae7341.jpg' },
    { id: 16, title: 'How to Train Your Dragon', director: 'Dean DeBlois', producer: 'DreamWorks Animation', genre: 'Animación', year: 2010,
      description: 'Un joven vikingo entrena a un dragón.',
      poster: 'https://i.pinimg.com/1200x/d9/47/44/d94744c13773fdd1e210787ecd6f47f9.jpg' },
    { id: 17, title: 'How to Train Your Dragon: The Hidden World', director: 'Dean DeBlois', producer: 'DreamWorks Animation', genre: 'Animación', year: 2019,
      description: 'Hipo y Chimuelo descubren un mundo oculto de dragones.',
      poster: 'https://i.pinimg.com/736x/8b/81/0c/8b810c8f0ddce90362722b4563ad813c.jpg' }
  ];

  getAll(): Movie[] {
    return this.movies;
  }

  getById(id: number): Movie | undefined {
    return this.movies.find(m => m.id === id);
  }
}