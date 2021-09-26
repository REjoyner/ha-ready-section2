export const getMovie = (movie = false) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:5000/movies${movie.id ? "/" + movie.id : ""}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return resolve(json);
      });
  });
};
