const express = require("express");
const app = express();

const path = require("path");
const cors = require("cors");
const fetch = require('node-fetch');

app.use(cors());
app.use(express.static(__dirname + '/docs'));

app.get('*.*', express.static(path.join(__dirname, '..', 'docs')));

const routes = ["/", "/about", "/projects", "/contact", "/extras"];
routes.forEach(route => {
  app.get(route, (req, res) => {
    res.render('index', { req });
  });
});

app.get("/stats", async(req, res) => {
    const waka_url = "https://wakatime.com/api/v1/users/current/stats/last_7_days?apikey=" + process.env.WAKA_API_KEY;
    const waka_res = await fetch(waka_url)
    const waka_data = JSON.parse(waka_res);

    res.send(waka_data);
});

app.get("/stats2", async(req, res) => {
  const waka_url = "https://wakatime.com/api/v1/users/current/stats/last_7_days?apikey=" + process.env.WAKA_API_KEY;
  const waka_res = await fetch(waka_url)
  const waka_data = await waka_res.json();

  res.send(waka_data);
});

app.get("/stats3", async(req, res) => {
  const waka_url = "https://wakatime.com/api/v1/users/current/stats/last_7_days?apikey=" + process.env.WAKA_API_KEY;
  const waka_res = await fetch(waka_url)
  const waka_data = waka_res;

  res.send(waka_data);
});

app.get("/ping", (req, res) => {
  res.send("https://wakatime.com/api/v1/users/current/stats/last_7_days?apikey=" + process.env.WAKA_API_KEY);
  // res.send(req);
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200, ()=> {
  console.log("app started bruh");
});