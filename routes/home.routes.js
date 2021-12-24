import { Router } from "express";
const router = Router();

router.get("/", (req, res, next) => {
  res.status(200).send("<h1>Estamos en el directorio Raiz</h1>");
});
export default router;
