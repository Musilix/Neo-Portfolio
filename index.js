const express = require("express");
const app = express();

const path = require("path");
const cors = require("cors");
const fetch = require('node-fetch');

app.enable('trust proxy');
app.disable('strict routing');
app.use(cors());
app.use(express.static(__dirname + '/docs'));

app.use((req, res, next) => {
  console.log(req.protocol);
  if(req.protocol !== "https"){
    console.log("if");
    console.log(req.get('host'));
    console.log(req.originalUrl);
    res.redirect('https://' + req.get('host') + req.originalUrl)
  }else{
    console.log("else");
    next();
  }
});

const routes = ["/", "/about", "/projects", "/contact", "/extras"];
routes.forEach(route => {
  app.get(route, (req, res) => {
    res.sendFile(path.join(__dirname + "/docs/index.html"))
  });
});

app.get("/stats", async(req, res) => {
  const waka_url = "https://wakatime.com/api/v1/users/current/stats/last_7_days?api_key=" + process.env.WAKA_API_KEY;
  const waka_res = await fetch(waka_url)
  const waka_data = await waka_res.json();

  res.send(waka_data);
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200, ()=> {
  console.log("app started bruh");
});