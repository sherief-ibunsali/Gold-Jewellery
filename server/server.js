const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");

app.use(cors());

app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});

const category = JSON.parse(
  fs.readFileSync("./dev-data/category.json", "utf-8")
);
const gallery = JSON.parse(fs.readFileSync("./dev-data/gallery.json", "utf-8"));
const gift = JSON.parse(fs.readFileSync("./dev-data/gift.json", "utf-8"));
const gold = JSON.parse(fs.readFileSync("./dev-data/gold.json", "utf-8"));

app.get("/api/jewellery/category", (req, res) => {
  res.status(200).json({
    status: "success",
    results: category.length,
    data: {
      category,
    },
  });
});

app.get("/api/jewellery/gallery", (req, res) => {
  res.status(200).json({
    status: "success",
    results: gallery.length,
    data: {
      gallery,
    },
  });
});

app.get("/api/jewellery/gift", (req, res) => {
  res.status(200).json({
    status: "success",
    results: gift.length,
    data: {
      gift,
    },
  });
});

app.get("/api/jewellery/gold", (req, res) => {
  res.status(200).json({
    status: "success",
    results: gold.length,
    data: {
      gold,
    },
  });
});

app.listen("4000", () => {
  console.log("Server is running on the 4000");
});
