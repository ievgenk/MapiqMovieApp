export async function fetchUpcomingMovies({ pageParam = 1 }) {
  const response = await fetch(
    `${import.meta.env.VITE_MOVIE_URL}/upcoming?api_key=${
      import.meta.env.VITE_MOVIE_DB_API
    }&page=${pageParam}&language=en-US`
  );

  if (!response.ok) {
    throw new Error("Could not fetch upcoming movies");
  }
  const { results, total_pages, page } = await response.json();
  const nextPage = page <= total_pages ? page + 1 : null;
  return { response: results, nextPage };
}
