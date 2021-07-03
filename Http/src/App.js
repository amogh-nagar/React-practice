import React, {useState, useEffect, useCallback} from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  const [movies, setmovies] = useState([]);
  const [isloading, setisloading] = useState(false);
  const [error, seterror] = useState(null);

  const fetchmovieshandler = useCallback(async () => {
    try {
      setisloading(true);
      const res = await fetch(
        "https://react-first-http-default-rtdb.firebaseio.com/movies.json"
      );

      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
      console.log(res);
      const data = await res.json();

      console.log(data);
      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setmovies(loadedMovies);
      setisloading(false);
    } catch (err) {
      seterror(err.message);
      setisloading(false);
    }
  }, []);

  const addmoviehandler = async (movie) => {
    const res = await fetch(
      "https://react-first-http-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
    fetchmovieshandler();

  };

  useEffect(() => {
    fetchmovieshandler();
  }, [fetchmovieshandler]);

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addmoviehandler} />
      </section>
      <section>
        <button onClick={fetchmovieshandler}>Fetch Movies</button>
      </section>
      <section>
        {!isloading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isloading && movies.length === 0 && !error && <p>Found no movies!</p>}
        {isloading && <p>Loading!!!!</p>}
        {!isloading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
