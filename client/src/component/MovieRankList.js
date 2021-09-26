import React from "react";
import MovieRankListEntry from "./MovieRankListEntry";

export default function MovieRankList({ movieList, setCurrent }) {
  const handleClick = (movie) => {
    setCurrent(movie);
  };

  return (
    <div>
      {movieList.map((movie) => {
        return <MovieRankListEntry movie={movie} handleClick={handleClick} />;
      })}
    </div>
  );
}
