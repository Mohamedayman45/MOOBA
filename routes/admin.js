const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/add-product", (req, res, next) => {
  res.render('admin' , {pageTitle: 'admin page'});
});

router.post("/add-product", (req, res, next) => {
  if (req.body && Object.getPrototypeOf(req.body) === null) {
    req.body = { ...req.body };
  }
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
