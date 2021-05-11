const express = require("express");
const app = express();

const path = require("path");
const cors = require("cors");
const fetch = require('node-fetch');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser')

app.enable('trust proxy');
app.disable('strict routing');

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/docs'));

const routes = ["/", "/about", "/projects", "/contact", "/extras"];

app.use((req, res, next) => {
  if(!req.secure){
    res.redirect(301, `https://${req.get('host')}${req.originalUrl}`);
  }else{
    next();
  }
});

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

app.post("/sendmail", bodyParser.json(), async(req, res) => {
  console.log(req);
  const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    secure: true,
    subject: req.body.topic,
    text: `Email from ${req.body.emailAddress}: \n ${req.body.message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      req.send(error);
    } else {
      console.log('Email sent: ' + info.response);
      req.send('Email sent: ' + info.response);
    }
  });
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200, ()=> {
  console.log("app started bruh");
});