const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT || 8080;

const shortcodeRoutes = require("./routes/shortcode");

const app = express();

app.use(bodyParser.json());

// Prevent cors errors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/api.shortly/v1/", shortcodeRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
