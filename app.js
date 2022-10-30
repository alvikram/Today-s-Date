const express = require("express");
const newApp = express();

newApp.get("/", (request, response) => {
  let date = new Date();
  response.send(
    `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  );
});

module.exports = newApp;
newApp.listen(3001);
