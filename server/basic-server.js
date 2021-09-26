const express = require("express");
const app = express();
const cors = require("cors");
const dummyData = require("./initialState");

const PORT = 5000;
const ip = `localhost`;

const corsOptions = {
  origin: "*",
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/movies", (req, res) => {
  res.send(dummyData);
  res.end();
});

app.get("/movies/:id", (req, res) => {
  const movieID = Number(req.params.id);
  const result = dummyData.filter((data) => {
    return data.id === movieID;
  });
  res.send(result);
  res.end();
});

app.listen(PORT, () => {
  console.log(`app listening at http://${ip}:${PORT}`);
});
