import { Name } from "../models/names.models.js";

/* const getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
}; */

const postAddName = (req, res, next) => {
  const { name } = req.body;
  const newName = new Name(name);
  newName.save();
  res.redirect("/");
};

const getNames = (req, res, next) => {
  const names = Name.fetchAll();
  console.log(names);
  res.send(names);
  next();
};
const getNameById = (req, res, next) => {
  const id = req.params["id"];
  const name = Name.fetchById(id);
  console.log(name);
  res.send(name);
  next();
};

export { getNameById, postAddName, getNames };
