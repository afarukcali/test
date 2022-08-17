const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const sha256context = require("sha256context");
const https = require("https");

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

app.listen(process.env.PORT || 3005, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
