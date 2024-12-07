const Product = require("../models/product");

exports.getAddproducts = (req, res, next) => {
  res.render("admin", { pageTitle: "admin page" });
};

exports.postAddProducts = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  console.log(product);
  res.redirect("/");
};

exports.viewProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", { prods: products, pageTitle: "shop" });
  });
};
