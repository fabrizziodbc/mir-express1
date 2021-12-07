import express from "express";
const app = express();
const port = 5050;

app.use(express.urlencoded({ extended: true }));
app.get("/form", (req, res, next) => {
  res
    .status(200)
    .send(
      `<form action="/results" method="POST" target="_blank"><input type="text" name="name"/><button type="submit">Send</button></form>`
    );
});
app.post("/results", (req, res, next) => {
  console.log(req.body);
  res.status(301).redirect("/");
});
app.get("/", (req, res, next) => {
  res.status(200).send("<h1>Estamos en el directorio Raiz</h1>");
});

app.listen(port, () => {
  console.log(`Listing at http://localhost:${port}`);
});
