const fetch = require("node-fetch");

const express = require("express");
const app = express();

const path = require("path");
const cors = require("cors");

const handler = (req, res) => {
  res.header("Access-Control-Allow-Origin", '*');

  res.sendFile(path.join(__dirname, "/docs/index.html"));
};
const routes = ["/", "/about", "/projects", "/contact", "/extras"];

routes.forEach(route => app.get(route, handler));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/docs'));
app.use(cors({
  origin: 'https://www.kareemshehab.com'
}));

app.get("/stats", (req, res) => {
  const waka = "https://wakatime.com/api/v1/users/current/stats/last_7_days?" + process.env.WAKA_API_KEY;
  const waka_data = fetch(waka).then((datum) => {
    return datum;
  }).catch((err) => {
    console.log("wuh woh... waka error");
  });

  return waka_data;
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200, ()=> {
  console.log("app started bruh");
});