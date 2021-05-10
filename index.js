const express = require("express");
const app = express();

const path = require("path");
const cors = require("cors");
const fetch = require('node-fetch');

app.enable('trust proxy');
app.disable('strict routing');
app.use(cors());
app.use(express.static(__dirname + '/docs'));

// app.get("/prot", (req, res) => {
//   res.send(req.protocol);
// });
const routes = ["/", "/about", "/projects", "/contact", "/extras"];

app.use((req, res, next) => {
  console.log("Protocol: " + req.protocol);
  console.log("Host: " + req.get('host') );
  console.log("orig url: " + req.originalUrl);

  if(!req.secure){
    res.redirect(301, `https://${req.get('host')}${req.originalUrl}`);
  }else{
    next();
  }
});

// app.get("/", (req, res) =>{
//   console.log("<<<<<<<<<<<<<<<<<<<<<<< ROOT HIT >>>>>>>>>>>>>>>>>>>>>>>>")
// });

// app.all("/*", (req, res, next) => {
//   console.log("True endpoint handler");
//   console.log("Using https? : " + req.secure);

//   res.sendFile(path.join(__dirname + "/docs/index.html"))
// });

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