const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const sha256context = require("sha256context");
const https = require("https");

var server = https.createServer(app);

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/result", (req, res) => {
  const { text } = req.query;
  const sha256contextResult = sha256context(text);

  res.render("result.ejs", { result: sha256contextResult });
});

var port = process.env.PORT || 3005;

server.listen(port, function () {
  console.log("server listen on", this.address());
});

server.on("clientError", function (err) {
  console.log("ERROR", err);
});
