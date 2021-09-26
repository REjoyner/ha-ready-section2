// import logo from "./logo.svg";
import "./App.css";
import CurrentMovie from "./component/CurrentMovie";
import { initialState } from "./data/initialState";
import { useEffect, useState } from "react";
import MovieRankList from "./component/MovieRankList";
import { getMovie } from "./MovieDataApi";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [once, setOnce] = useState(1);
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovie().then((data) => {
      setMovieList(data);
      setCurrent(data[0]);
      setIsLoading(false);
    });
  }, [once]);

  return (
    <>
      <header>Movie Top 10</header>
      <section>
        {isLoading ? <div>Loading...</div> : <CurrentMovie current={current} />}
        <MovieRankList movieList={movieList} setCurrent={setCurrent} />
      </section>
    </>
  );
}

export default App;
