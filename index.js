const fetch = require("node-fetch");

const express = require("express");
const app = express();

const path = require("path");
const cors = require("cors");
const fs = require("fs");

// const handler = (req, res) => {
//   res.header("Access-Control-Allow-Origin", '*');

//   res.send(path.join(__dirname, "/docs/index.html"));
// };
// const routes = ["/", "/about", "/projects", "/contact", "/extras"];

// routes.forEach(route => app.get(route, handler));

app.use(cors());
app.use(express.static(__dirname + '/docs'));

const template = fs.readFileSync(path.join(__dirname, 'docs', 'index.html')).toString();

app.engine('html', (_, options, callback) => {
  const opts = { document: template, url: options.req.url };

  renderModuleFactory(AppServerModuleNgFactory, opts)
    .then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', 'src');

app.get('*.*', express.static(path.join(__dirname, '..', 'docs')));

app.get('*', (req, res) => {
  res.render('index', { req });
});

app.get("/hey", (req, res) => {
  res.send("hey");
});


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