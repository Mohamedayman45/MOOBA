const path = require("path");
const errorsController = require("./controllers/errors.js");
const express = require("express");

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(express.static(path.join(__dirname, "public")));

app.use(errorsController.error404);

app.listen(3000);
