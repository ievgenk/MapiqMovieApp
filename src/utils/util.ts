import { IMovieGenre } from "../interfaces/movies";

export function establishMovieGenre(
  movieGenres: IMovieGenre[],
  movieGenreIds: number[]
) {
  return movieGenres
    .filter((movieGenre) => movieGenreIds.includes(movieGenre.id))
    .map((movieGenre) => movieGenre.name);
}
