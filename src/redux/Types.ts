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
}

export interface MovieGenreState {
  movies: MovieGenre[];
}

export interface MovieGenre {
  id: string;
  title: string;
  movies: number[];
}

export interface Loading {
  loading: boolean;
}
