const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const router = express.Router();
require("dotenv").config();
const API_URL = process.env.BASE_API_URL;

router.post("/", async (req, res, next) => {
  const longUrl = req.body.url;

  try {
    let response = await fetch(`${API_URL}/shorten?url=${longUrl}`, {
      method: "GET",
    });

    response = await response.json();

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({
      message: `Internal Server Error.`,
    });
  }
});

module.exports = router;
