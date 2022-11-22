import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUpcomingMovies } from "./api/api";
import { useSearchParams } from "react-router-dom";

function App() {
  const [params, setParams] = useSearchParams();
  const numberOfUpcomingMovies = params.get("upcomingMovies") || 1;

  const result = useQuery({
    queryKey: ["upcomingMovies", numberOfUpcomingMovies],
    queryFn: () => fetchUpcomingMovies(numberOfUpcomingMovies),
  });
  console.log(result.data);
  return <h1>Hello</h1>;
}

export default App;
