export interface User {
  id: string;
  name: string;
  email: string;
}

export interface MoviesSearched {
  movies: Movie[];
  id: 'test';
}

export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
}

export interface Loading {
  loading: boolean;
}
