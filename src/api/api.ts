export async function fetchUpcomingMovies(pageNumber: string | number) {
  const response = await fetch(
    `${import.meta.env.VITE_MOVIE_URL}/upcoming?api_key=${
      import.meta.env.VITE_MOVIE_DB_API
    }&page=${pageNumber}`
  );

  if (!response.ok) {
    throw new Error("Could not fetch upcoming movies");
  }
  const movies = response.json().then((res) => res.results);
  return movies;
}
