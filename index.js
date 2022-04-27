const express = require("express");

const server = express();

const PORT = 3000;

server.listen(PORT, () => {
  console.log("server Listening....");
});

server.get("/mike", (req, res) => {
  res.send("<h1>Hi Michael</h1>");
});
