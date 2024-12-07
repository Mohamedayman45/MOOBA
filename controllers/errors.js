exports.error404 = (req, res, next) => {
  res.status(404).render("page404", { pageTitle: "page404" });
};
