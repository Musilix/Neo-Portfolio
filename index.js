const express = require("express");
const app = express();

const path = require("path");
const cors = require("cors");
const fetch = require("node-fetch");
const nodemailer = require("nodemailer");
const enforce = require("express-sslify");

const ENV_DIR = process.env.NODE_ENV === "production";

//REMOVE?
app.enable("trust proxy");
app.disable("strict routing");

if (ENV_DIR) {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
} else {
  // Somewhat hacky way to only use dotenv if we're in local dev
  require("dotenv").config();
}

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + "/docs"));

const routes = ["/", "/about", "/projects", "/contact", "/extras"];

routes.forEach((route) => {
  app.get(route, (req, res) => {
    res.sendFile(path.join(__dirname, `docs/index.html`));
  });
});

app.get("/stats", async (req, res) => {
  const waka_url =
    "https://wakatime.com/api/v1/users/current/stats/last_7_days?api_key=" +
    process.env.WAKA_API_KEY;

  const waka_data = await fetch(waka_url)
    .then((res) => res.json())
    .catch((err) => {
      res.errored();
      console.error(err);
    });

  res.send(waka_data);
});

app.post("/sendmail", async (req, res) => {
  console.log("Sending Email: ");
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER_RUNT,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER_RUNT,
    to: process.env.EMAIL_USER,
    secure: true,
    subject: req.body.topic,
    text: `Email from ${req.body.emailAddress}: \n ${req.body.message}`,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    let sendStatus = true;
    res.send(sendStatus);
  } catch (e) {
    console.error(`Something went dreadfully wrong: ${e}`);
    let sendStatus = false;
    res.send(sendStatus);
  }
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200, () => {
  console.log(`app started on ${process.env.PORT || 4200}, bruh`);
});
