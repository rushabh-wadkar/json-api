const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 7000;
const router = require("./routes/route");

app.engine(".html", require("ejs").__express);
app.set("views", path.join(__dirname, "../", "dist"));
app.set("view engine", "html");

app.use(router);

app.listen(PORT, () => {
  console.log("Server running at port: " + PORT);
});
