const express = require("express");
const app = express();

const path = require("path");
const cors = require("cors");
const fs = require("fs");
const renderModuleFactory = require('@angular/platform-server').renderModuleFactory;
const fetch = require('node-fetch');

// const handler = (req, res) => {
//   res.header("Access-Control-Allow-Origin", '*');

//   res.send(path.join(__dirname, "/docs/index.html"));
// };


app.use(cors());
app.use(express.static(__dirname + '/docs'));

app.get('*.*', express.static(path.join(__dirname, '..', 'docs')));

const routes = ["/", "/about", "/projects", "/contact", "/extras"];
routes.forEach(route => {
  app.get(route, (req, res) => {
    res.render('index', { req });
  });
});

app.get("/stats", (req, res) => {
  //I am so sorry for this...
  (async () => {
    let waka_data = await call_waka();
    res.send(waka_data);
  })();
});

//troubleshooting
app.get("/hey", (req, res) => {
  res.send(JSON.stringify(req));
});

app.get("/hi", (req, res) => {
  // res.send(req);
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200, ()=> {
  console.log("app started bruh");
});

async function call_waka(){
  const waka_url = "https://wakatime.com/api/v1/users/current/stats/last_7_days?" + process.env.WAKA_API_KEY;
  const res = await fetch(waka_url);
  const waka_data = await res.json();//assuming data is json
  console.log(waka_data)
}