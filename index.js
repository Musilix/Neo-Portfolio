const express = require("express");
const app = express();

const path = require("path");

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/docs'));
// app.use(requireHTTPS);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", 'https://www.kareemshehab.com');
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/docs/index.html"));
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/docs/index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5000);

// function requireHTTPS(req, res, next) {
//   // The 'x-forwarded-proto' check is for Heroku
//   if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
//       return res.redirect('https://' + req.get('host') + req.url);
//   }
//   next();
// }