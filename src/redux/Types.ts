export interface User {
  id: string;
  name: string;
  email: string;
}

export interface MoviesSearched {
  movies: Movie[];
}

export interface Filters {
  filters: string[];
}

export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  genres: string[];
  rating: string;
  duration: string;
  summary: string;
}

export interface MovieGenreState {
  movieGenres: MovieGenre[];
}

export interface MovieGenre {
  id: string;
  title: string;
  movies: number[];
}

export interface Loading {
  loading: boolean;
}
