const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 7000;
const router = require("./routes/route");

app.use(router);

app.listen(PORT, () => {
  console.log("Server running at port: " + PORT);
});
