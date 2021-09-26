import React from "react";

export default function MovieRankListEntry({ movie, handleClick }) {
  return (
    <ul
      onClick={() => {
        handleClick(movie);
      }}
    >
      <li>image</li>
      <li>title : {movie.Title}</li>
      <li>runningTime : {movie.Runtime}</li>
      <li>rating : {movie.Rated}</li>
      <li>genre</li>
    </ul>
  );
}
