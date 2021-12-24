import { Router } from "express";
import { getNames, getNameById } from "../controllers/names.controller.js";
const router = Router();

router.get("/", getNames, (req, res, next) => {
  res.status(200);
});
router.get("/:id", getNameById, (req, res, next) => {
  res.status(200);
});
export default router;
