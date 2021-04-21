const express = require("express");
const app = express();

const path = require("path");

const cors = require("cors");

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/docs'));
app.use(cors());

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/docs/index.html"));
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/docs/index.html"));
  });

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5000);