import React from "react";
import "./CurrentMovie.css";

export default function CurrentMovie({ current }) {
  return (
    <div className="movie">
      <div>title : {current.Title}</div>
      <div>image</div>
      <div>rating : {current.Rated}</div>
      <div>description : {current.Plot}</div>
    </div>
  );
}
