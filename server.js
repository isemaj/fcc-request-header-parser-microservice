"use strict";
const express = require('express');
const app = express();

var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", function (req, res) {
  res.json({"ipaddress": req.ip, "language": req.get("accept-language"), "software": req.get("user-agent")});
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
