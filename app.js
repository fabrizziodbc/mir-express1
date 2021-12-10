import express from "express";
import adminRoutes from "./routes/admin.routes.js";
import names from "./routes/names.routes.js";
const { pathname: publicFolder } = new URL("./public", import.meta.url);
const app = express();
const port = 5050;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicFolder));
app.use("/admin", adminRoutes);
app.use("/", names);
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found!</h1>");
});

app.listen(port, () => {
  console.log(`Listing at http://localhost:${port}`);
});
