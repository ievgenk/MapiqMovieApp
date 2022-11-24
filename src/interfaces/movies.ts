export interface IUpcomingMovie {
  backdrop_path: string;
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  genre_ids: number[];
}

export interface IMovieGenre {
  id: number;
  name: string;
}
