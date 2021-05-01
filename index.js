const express = require("express");
const app = express();

const path = require("path");
const cors = require("cors");
const fetchy = require('node-fetch');

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
  res.send("hi");
  // res.send(req);
});

app.get("/ping", (req, res) => {
  res.send(process.env.WAKA_API_KEY);
  // res.send(req);
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200, ()=> {
  console.log("app started bruh");
});

async function call_waka(){
  const waka_url = "https://wakatime.com/api/v1/users/current/stats/last_7_days?";

  const res = await fetchy(waka_url, {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      Authorization: process.env.WAKA_API_KEY,
    }
  })
  .then((res) => {
    if(!response.ok){
      catchError(response);
    } 
  })
  .catch((err) => {console.log(err)});

  const waka_data = await res.json();//assuming data is json

  return waka_data;
}