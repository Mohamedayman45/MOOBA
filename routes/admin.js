const express = require("express");
const productsController = require("../controllers/products");
const bodyParser = require("body-parser");
const router = express.Router();


router.use(bodyParser.urlencoded({ extended: false }));
router.get("/add-product", productsController.getAddproducts);
router.post("/add-product", productsController.postAddProducts);

module.exports = router
