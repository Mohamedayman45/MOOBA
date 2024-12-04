const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

const app = express();

app.set('view engine' , 'ejs')
app.set('views'  , 'views')

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.status(404).render('page404', {pageTitle: "page404"});
});

app.listen(3000);
