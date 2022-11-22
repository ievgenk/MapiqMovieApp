import { useState } from "react";

function App() {
  const [upcomingMovies, setUpcomingMovies] = useState(null);

  console.log(import.meta.env.VITE_MOVIE_DB_API);
  return <h1>Hello</h1>;
}

export default App;
