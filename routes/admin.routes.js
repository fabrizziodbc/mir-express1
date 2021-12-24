import { Router } from "express";
import { postAddName } from "../controllers/names.controller.js";
const { pathname: formView } = new URL("../views/form.html", import.meta.url);

const router = Router();

router
  .get("/form", (req, res, next) => {
    res.status(200).sendFile(formView);
  })
  .post("/form", postAddName);
export default router;
