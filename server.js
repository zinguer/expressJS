const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  let time = new Date().getHours();
  if ((time > 8) && (time < 17)) {
    res.sendFile(__dirname + '/public/running.html');
  }
  else
  res.sendFile(__dirname + "/public/notrunning.html");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/contactUs", (req, res) => {
  res.sendFile(__dirname + "/public/contactUs.html");
});

app.get("/services", (req, res) => {
  res.sendFile(__dirname + "/public/services.html");
});

app.get("/public/style.css", (req, res) => {
  res.sendFile(__dirname + "/public/style.css");
});

app.listen(PORT, () => {
  console.log("server is running ");
});
