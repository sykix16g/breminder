const express = require("express");
//const fs = require("fs");
const app = express();
const router = express.Router();
const store = require('./store');

const bodyParser = require('body-parser') // body-parser

const PORT = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.use(express.static('./resources'));
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

router
  .get("/", (req, res) => {
    // index.ejsをレンダリング
    res.render("index.ejs");
  })
  .post("/", (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    console.log(req.body);

    // リクエストを保存
    store.SaveReminder(req.body.date, req.body.time, req.body.description);

    // index.ejsをレンダリング
    res.render("index.ejs");
  });


// routeの設定
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
