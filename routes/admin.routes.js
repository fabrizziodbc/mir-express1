import { Router } from "express";
const { pathname: formView } = new URL("../views/form.html", import.meta.url);

const router = Router();

router
  .get("/form", (req, res, next) => {
    res
      .status(200)
      /* .send(
        `<form action="/admin/form" method="POST" target="_blank"><input type="text" name="name"/><button type="submit">Send</button></form>`
      ); */
      .sendFile(formView);
  })
  .post("/form", (req, res, next) => {
    console.log(req.body);
    res.status(301).redirect("/");
  });
export default router;
