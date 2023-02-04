const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT || 8080;

const shortcodeRoutes = require("./routes/shortcode");

const app = express();

app.use("/api.shortly/v1/", shortcodeRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
